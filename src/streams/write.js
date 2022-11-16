import { createWriteStream } from 'fs';
import { setPath } from '../helper/setPath.js';

const filePath = setPath(import.meta.url, 'files/fileToWrite.txt');

const write = async () => {
  const writeStream = createWriteStream(filePath, { flags: 'a' });

  process.stdin.pipe(writeStream);
};

await write();
