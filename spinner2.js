process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinnerPositions = ['|', "/", "-", "\\", '|'];
let counter = 0;
for (let pos in spinnerPositions) {
  counter += 200;
  setTimeout(() => {
    process.stdout.write(`\r${spinnerPositions[pos]}   `)
  }, counter)
};