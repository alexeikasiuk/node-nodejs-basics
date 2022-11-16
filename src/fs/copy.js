import { copyFile, readdir, mkdir } from 'fs/promises';
import setPath from '../helper/setPath.js';
import { join } from 'path';

const url = import.meta.url;
const errorMsg = 'FS operation failed';
const src = setPath(url, 'files');
const dest = setPath(url, 'files_copy');

const copy = async () => {
  try {
    const fileNames = await readdir(src);
    await mkdir(dest);

    await Promise.all(
      fileNames.map(async (file) => {
        copyFile(join(src, file), join(dest, file));
      })
    );
  } catch {
    throw new Error(errorMsg);
  }
};

copy();
