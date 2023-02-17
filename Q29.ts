/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

const favorite_fruits: string[] = ['bananas', 'mangoes', 'oranges'];
favorite_fruits.forEach((fruits) => {
    if (fruits === 'bananas') {
        console.log('You really like bananas!')
    }
    if (fruits === 'mangoes') {
        console.log('You really like mangoes!')
    }
    if (fruits === 'oranges') {
        console.log('You really like oranges')
    }
    if (fruits === 'grapes') {
        console.log('You really like grapes!')
    }
    if (fruits === 'kiwi') {
        console.log('You really like kiwi!')
    }
})