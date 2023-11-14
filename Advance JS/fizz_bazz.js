var li = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var fb_li = [];

li.forEach((element) => {
  if (element % 3 === 0 && element % 5 === 0) {
    fb_li.push('Fizzbuzz');
  } else if (element % 3 === 0) {
    fb_li.push('Fizz');
  } else if (element % 5 === 0) {
    fb_li.push('Buzz');
  } else {
    fb_li.push(element);
  }
});


console.log(fb_li)

