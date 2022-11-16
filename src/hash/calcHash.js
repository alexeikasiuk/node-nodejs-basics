const { createHmac } = await import('node:crypto');
import { readFile } from 'node:fs/promises';
import { setPath } from '../helper/setPath.js';

const filePath = setPath(import.meta.url, 'files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const text = await readFile(filePath);
  const hash = createHmac('sha256', text).update(text).digest('hex');

  console.log(hash);
};

await calculateHash();
