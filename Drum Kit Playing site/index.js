function playAudio(soundFile) {
  var audio = new Audio(soundFile)
  audio.play()
}
var numberOfDrum = document.querySelectorAll('.drum').length

for (var i = 0; i < numberOfDrum; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    var buttonInnerHtml = this.innerHTML

    makeSound(buttonInnerHtml)
    buttonAnimation(buttonInnerHtml)
  })
}

document.addEventListener('keypress', function (event) {
  var keyKeys = event.key.toLowerCase()
  makeSound(keyKeys)
  buttonAnimation(keyKeys)
})

function makeSound(key) {
  switch (key) {
    case 'w':
      playAudio('./sounds/tom-1.mp3')

      break

    case 'a':
      playAudio('./sounds/tom-2.mp3')
      break

    case 's':
      playAudio('./sounds/tom-3.mp3')
      break

    case 'd':
      playAudio('./sounds/tom-4.mp3')
      break

    case 'j':
      playAudio('./sounds/snare.mp3')
      break

    case 'k':
      playAudio('./sounds/crash.mp3')
      break

    case 'l':
      playAudio('./sounds/kick-bass.mp3')
      break

    default:
      console.log('Unknown Button Pressed.')
      break
  }
}

function buttonAnimation(currentKeys) {
  var button = document.querySelector('.'+ currentKeys)
  button.classList.add('pressed')

  setTimeout(() => {
    button.classList.remove('pressed')
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
