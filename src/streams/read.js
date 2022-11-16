import { createReadStream } from 'fs';
import { setPath } from '../helper/setPath.js';

const filePath = setPath(import.meta.url, 'files/fileToRead.txt');

const read = async () => {
  const readStream = createReadStream(filePath);

  readStream.pipe(process.stdout);
};

await read();
