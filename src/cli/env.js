const parseEnv = () => {
  process.env.RSS_asf = 'sdfds';
  process.env.RSS_sdfgsfd = 'dfg';
  process.env.RSS_gfdhdfghdfgd = 'dfghdg33';

  const variables = process.env;
  let rssVariables = [];

  for (const variable in variables) {
    if (variable.indexOf('RSS_') == -1) continue;

    rssVariables.push(`${variable}=${variables[variable]}`);
  }

  const result = rssVariables.join('; ');

  console.log(result);
};

parseEnv();
