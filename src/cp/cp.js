import { spawn } from 'child_process';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const curFile = fileURLToPath(import.meta.url);
const curDirName = dirname(curFile);
const childFile = resolve(curDirName, 'files/script.js');

const spawnChildProcess = async (args) => {
  const childArgs = args.split(' ');

  const child = spawn('node', [childFile, ...childArgs]);

  process.stdin.on('data', (chunk) => {
    console.log(`
    Parent. Send to child message: "${chunk.toString().trim()}"
    `);
    child.stdin.write(chunk);
  });

  child.stdout.on('data', (chunk) => {
    console.log(`
    Parent. Receive from child message: "${chunk.toString().trim()}"
    `);
  });
};

spawnChildProcess('--asdf asdf fsd --sadf asdf');
