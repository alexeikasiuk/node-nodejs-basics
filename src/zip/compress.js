import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { setPath } from '../helper/setPath.js';

const url = import.meta.url;
const src = setPath(url, 'files/fileToCompress.txt');
const dest = setPath(url, 'files/archive.gz');

const compress = async () => {
  const gzip = createGzip();
  const readStream = createReadStream(src);
  const writeStream = createWriteStream(dest);

  pipeline(readStream, gzip, writeStream, (err) => {
    if (err) console.log(err);
  });
};

await compress();
