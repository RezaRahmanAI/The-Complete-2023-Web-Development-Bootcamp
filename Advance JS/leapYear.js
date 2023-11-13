function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
      }
      console.log('Leap year');
    } else {
      console.log('Not a Leap year');
    }
  } else {
    console.log('Not a leap year.');
  }
}

isLeap(2400);
