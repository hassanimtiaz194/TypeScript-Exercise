/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.
• Start with your program from Exercise 16. 
Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. 
Each time you pop a name from your list, 
print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. 
Print your list to make sure you actually have an empty list at the end of your program. */

const invitee: string[] = ['Steve Jobs', 'Bill gates', 'Larry Page']
const message: string[] = ['invitation Accepted', 'invitation Accepted', 'invitation Rejected']
const message2: string[] = ['invitation Accepted', 'invitation Accepted', 'invitation Accepted']
const message3: string[] = ['invitation Accepted', 'invitation Accepted', 'invitation Rejected', 'invitation Accepted', 'invitation Accepted', 'invitation Accepted']
const message4: string[] = ['You are still Invited', 'You are still Invited']
// First invitaion Send
console.log('First invitation sended\n=======================')
invitee.map(function (n, index) {
    console.log(`${n} said, ${message[index]}`);
});
// invitaion Accepted
console.log('First invitation Accepted\n=======================')
invitee.map(function (n, index) {
    if (message[index].toLowerCase() === 'invitation accepted')
        console.log(`${n} said, ${message[index]}`);
});
// invitaion Rejected
console.log('First invitation Rejection\n=======================')
const newIndex: number[] = invitee.map(function (n, index) {
    if (message[index].toLowerCase() === 'invitation rejected') {
        console.log(`${n} said, ${message[index]}`);
        return index;
        //console.log(n)
    }
    // return n;
});
const filteredIndex: (number | undefined)[] = newIndex.filter((x) => {
    return x !== undefined;
});
let numb: number = filteredIndex[0];
invitee.splice(numb, 1, "Elon Musk")
console.log(`new invitee list ${invitee}`);

// 2nd invitaion Send
console.log('Second invitation sended\n=======================')
invitee.map(function (n, index) {
    console.log(`${n} said, ${message2[index]}`);
});
console.log('Bigger table is available\n=======================')
invitee.unshift('Jeff Bezos')
invitee.splice((invitee.length) / 2, 0, 'Jack Dorsey')
invitee.push('Mark Zuckerberg');
console.log(`3rd invitaion list ${invitee}`)

console.log('3rd invitation sended\n=======================')
invitee.map(function (n, index) {
    console.log(`${n} said, ${message3[index]}`);
});
console.log('Can invite only two people\n=======================')
for (let i = invitee.length; invitee.length > 2; i--) {
    console.log(`sorry due to unavailability i can invitee i can invite two peoples ${invitee.pop()} you are univited`)
}
console.log('4th invitation sended\n=======================')
invitee.map(function (n, index) {
    console.log(`${n} said, ${message4[index]}`);
});

console.log('emptying list \n=======================')
for (let i = invitee.length; invitee.length > 0; i--) {
    console.log(`${invitee.pop()} you are univited`)
    if (invitee.length === 0) {
        console.log('list is now empty')
    }
}
console.log(invitee);
