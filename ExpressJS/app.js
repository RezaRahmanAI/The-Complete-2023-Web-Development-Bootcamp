const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route that sends a file
app.get('/', (req, res) => {
  // __dirname is a variable that represents the current working directory
  const filePath = __dirname + '/index.html';

  // Send the file as a response
  res.sendFile(filePath);
  console.log(filePath);
});

app.post('/', (req, res) => {
  var x = Number(req.body.num1);
  var y = Number(req.body.num2);

  var result = x + y;

  res.send("The result of the calculator is "+result.toString()); // Sending result as a string to avoid "Error: Can't set headers after they are sent."
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


