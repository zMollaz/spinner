const fullCircle = ['|   ', '/   ', '-   ', '\\   ', '|   ', '/   ', '-   ', '\\   ', '|   ', '\n'];
let delay = 100;
fullCircle.forEach(char => {
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  }, delay);
  delay += 200;
});