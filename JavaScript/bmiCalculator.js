function bmiCalculate(weight, height) {

    height = height/100
    var bmi = weight / height ** 2
    console.log(bmi)
}

bmiCalculate(60, 170.69)

function calculateBMI(weight, height) {
    height = height / 100
    
    var bmi = weight / height ** 2
    return bmi
}

var weight = 60
var height = 170.69

var result = calculateBMI(weight, height)

console.log('BMI: ' + result)