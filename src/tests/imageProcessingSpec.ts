import { access } from 'fs';
import processImg from '../imageProcessing';

describe('Testing processImg function', () => {
    const validQuery = {
        filename: 'fjord',
        width: '300',
        height: '300'
    };

    it('returns the resized image path', async () => {
        const resultPath = await processImg(validQuery);
        access(resultPath, (err) => {
            expect(err).toBeNull();
        });
    });
});
