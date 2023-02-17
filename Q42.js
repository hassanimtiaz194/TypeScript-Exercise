/*Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.*/
function make_great(magician) {
    magician.forEach(function (values, index) {
        magician.splice(index, 1, "".concat(values, " is one of the great and famous magician"));
    });
    return magician;
}
function show_magicians(magician) {
    magician.forEach(function (values) {
        console.log(values);
    });
}
var magician_names = make_great(['Dynamo', 'David Copperfield', 'Paul Daniels', 'Harry Houdini']);
show_magicians(magician_names);
