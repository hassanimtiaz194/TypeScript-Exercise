/* Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common.
You could print a sentence such as Any of these animals would make a great pet!*/
var favAnimals = ['dog', 'cat', 'parrot'];
favAnimals.forEach(function (value) {
    console.log("".concat(value, " pizza"));
});
favAnimals.forEach(function (value) {
    console.log("A ".concat(value, " would make a great pet"));
});
console.log('Similarity amonng dog cat and parrot are:\n1)Are Social Beings That Crave Attention.\n2) Affection.\n3) and Bonding With People and Pets in Their Home.');
console.log('I like dog because the are loyal');
