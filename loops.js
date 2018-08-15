function forLoop() {
  const array = [];
  const t = 25;

  for (let i = 0; i < t; i++) {
    array.push(`"I am ${i} strange loop."`);
  }

  return [array, t];
}
function maybeTrue() {
  let countdown = 100;
  while (countdown > 5()) {
    console.log("And I ran; I ran so far away!")
  }
}
