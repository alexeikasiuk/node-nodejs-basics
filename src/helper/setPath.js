import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

export const setPath = (url, dest) => {
  const curPath = fileURLToPath(url);
  const curDirPath = dirname(curPath);
  const path = join(curDirPath, dest);

  return path;
};
