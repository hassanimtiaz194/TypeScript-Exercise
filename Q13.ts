/* Your Own Array: Think of your favorite mode of transportation,
    such as a motorcycle or a car, and make a list that stores several examples.
 Use your list to print a series of statements about these items,
    such as “I would like to own a Honda motorcycle.” */
const transportation: [string, string][] = [
    ["Bike", 'Honda'],
    ["Car", 'Toyota'],
    ["Sport Car", 'Bugati'],
    ["Heavy Bike", 'Yamaha'],
]

transportation.map((n, index) => {
    console.log(`I would like to own ${n[1]} ${n[0]}`)
})