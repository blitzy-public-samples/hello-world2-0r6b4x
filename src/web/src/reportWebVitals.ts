// web-vitals v2.1.0 - Core Web Vitals measurement library
import { ReportHandler } from 'web-vitals';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

/**
 * Reports Core Web Vitals metrics using the provided report handler callback.
 * Implements comprehensive performance monitoring for key user-centric metrics:
 * - CLS (Cumulative Layout Shift)
 * - FID (First Input Delay)
 * - FCP (First Contentful Paint)
 * - LCP (Largest Contentful Paint)
 * - TTFB (Time to First Byte)
 *
 * @param onPerfEntry Optional callback function to handle performance metrics
 * If not provided, metrics will be logged to console in development mode
 */
const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  // Validate onPerfEntry is a function if provided
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    try {
      // Measure and report Cumulative Layout Shift
      getCLS(onPerfEntry);
      
      // Measure and report First Input Delay
      getFID(onPerfEntry);
      
      // Measure and report First Contentful Paint
      getFCP(onPerfEntry);
      
      // Measure and report Largest Contentful Paint
      getLCP(onPerfEntry);
      
      // Measure and report Time to First Byte
      getTTFB(onPerfEntry);
    } catch (error) {
      // Log any measurement errors in development mode
      if (process.env.NODE_ENV === 'development') {
        console.error('Error measuring Web Vitals:', error);
      }
    }
  } else if (process.env.NODE_ENV === 'development') {
    // Development mode fallback - log metrics to console when no callback provided
    try {
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    } catch (error) {
      console.error('Error measuring Web Vitals:', error);
    }
  }
};

export default reportWebVitals;