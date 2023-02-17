/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */
var car = 'Toyota';
var age = 18;
var cities = ['Islamabad', 'Lahore', 'Peshawar', 'Karachi', 'Quetta'];
console.log(car === 'Toyota' ? 'Its Toyota' : 'Its not Toyota'); //true
console.log(car !== 'Toyota' ? 'Its Toyota' : 'Its not Toyota'); //false
console.log(car.toLowerCase() === 'toyota' ? 'Its Toyota(lowercase)' : 'Its not Toyota(Uppercase)'); // true
console.log(age === 18 ? 'age is eigtheen' : 'age is not eigtheen'); //true
console.log(age !== 18 ? 'age is eigtheen' : 'age is not eigtheen'); //false
console.log(age > 19 ? 'age is greater than eigtheen' : 'age is less than eigtheen'); // false
console.log(age < 19 ? 'age is less than eigtheen' : 'age is greater than eigtheen'); // true
console.log(age >= 19 ? 'age is greater than or equal to eigtheen' : 'age is less than or equal to eigtheen'); //false
console.log(age <= 18 ? 'age is less than or equal to eigtheen' : 'age is greater than or equal to eigtheen'); //true
console.log(/* car === 'Toyota' &&  */ car === 'Honda' ? 'car is Toyota and Honda' : 'car is not Toyota and Honda'); //false
console.log(car === 'Toyota' || car === 'Honda' ? 'car is Toyota or Honda' : 'car is not Toyota or Honda'); //true
console.log(Array.isArray(cities) ? 'This is an Array' : 'Not an Array'); //true
console.log(Array.isArray(age) ? 'This is an Array' : 'Not an Array'); //false
