import { resolve } from 'path';
import sharp from 'sharp';
import fs from 'fs';

type reqQuery = {
    filename?: string;
    width?: string;
    height?: string;
};

const processImg = async (query: reqQuery): Promise<string> => {
    try {
        const thumbImg = resolve(
            __dirname,
            '../assets/thumbs',
            `${query.filename}-${query.width}x${query.height}-thumb.jpg`
        );
        const imgPath = resolve(
            __dirname,
            `../assets/full/${query.filename}.jpg`
        );

        await sharp(imgPath)
            .resize(
                parseInt(query.width as string),
                parseInt(query.height as string)
            )
            .toFormat('jpeg')
            .toFile(thumbImg);
        return thumbImg;
    } catch (err) {
        return 'something went Wrong while processing';
    }
};

export default processImg;
