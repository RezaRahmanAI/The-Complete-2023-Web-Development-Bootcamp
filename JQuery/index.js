$('h1').addClass('big-font')

// $('h1').click(function () {
//     $('h1').css('color', 'purple')
// })


$('button').click(function () {
    $('h1').addClass('big-font')
})

$('input').keypress(function (event) {
    $('h1').html(event.key)
})