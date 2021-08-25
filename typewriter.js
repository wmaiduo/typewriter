const sentence = "hello there from lighthouse labs\n";
let i = 0;
for (let char of sentence) {
  i++;
  setTimeout(() => {
    process.stdout.write(char);
  }, i * 50)
};

