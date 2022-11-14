const parseEnv = () => {
  const rssData = Object.entries(process.env)
    .reduce((arr, [key, value]) => {
      if (key.startsWith('RSS_')) {
        arr.push(`${key}=${value}`);
      }
      return arr;
    }, [])
    .join('; ');

  console.log(rssData);
};

parseEnv();
