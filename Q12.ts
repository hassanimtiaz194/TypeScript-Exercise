/* Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
print a message to them. 
The text of each message should be the same, but each message should be personalized with the person’s name. */
const names: string[] = ['Numair', 'Mustafa', 'Ali', 'Ahmad', 'Haris'];
const mess1: string = "said, Aloha everyone"

names.map((n) => {
    console.log(`${n} ${mess1}`);
})