import { writeFile } from 'fs/promises';
import setPath from '../helper/setPath.js';

const newFilePath = setPath(import.meta.url, 'files/fresh.txt');
const message = 'I am fresh and young';
const errorMsg = 'FS operation failed';

const create = async () => {
  try {
    console.log(`try create ${newFilePath}`);
    await writeFile(newFilePath, message, { flag: 'wx' }, 'utf8');
  } catch {
    throw new Error(errorMsg);
  }
};

await create();
