import request from 'supertest';
import app from '../../app';

describe('GET /health', () => {
  it('should return 200', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
  });

  it('should return valid response', async () => {
    const response = await request(app).get('/health');
    expect(response.body.status).toBe('ok');
  });
});
