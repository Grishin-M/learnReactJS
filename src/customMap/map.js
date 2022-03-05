const someNumbers = [1,2,3,4,5,6,7,8,9,10];
let newNumbers = [];
for(let i = 0; i < someNumbers.length; i++) {
  newNumbers.push(someNumbers[i] * 2);
}
console.log(newNumbers);

let newNumbersMap = [];
someNumbers.map(someNumber => someNumber * 2);
console.log(newNumbersMap);