import { Transform, pipeline } from 'stream';
const { stdin, stdout, pipe } = process;

const transform = async () => {
  class Reverse extends Transform {
    constructor() {
      super();
    }
    _transform(chunk, encoding, callback) {
      let reverseText = chunk
        .toString()
        .replace(/\n/gi, '')
        .split('')
        .reverse()
        .join('');

      //start next one stdin with new line
      reverseText += '\n';

      // for test
      //  throw new Error('aaa');

      callback(null, reverseText);
    }
  }
  const reverse = new Reverse();

  pipeline(stdin, reverse, stdout, (e) => console.error(e));
};

await transform();
