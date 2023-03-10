/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */

const car2: string = 'Toyota';
const age2: number = 18;
const cities: string[] = ['Islamabad', 'Lahore', 'Peshawar', 'Karachi', 'Quetta'];
console.log(car2 === 'Toyota' ? 'Its Toyota' : 'Its not Toyota');//true
console.log(car2 !== 'Toyota' ? 'Its Toyota' : 'Its not Toyota');//false
console.log(car2.toLowerCase() === 'toyota' ? 'Its Toyota(lowercase)' : 'Its not Toyota(Uppercase)');// true
console.log(age2 === 18 ? 'age is eigtheen' : 'age is not eigtheen');//true
console.log(age2 !== 18 ? 'age is eigtheen' : 'age is not eigtheen');//false
console.log(age2 > 19 ? 'age is greater than eigtheen' : 'age is less than eigtheen');// false
console.log(age2 < 19 ? 'age is less than eigtheen' : 'age is greater than eigtheen');// true
console.log(age2 >= 19 ? 'age is greater than or equal to eigtheen' : 'age is less than or equal to eigtheen');//false
console.log(age2 <= 18 ? 'age is less than or equal to eigtheen' : 'age is greater than or equal to eigtheen');//true
console.log(/* car === 'Toyota' &&  */car2 === 'Honda' ? 'car is Toyota and Honda' : 'car is not Toyota and Honda'); //false
console.log(car2 === 'Toyota' || car2 === 'Honda' ? 'car is Toyota or Honda' : 'car is not Toyota or Honda');//true
console.log(Array.isArray(cities) ? 'This is an Array' : 'Not an Array');//true
console.log(Array.isArray(age2) ? 'This is an Array' : 'Not an Array');//false