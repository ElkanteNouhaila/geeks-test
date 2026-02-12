mergeWords('Hello')();

mergeWords('There')('is')('no')('spoon.')();


const mergeWords = (word) => (next) =>
  next === undefined ? word : mergeWords(word + ' ' + next);
