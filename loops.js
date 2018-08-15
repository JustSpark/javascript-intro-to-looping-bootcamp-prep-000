function forLoop() {
  const array = [];
  const t = 25;

  for (let i = 0; i < t; i++) {
    array.push(`"I am ${i} strange loop."`);
  }

  return [array, t];
}
function whileLoop() {
  let countdown = 100;
  while (countdown > 10) {
    console.log(countdown);
    countdown--;
    return 'done';
  }
}
