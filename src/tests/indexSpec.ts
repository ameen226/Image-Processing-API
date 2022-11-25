import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Testing the API endpoint responses', () => {
    it('gets the /api/images end point (no arguments) with 200 response status', async () => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(200);
    });

    it('gets the /api/images end point (with arguments) with 200 response status', async () => {
        const response = await request.get(
            '/api/images?filename=fjord&width=200&height=200'
        );
        expect(response.status).toBe(200);
    });

    it('gets the /api/images end point (with invalid file name) with 200 response status', async () => {
        const response = await request.get(
            '/api/images?filename=gibbberish&width=200&height=200'
        );
        expect(response.status).toBe(200);
    });
});
