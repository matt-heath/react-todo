// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd)); //used before an array or a variable that represents an array to sepearte it's values
//
// var groupA = ['Rachael', 'Matthew'];
// var groupB = ['Rishi'];
// var final = [...groupA, ...groupB];
//
// console.log(final);

var person = ['Matthew', 21];
var person2= ['Rachael', 21];

function greeting(name, age) {
  console.log('Hi ' + name + ', you are ' + age );
}

greeting(...person);
greeting(...person2);

var names = ['Corey', 'Daniel'];
var final = ['George', ...names];


final.forEach(function (name) {
  console.log('Hi ' + name);
});
