function lifeOfDaysRemaining(age) {
    var year = 90 - age;
    var month = year * 12;
    var weeks = year * 52;
    var days = year * 365;


    console.log("years remaining : ", year)
    console.log("Months remaining: ", month)
    console.log("Weeks remaining: ", weeks)
    console.log("Days remaining: ", days)
}

lifeOfDaysRemaining(26)
