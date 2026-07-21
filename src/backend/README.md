# Hello World Express Backend

A minimal Node.js + Express server exposing two plain-text endpoints. Runs as an independent process, separate from the React SPA in `src/web/`.

## Prerequisites
- Node.js >= 16.14.0
- npm >= 8.3.0

## Install
```bash
npm install
```

## Run
```bash
npm start
```
The server listens on port `3001` by default. Override with the `PORT` environment variable (see `.env.example`):
```bash
PORT=4000 npm start
```

## Endpoints
| Method | Path            | Response       |
| ------ | --------------- | -------------- |
| GET    | `/`             | `Hello world`  |
| GET    | `/good-evening` | `Good evening` |

## Verify
```bash
curl http://localhost:3001/
# -> Hello world

curl http://localhost:3001/good-evening
# -> Good evening
```

## Test
```bash
npm test
```
Runs the Jest + Supertest suite (`server.test.js`) that asserts both endpoints.
