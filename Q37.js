/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message*/
function make_shirt(size, text) {
    if (size === void 0) { size = 'LARGE'; }
    if (text === void 0) { text = 'I LOVE TYPESCRIPT'; }
    console.log("The Size of Shirt is ".concat(size));
    console.log("The message of shirt is \"".concat(text, "\""));
}
make_shirt();
make_shirt('MEDIUM');
make_shirt('SMALL', 'HELLO WORLD');
