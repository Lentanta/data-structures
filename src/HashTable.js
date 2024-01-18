const hashFunction = (value) => {
  const utf8OffSet = 96;
  const stringLength = value.length;

  const result = value
    .split('')
    .reduce((acc, cur) => {
      const value = cur.charCodeAt(0) - utf8OffSet;
      return (acc + value) % stringLength;
    }, 0)

  return Math.abs(result);
};

