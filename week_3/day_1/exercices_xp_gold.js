// ====Eexercice 1
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
// expected output: Array [3, 42, "foo"]

// Promise.all() takes an array of promises and returns a new promise, 
// it waits until all promises resolve and then returns an array of their 
// resolved values in the same order.


// ====Exercice 2
function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  });
// the output will be [2, 4, 6]