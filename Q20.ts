/* Think of something you could store in a array. 
For example, you could make a list of mountains, rivers, countries, cities, languages, 
or anything else you’d like. Write a program that creates a list containing these items. */
let array1: (string|number|boolean|(string|number|boolean)[])[] = [];
array1.push('K2');
array1.push('Kunhar River');
array1.push('Pakistan');
array1.push('Islamabad');
array1.push('Urdu');
array1.push(1.232432234);
array1.push(true);
array1.push(['Karachi',1213,'mount everest'])
console.log(array1);

