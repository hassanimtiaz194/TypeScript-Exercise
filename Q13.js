/* Your Own Array: Think of your favorite mode of transportation,
    such as a motorcycle or a car, and make a list that stores several examples.
 Use your list to print a series of statements about these items,
    such as “I would like to own a Honda motorcycle.” */
var transportation = [
    ["Bike", 'Honda'],
    ["Car", 'Toyota'],
    ["Sport Car", 'Bugati'],
    ["Heavy Bike", 'Yamaha'],
];
transportation.map(function (n, index) {
    console.log("I would like to own ".concat(n[1], " ").concat(n[0]));
});
