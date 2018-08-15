function forLoop(array) {
 const t = 25;
  for (let i = 0; i < t; i++) {
   array.push("I am ${1} strange loop.");
  }
  return array;
}