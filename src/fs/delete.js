import { rm } from 'fs/promises';
import { setPath } from '../helper/setPath.js';

const deleteFilePath = setPath(import.meta.url, 'files/fileToRemove.txt');
const errorMsg = 'FS operation failed ';

const remove = async () => {
  try {
    await rm(deleteFilePath);
  } catch {
    throw new Error(errorMsg);
  }
};

await remove();
