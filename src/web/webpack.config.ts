import path from 'path';
import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

// Import tsconfig for consistent TypeScript configuration
import tsconfig from './tsconfig.json';

interface WebpackEnv {
  mode: 'development' | 'production';
  WEBPACK_SERVE?: boolean;
}

/**
 * Generates optimized webpack configuration based on environment mode
 * @param env - Environment configuration object
 * @returns Webpack configuration object
 */
const getWebpackConfig = (env: WebpackEnv): Configuration => {
  const isDevelopment = env.mode === 'development';
  const isProduction = !isDevelopment;

  /**
   * Base webpack configuration
   */
  const config: Configuration = {
    mode: env.mode,
    target: 'web',
    entry: './src/index.tsx',

    output: {
      path: path.resolve(__dirname, 'build'),
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
      chunkFilename: isProduction ? '[name].[contenthash].chunk.js' : '[name].chunk.js',
      publicPath: '/',
      clean: true,
    },

    module: {
      rules: [
        // TypeScript/TSX files handling
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true, // Use ForkTsCheckerWebpackPlugin for type checking
                compilerOptions: {
                  ...tsconfig.compilerOptions,
                  sourceMap: isDevelopment,
                },
              },
            },
          ],
          exclude: /node_modules/,
        },
        // Asset handling
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[name].[hash][ext]',
          },
        },
      ],
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },

    plugins: [
      // HTML template handling
      new HtmlWebpackPlugin({
        template: './public/index.html',
        inject: true,
        minify: isProduction ? {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        } : false,
      }),
      // Parallel TypeScript type checking
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          configFile: './tsconfig.json',
          memoryLimit: 4096,
        },
      }),
      // Environment variables
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env.mode),
      }),
    ],

    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 2020,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
        }),
      ],
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: -10,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
      runtimeChunk: 'single',
    },

    // Development-specific configuration
    ...(isDevelopment && {
      devtool: 'eval-source-map',
      devServer: {
        port: 3000,
        hot: true,
        open: true,
        historyApiFallback: true,
        client: {
          overlay: {
            errors: true,
            warnings: false,
          },
        },
        https: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
    }),

    // Production-specific configuration
    ...(isProduction && {
      devtool: 'source-map',
      plugins: [
        ...config.plugins!,
        new CompressionPlugin({
          algorithm: 'gzip',
          test: /\.(js|css|html|svg)$/,
          threshold: 10240,
          minRatio: 0.8,
        }),
      ],
      performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
        hints: 'warning',
      },
    }),
  };

  return config;
};

export default getWebpackConfig;