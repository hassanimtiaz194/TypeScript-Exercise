/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message*/

function make_shirt(size: (number | string) = 'LARGE', text: string = 'I LOVE TYPESCRIPT') {
    console.log(`The Size of Shirt is ${size}`);
    console.log(`The message of shirt is "${text}"`);
}
make_shirt();
make_shirt('MEDIUM');
make_shirt('SMALL','HELLO WORLD');