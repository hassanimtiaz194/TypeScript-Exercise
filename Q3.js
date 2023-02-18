"use strict";
/* Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase. */
const uname = 'Hassan Imtiaz';
function titlecase(name2) {
    const value1 = name2.toLowerCase().split(' ');
    const value2 = value1.map((n) => {
        return n[0].toUpperCase() + n.slice(1);
    });
    return value2.join(' ');
}
console.log(`lowercase: ${uname.toLowerCase()}`);
console.log(`uppercase: ${uname.toUpperCase()}`);
console.log(`titlecase: ${titlecase(uname)}`);
