var bottle = 99;

while (bottle >= 1) {
    if (bottle === 1) {
        console.log(bottle + ' bottle of beer on the wall, ' + bottle + ' bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.');
    } else {
        console.log(bottle + ' bottles of beer on the wall, ' + bottle + ' bottles of beer. Take one down and pass it around, ' + (bottle - 1) + ' bottles of beer on the wall.');
    }
    bottle--;
}

console.log('No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.');
