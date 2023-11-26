const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
const port = 3000


let filePath = __dirname + '/bmiCalculator.html';
app.get('/', (req, res) => {
  res.sendFile(filePath)
})

app.post('/', (req, res) => {

  function calculateBMI(weight, height) {
    height = height / 100
    return weight / (height * height)
  }

 const weight = Number(req.body.weight)
  const height = Number(req.body.height)

  let bmi = calculateBMI(weight,height)

  res.send('Your BMI is : '+bmi)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

