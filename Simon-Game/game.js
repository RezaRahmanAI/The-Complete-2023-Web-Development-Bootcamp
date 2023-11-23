var numberOfButton = $('.btn').length;

$('.btn').on('click', function () {
    var buttonId = $(this).attr('id');

    makeSound(buttonId);
    buttonAnimation('#' + buttonId); // Adding '#' to form a valid selector
});

function playSounds(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
}

function makeSound(buttonId) {
    switch (buttonId) {
        case 'green':
            playSounds('./sounds/green.mp3');
            break;
        case 'yellow':
            playSounds('./sounds/yellow.mp3');
            break;
        case 'blue':
            playSounds('./sounds/blue.mp3');
            break;
        case 'red':
            playSounds('./sounds/red.mp3');
            break;
        default:
            break;
    }
}

function buttonAnimation(currentButton) {
    $(currentButton).addClass('pressed');
    setTimeout(function () {
        $(currentButton).removeClass('pressed');
    }, 100); // You may adjust the timeout value as needed
}