function forLoop() {
  const array = [];
  const t = 25;

  for (let i = 0; i < t; i++) {
    array.push(`"I am ${i} strange loop."`);
  }

  return [array, t];
}
function maybeTrue() {
  return Math.random() >= 0.5;
  while (maybeTrue()) {
    console.log("And I ran; I ran so far away!")
  }
}
