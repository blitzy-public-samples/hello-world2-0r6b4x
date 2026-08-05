# Hello World React TypeScript Application

[![Build Status](https://github.com/actions/workflows/build/badge.svg)](https://github.com/actions/workflows/build)
[![Test Status](https://github.com/actions/workflows/test/badge.svg)](https://github.com/actions/workflows/test)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

A minimal, production-ready Hello World application showcasing React with TypeScript setup. This project serves as a foundational template demonstrating the basic setup and configuration of a modern web application using type-safe JavaScript.

### Features

- React 18 with TypeScript integration
- Production-ready build configuration
- Development toolchain setup
- Type-safe component architecture
- WCAG 2.1 Level A compliance
- Modern browser support
- Comprehensive development workflow

### Technology Stack

- React 18.2.0
- TypeScript 4.9.5
- Create React App 5.x
- Node.js 16.x+
- ESLint 8.x
- Jest 27.x
- Webpack 5.x

## Prerequisites

### System Requirements

- Node.js >= 16.x
- npm >= 8.x or yarn latest
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Development Tools

- TypeScript-enabled IDE recommended (VS Code, WebStorm, etc.)
- Git for version control

## Quick Start

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd hello-world-react-typescript
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Verify setup:
   ```bash
   npm run type-check
   # or
   yarn type-check
   ```

### Development

1. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

2. Access the application:
   - Open [http://localhost:3000](http://localhost:3000) in your browser
   - The page will reload on file changes
   - Type errors will be shown in the console

### Production Build

1. Create production build:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. The optimized build will be available in the `build/` directory

## Project Structure

### Directory Layout

```
hello-world-react-typescript/
├── src/                # Application source code
│   ├── components/     # React components
│   ├── App.tsx        # Root component
│   └── index.tsx      # Entry point
├── public/            # Static assets
├── build/            # Production build output
├── config/           # Configuration files
└── package.json      # Project configuration
```

### Key Files

- `package.json` - Project dependencies and scripts
- `tsconfig.json` - TypeScript compiler configuration
- `README.md` - Project documentation
- `CONTRIBUTING.md` - Contribution guidelines
- `LICENSE` - MIT license terms

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server at http://localhost:3000 |
| `npm test` | Run test suite with Jest |
| `npm run build` | Create production build in build/ |
| `npm run lint` | Run ESLint code analysis |
| `npm run type-check` | Run TypeScript compiler checks |

## Backend (Express)

A minimal [Express.js](https://expressjs.com/) server, added as a sibling package at `src/backend/`. It exposes two plain-text HTTP endpoints and runs as an independent Node process with no code-level coupling to the React application under `src/web/`.

### Endpoints

| Method | Path | Response |
|---------|------|----------|
| `GET` | `/` | `Hello world` |
| `GET` | `/good-evening` | `Good evening` |

### Install & Run

```bash
cd src/backend
npm install
npm start
```

The server listens on port `3001` by default, overridable via the `PORT` environment variable (`process.env.PORT || 3001`). Port `3001` is used to avoid the frontend webpack dev server, which runs on port `3000`.

### Verify

```bash
curl http://localhost:3001/            # -> Hello world
curl http://localhost:3001/good-evening # -> Good evening
```

See [`src/backend/README.md`](src/backend/README.md) for full backend details.

## Enterprise Adoption Readiness

An evidence-based enterprise-adoption readiness assessment of this repository is maintained alongside the other project documents, covering strengths, weaknesses, risks, modernization opportunities and recommended next steps. Its findings are evidenced rather than asserted: claims about this repository are backed by a file-and-line citation or by captured command output, and claims about the world outside it — runtime support lifecycles, currently published package and action versions, framework upgrade requirements — are backed by links to the authoritative source, each recorded with the date it was observed and flagged as a point-in-time observation that should be re-checked before it is acted upon. It is an assessment only: it records findings and recommendations against a specific commit, changes no application code, dependency version, configuration or infrastructure definition, and applies no remediation. Every improvement it describes, including the runtime, framework and tooling upgrades, is a recommendation for future work rather than a change already applied here.

See [Enterprise Adoption Readiness Assessment](documentation/Enterprise%20Adoption%20Readiness%20Assessment.md).

## Development Guidelines

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Maintain strict type safety
- Follow React 18 conventions
- Write comprehensive tests

### Performance Considerations

- Initial page load target: < 1.5 seconds
- Optimize bundle size
- Implement code splitting when needed
- Follow React performance best practices

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on:

- Development workflow
- Code standards
- Pull request process
- Testing requirements

## Security

- CSP headers configured
- React's built-in XSS protection
- Strict HTTPS enforcement
- Regular dependency audits
- Security headers implementation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:
- Create an issue in the repository
- Review existing documentation
- Follow contribution guidelines

---

Built with ❤️ using React and TypeScript