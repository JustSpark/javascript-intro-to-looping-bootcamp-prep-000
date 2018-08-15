function makeArray() {
  const array = [];
  const t = 10;

  for (let i = 0; i < t; i++) {
    array.push(`"I am ${i} strange loop."`);
  }

  return [array, t];
}
