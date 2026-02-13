// ==== Exercice 1
[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});
// the output will be: [2, 4, 6]

// ==== Exercice 2
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
// the output will be: [1, 2, 0, 1, 2, 3]

// ==== Exercise 3
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})
// the value of i is the index of the current element in the array

// ==== Exercise 4
//1
const array = [[1],[2],[3],[[[4]]],[[[5]]]];

const result = array.map(item => item.flat(2));
console.log(result);

// //2
 const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const result2 = greeting.reduce((acc, cur) => acc.concat(cur));
console.log(result2);

//3 turn the greeting array into a string: 'Hello young grasshopper you are learning fast!'
const result3 = greeting.reduce((acc, cur) => acc.concat(cur)).join(' ');
console.log(result3);

//4
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const result4 = trapped.flat(Infinity);
console.log(result4);