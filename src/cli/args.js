const parseArgs = () => {
  const args = process.argv.slice(2);
  const propName1 = args[0].slice(2);
  const propName2 = args[2].slice(2);
  const value1 = args[1];
  const value2 = args[3];

  const result = `${propName1} is ${value1}, ${propName2} is ${value2}`;
  console.log(result);
};

parseArgs();
