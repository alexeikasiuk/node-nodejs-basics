import { spawn } from 'child_process';
import { setPath } from '../helper/setPath.js';

const childFilePath = setPath(import.meta.url, 'files/script.js');

const spawnChildProcess = async (args) => {
  const childArgs = args.split(' ');

  const child = spawn('node', [childFilePath, ...childArgs]);

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
