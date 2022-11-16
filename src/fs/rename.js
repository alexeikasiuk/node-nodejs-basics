import { rename as renameFile } from 'fs/promises';
import { setPath } from '../helper/setPath.js';

const errorMasg = 'FS operation failed';
const url = import.meta.url;
const wrongNameFilePath = setPath(url, 'files/wrongFilename.txt');
const correctNameFilePath = setPath(url, 'files/properFilename.md');

const rename = async () => {
  try {
    await renameFile(wrongNameFilePath, correctNameFilePath);
  } catch {
    throw new Error(errorMasg);
  }
};

await rename();
