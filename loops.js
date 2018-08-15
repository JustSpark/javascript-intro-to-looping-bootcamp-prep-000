function forLoop(array) {
  for (let i = 0; i < 25; i++)
  array.slice(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  console.log(array);
}
