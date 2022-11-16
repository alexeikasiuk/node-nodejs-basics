import { readFile } from 'fs/promises';
import { setPath } from '../helper/setPath.js';

const deleteFilePath = setPath(import.meta.url, 'files/fileToRead.txt');
const errorMsg = 'FS operation failed ';

const read = async () => {
  try {
    const text = await readFile(deleteFilePath, 'utf8');

    console.log(text);
  } catch {
    throw new Error(errorMsg);
  }
};

await read();
