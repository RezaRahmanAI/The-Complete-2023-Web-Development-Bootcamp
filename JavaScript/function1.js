function getMilk(money, bottlePrice) {
  console.log('buy ' + calcBottle(money, bottlePrice) + ' bottles of milk.');

  return calcChange(money, bottlePrice);
}

function calcBottle(startingMoney, costPerBottle) {
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);

  return numberOfBottles;
}

function calcChange(startingMoney, costPerBottle) {
    var change = startingMoney % costPerBottle;
    return change
}

console.log('Hello master, here is your ' + getMilk(11, 1.5) + ' change.');

getMilk(5, 1.25);
