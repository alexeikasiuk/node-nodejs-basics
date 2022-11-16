import { readdir } from 'fs/promises';
import { setPath } from '../helper/setPath.js';

const deleteFilePath = setPath(import.meta.url, 'files');
const errorMsg = 'FS operation failed ';

const list = async () => {
  try {
    const files = await readdir(deleteFilePath, { withFileTypes: true });

    const fileNamesString = files
      .map((file) => {
        return file.isDirectory() ? `${file.name}/` : file.name;
      })
      .join('     ');

    console.log(fileNamesString);
  } catch {
    throw new Error(errorMsg);
  }
};

await list();
