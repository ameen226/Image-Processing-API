import express from 'express';
import route from './routes/resizeImage';
import { resolve } from 'path';
import fs from 'fs';

const app = express();
const port = 3000;

app.use(route);

app.listen(port, () => {
    const thumbPath = resolve(__dirname, '../assets/thumbs');
    fs.access(thumbPath, (err) => {
        if (err) {
            fs.mkdir(thumbPath, () => {
                console.log('creating thumb folder');
            });
        }
    });
    console.log('listening on port 3000');
});

export default app;
