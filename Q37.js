"use strict";
/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message*/
function make_shirt1(size = 'LARGE', text = 'I LOVE TYPESCRIPT') {
    console.log(`The Size of Shirt is ${size}`);
    console.log(`The message of shirt is "${text}"`);
}
make_shirt1();
make_shirt1('MEDIUM');
make_shirt1('SMALL', 'HELLO WORLD');
