const spinnerChars = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ','\r/   '];
timer = 0;
  for (let char of spinnerChars) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timer)
    timer += 200;
  };