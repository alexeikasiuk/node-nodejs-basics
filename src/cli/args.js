const parseArgs = () => {
  const inputArgs = process.argv.slice(2);

  const parseInputArgs = inputArgs
    .reduce((arr, arg, i, array) => {
      const nextArg = array[i + 1];

      if (nextArg && arg.startsWith('--')) {
        const farmatArg = arg.slice(2);
        const parseArg = `${farmatArg} is ${nextArg}`;
        arr.push(parseArg);
      }

      return arr;
    }, [])
    .join(', ');

  console.log(parseInputArgs);
};

parseArgs();
