
// window.onload = function () {
//   // Generate random numbers between 1 and 6 for Player 1 and Player 2
//   var randPlayer1 = Math.floor(Math.random() * 6) + 1;
//   var randPlayer2 = Math.floor(Math.random() * 6) + 1;

//   // Set the source of Player 1's image
//   var player1Image = document.getElementById('player1Image');
//   player1Image.src = './images/dice' + randPlayer1 + '.png';

//   // Set the source of Player 2's image
//   var player2Image = document.getElementById('player2Image');
//   player2Image.src = './images/dice' + randPlayer2 + '.png';
// };

var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomImg1 = './images/dice' + randomNumber1 + '.png'
var img1 = document.querySelectorAll("img")[0]
img1.setAttribute("src", randomImg1)

var randomNumber2 = Math.floor(Math.random() * 6) + 1
var randomImg2 = './images/dice' + randomNumber2 + '.png'
var img2 = document.querySelectorAll("img")[1]
img2.setAttribute('src', randomImg2)
