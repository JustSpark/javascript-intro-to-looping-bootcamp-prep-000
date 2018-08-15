function forLoop(array) {
  for (let i = 0; i < 25; i++)
  array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  return array;
}
function whileLoop() 
  let countdown = 27;
  while (countdown > 0) {
    console.log(--countdown);
    return 'done';
  }