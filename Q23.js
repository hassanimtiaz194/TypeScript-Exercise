/* Conditional Tests: Write a series of conditional tests.
Print a statement describing each test and your prediction for the results of each test.
Your code should look something like this:

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests.Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */
var age = 18;
var car = 'Honda';
console.log(car === "Honda" ? 'car is honda' : 'car is not Honda'); //true
console.log(car !== "Honda" ? 'car is honda' : 'car is not Honda'); //false
console.log(car === "Toyota" ? 'car is Toyota' : 'car is not Toyota'); //false
car = 'Toyota';
console.log(car === "Toyota" ? 'car is Toyota' : 'car is not Toyota'); //true
console.log(age === 18 ? 'age is Eighteen year old' : 'age is not eighteen year old'); // true
console.log(age !== 18 ? 'age is not eighteen year old' : 'age is Eighteen year old'); // false
console.log(age >= 18 ? 'age is Eighteen year old' : 'age is less than eighteen year old'); //true
console.log(age > 19 ? "age is greater than eighter years " : 'age is Eighteen year old'); //false
console.log(age < 18 ? "age is less than eighter years " : 'age is equal or greater than Eighteen year old'); //false
age = 21;
console.log(age > 19 ? "age is greater than eighter years " : 'age is Eighteen year old'); //true
