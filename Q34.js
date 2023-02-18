"use strict";
/* Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
 and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
 For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence,
such as I really love pizza!*/
const favPizza = ['fajita', 'pepperoni', 'creamy tikka'];
favPizza.forEach((value) => {
    console.log(`${value} pizza`);
});
favPizza.forEach((value) => {
    if (value === 'fajita') {
        console.log(`I love ${value} pizza`);
    }
    else if (value === 'pepperoni') {
        console.log(`I love ${value} pizza`);
    }
    else {
        console.log(`I love ${value} pizza`);
    }
});
console.log('1) My favourite food is pizza.\n2) It is a famous Italian food.\n3) It is one of the favourite food specially among kids.\n4) I love to eat creamy tikka pizza.');
