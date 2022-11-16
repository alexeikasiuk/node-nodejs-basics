import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { setPath } from '../helper/setPath.js';

const url = import.meta.url;
const dest = setPath(url, 'files/fileToCompress2.txt');
const src = setPath(url, 'files/archive.gz');

const decompress = async () => {
  const gunzip = createGunzip();
  const readStream = createReadStream(src);
  const writeStream = createWriteStream(dest);

  pipeline(readStream, gunzip, writeStream, (err) => {
    if (err) console.log(err);
  });
};

await decompress();
