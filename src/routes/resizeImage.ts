import processImg from '../imageProcessing';
import express from 'express';
import { resolve } from 'path';
import { stringify } from 'querystring';
import fs from 'fs';

type reqQuery = {
    filename?: string;
    width?: string;
    height?: string;
};

const route = express.Router();

route.get(
    '/api/images',
    async (req: express.Request, res: express.Response): Promise<void> => {
        const width = req.query.width;
        const height = req.query.height;
        const fileName = req.query.filename;

        if (!width || !height || !fileName) {
            res.send(
                'please provide filename, width and height at the end of the end point, as follows ?filename=(file name)&width=(desired width)&height=(desired height)'
            );
            return;
        }

        const imgPath = resolve(__dirname, `../../assets/full/${fileName}.jpg`);
        const thumbFilePath = resolve(
            __dirname,
            '../../assets/thumbs',
            `${fileName}-${width}x${height}-thumb.jpg`
        );

        fs.access(imgPath, (err): void => {
            if (err) {
                res.send(
                    'file name does not exist please provide an existed file name'
                );
            } else {
                fs.access(thumbFilePath, async (err): Promise<void> => {
                    if (err) {
                        const result: string = await processImg(
                            req.query as reqQuery
                        );
                        res.sendFile(result);
                    } else {
                        res.sendFile(thumbFilePath);
                    }
                });
            }
        });
    }
);

export default route;
