import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import { fileURLToPath } from 'url';
import { createRequire } from 'node:module';

const url = import.meta.url;
const random = Math.random();
const __filename = fileURLToPath(url);
const __dirname = path.dirname(__filename);
const require = createRequire(url);
// Stability: 1 - Experimental
// const unknownObject =
//   random > 0.5
//     ? await import('./files/a.json', { assert: { type: 'json' } })
//     : await import('./files/b.json', { assert: { type: 'json' } });
const unknownObject =
  random > 0.5 ? require('./files/a.json') : require('./files/a.json');

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
