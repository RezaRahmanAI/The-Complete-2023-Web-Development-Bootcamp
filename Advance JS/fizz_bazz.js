// var li = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// var list = [];

// li.forEach((count) => {
//   if (count % 3 === 0 && count % 5 === 0) {
//     list.push('Fizzbuzz');
//   } else if (count % 3 === 0) {
//     list.push('Fizz');
//   } else if (count % 5 === 0) {
//     list.push('Buzz');
//   } else {
//     list.push(count);
//   }
// });


console.log(list)

var list = []
var count = 1

while (count <=100) {
  if (count % 3 === 0 && count % 5 === 0) {
    list.push('Fizzbuzz');
  } else if (count % 3 === 0) {
    list.push('Fizz');
  } else if (count % 5 === 0) {
    list.push('Buzz');
  } else {
    list.push(count);
  }

  count++
}

console.log(list)