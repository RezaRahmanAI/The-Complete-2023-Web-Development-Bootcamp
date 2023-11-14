var n = Math.random();
console.log(n);

var x = n * 6;
x = Math.floor(x) + 1;
console.log(x);


// var names = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank"];
// var i = Math.random();

// i = Math.floor(i *6)

// function namePicker(names){
//     console.log(names[i])
// }

// namePicker(names)


var names = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank"];

function namePicker(names) {
    var i = Math.floor(Math.random() * names.length);
    console.log(names[i]);
}

namePicker(names);

