var numberOfDrum = document.querySelectorAll('.drum').length
var audio = new Audio('./sounds/crash.mp3')

// for (var i = 0; i < numberOfDrum; i++){
//     document
//   .querySelectorAll('.drum')[i]
//   .addEventListener('click', () => audio.play())
// }

for (var i = 0; i < numberOfDrum; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    var buttonInnerHtml = this.innerHTML

    switch (buttonInnerHtml) {
      case 'w':
        var audio = new Audio('./sounds/tom-1.mp3')
        audio.play()
        break

      case 'a':
        var audio = new Audio('./sounds/tom-2.mp3')
        audio.play()
        break

      case 's':
        var audio = new Audio('./sounds/tom-3.mp3')
        audio.play()
        break

      case 'd':
        var audio = new Audio('./sounds/tom-4.mp3')
        audio.play()
        break

      case 'j':
        var audio = new Audio('./sounds/snare.mp3')
        audio.play()
        break

      case 'k':
        var audio = new Audio('./sounds/crash.mp3')
        audio.play()
        break

      case 'l':
        var audio = new Audio('./sounds/kick-bass.mp3')
        audio.play()
        break

      default:
        console.log(buttonInnerHtml)
        break
    }
  })
}

// function add(num1, num2) {
//     return num1 + num2
// }

// function multiply(num1, num2) {
//     return num1 * num2
// }

// function calculator(num1, num2, operator) {
//     return operator(num1, num2)
// }

// var result = calculator(3,2, multiply)
// console.log(result)

// // Define the HouseKeeper constructor function
// function HouseKeeper(name, experience, languages) {
//   // Set properties for the HouseKeeper object
//   this.name = name;
//   this.experience = experience;
//   this.languages = languages; // Use a plural form for the array of languages
// }

// // Create a new instance of HouseKeeper
// const hk = new HouseKeeper('Rizve', 0, ['English', 'Bangla', 'Hindi']);

// // Log the HouseKeeper object to the console
// console.log(hk);
