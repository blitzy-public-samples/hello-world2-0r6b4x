const request = require('supertest');
const app = require('./server');

describe('backend endpoints', () => {
  it('GET / returns Hello world', async () => {
    await request(app).get('/').expect(200, 'Hello world');
  });
  it('GET /good-evening returns Good evening', async () => {
    await request(app).get('/good-evening').expect(200, 'Good evening');
  });
});
