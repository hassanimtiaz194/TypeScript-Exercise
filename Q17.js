"use strict";
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
const invitee17 = ['Steve Jobs', 'Bill gates', 'Larry Page'];
const message17 = ['invitation Accepted', 'invitation Accepted', 'invitation Rejected'];
const message172 = ['invitation Accepted', 'invitation Accepted', 'invitation Accepted'];
const message173 = ['invitation Accepted', 'invitation Accepted', 'invitation Rejected', 'invitation Accepted', 'invitation Accepted', 'invitation Accepted'];
const message174 = ['You are still Invited', 'You are still Invited'];
// First invitaion Send
console.log('First invitation sended\n=======================');
invitee17.map(function (n, index) {
    console.log(`${n} said, ${message17[index]}`);
});
// invitaion Accepted
console.log('First invitation Accepted\n=======================');
invitee17.map(function (n, index) {
    if (message17[index].toLowerCase() === 'invitation accepted')
        console.log(`${n} said, ${message17[index]}`);
});
// invitaion Rejected
console.log('First invitation Rejection\n=======================');
const newIndex17 = invitee17.map(function (n, index) {
    if (message17[index].toLowerCase() === 'invitation rejected') {
        console.log(`${n} said, ${message17[index]}`);
        return index;
        //console.log(n)
    }
    // return n;
});
const filteredIndex17 = newIndex17.filter((x) => {
    return x !== undefined;
});
let numb17 = filteredIndex17[0];
invitee17.splice(numb17, 1, "Elon Musk");
console.log(`new invitee list ${invitee17}`);
// 2nd invitaion Send
console.log('Second invitation sended\n=======================');
invitee17.map(function (n, index) {
    console.log(`${n} said, ${message172[index]}`);
});
console.log('Bigger table is available\n=======================');
invitee17.unshift('Jeff Bezos');
invitee17.splice((invitee17.length) / 2, 0, 'Jack Dorsey');
invitee17.push('Mark Zuckerberg');
console.log(`3rd invitaion list ${invitee17}`);
console.log('3rd invitation sended\n=======================');
invitee17.map(function (n, index) {
    console.log(`${n} said, ${message173[index]}`);
});
console.log('Can invite only two people\n=======================');
for (let i = invitee17.length; invitee17.length > 2; i--) {
    console.log(`sorry due to unavailability i can invitee i can invite two peoples ${invitee17.pop()} you are univited`);
}
console.log('4th invitation sended\n=======================');
invitee17.map(function (n, index) {
    console.log(`${n} said, ${message174[index]}`);
});
console.log('emptying list \n=======================');
for (let i = invitee17.length; invitee17.length > 0; i--) {
    console.log(`${invitee17.pop()} you are univited`);
    if (invitee17.length === 0) {
        console.log('list is now empty');
    }
}
console.log(invitee17);
