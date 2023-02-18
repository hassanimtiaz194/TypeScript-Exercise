/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array
of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array
with the Great added to each magician’s name.*/
function make_great(magician: string[], nmagicians: string[]) {
    magician.forEach((values, index) => {
        nmagicians.push(values)
    })
    nmagicians.push('David Blaine')
}

function show_magicians(magician: string[]) {
    magician.forEach((values) => {
        console.log(values)
    })
}

const magician_names2: string[] = ['Dynamo', 'David Copperfield', 'Paul Daniels', 'Harry Houdini'];
const new_magician_names: string[] = [];
make_great(magician_names2, new_magician_names);
console.log("old magician\n==================================")
show_magicians(magician_names2)
console.log("new magician\n==================================")
show_magicians(new_magician_names)

