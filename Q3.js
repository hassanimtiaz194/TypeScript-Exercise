/* Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase. */
var name2 = 'Hassan Imtiaz';
function titlecase(name2) {
    var value1 = name2.toLowerCase().split(' ');
    var value2 = value1.map(function (n) {
        return n[0].toUpperCase() + n.slice(1);
    });
    return value2.join(' ');
}
console.log("lowercase: ".concat(name2.toLowerCase()));
console.log("uppercase: ".concat(name2.toUpperCase()));
console.log("titlecase: ".concat(titlecase(name2)));
