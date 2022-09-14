const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// console.log(rl)
rl.question('Please enter your name: ', (name) => {
  console.log(`Hello ${name}`);
	rl.close()
});
