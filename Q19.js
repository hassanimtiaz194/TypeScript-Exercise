"use strict";
/* Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner. */
const invitee19 = ['Steve Jobs', 'Bill gates', 'Larry Page'];
const message19 = ['invitation Accepted', 'invitation Accepted', 'invitation Rejected'];
const message192 = ['invitation Accepted', 'invitation Accepted', 'invitation Accepted'];
const message193 = ['invitation Accepted', 'invitation Accepted', 'invitation Rejected', 'invitation Accepted', 'invitation Accepted', 'invitation Accepted'];
const message194 = ['You are still Invited', 'You are still Invited'];
// First invitaion Send
console.log('First invitation sended\n=======================');
invitee19.map(function (n, index) {
    console.log(`${n} said, ${message19[index]}`);
});
console.log(`Total Invitation sended 1st time= ${invitee19.length}`);
// invitaion Accepted
console.log('\nFirst invitation Accepted\n=======================');
invitee19.map(function (n, index) {
    if (message19[index].toLowerCase() === 'invitation accepted')
        console.log(`${n} said, ${message19[index]}`);
});
// invitaion Rejected
console.log('\nFirst invitation Rejection\n=======================');
const newIndex19 = invitee19.map(function (n, index) {
    if (message19[index].toLowerCase() === 'invitation rejected') {
        console.log(`${n} said, ${message19[index]}`);
        return index;
        //console.log(n)
    }
    // return n;
});
const filteredIndex19 = newIndex19.filter((x) => {
    return x !== undefined;
});
let numb19 = filteredIndex19[0];
// 2nd invitaion Send
console.log('\nSecond invitation sended\n=======================');
invitee19.splice(numb19, 1, "Elon Musk");
console.log(`new invitee list ${invitee19}`);
invitee19.map(function (n, index) {
    console.log(`${n} said, ${message192[index]}`);
});
console.log(`Total Invitation send 2nd time= ${invitee19.length}`);
console.log('\nBigger table is available\n=======================');
invitee19.unshift('Jeff Bezos');
invitee19.splice((invitee19.length) / 2, 0, 'Jack Dorsey');
invitee19.push('Mark Zuckerberg');
console.log(`3rd invitaion list ${invitee19}`);
console.log('\n3rd invitation sended\n=======================');
invitee19.map(function (n, index) {
    console.log(`${n} said, ${message193[index]}`);
});
console.log(`Total Invitation send 3rd time= ${invitee19.length}`);
console.log('\nCan invite only two people\n=======================');
for (let i = invitee19.length; invitee19.length > 2; i--) {
    console.log(`sorry due to unavailability i can invitee i can invite two peoples ${invitee19.pop()} you are univited`);
}
console.log('\n4th invitation sended\n=======================');
invitee19.map(function (n, index) {
    console.log(`${n} said, ${message194[index]}`);
});
console.log(`Total Invitation send 4th time= ${invitee19.length}`);
console.log('\nemptying list \n=======================');
for (let i = invitee19.length; invitee19.length > 0; i--) {
    console.log(`${invitee19.pop()} you are univited`);
    if (invitee19.length === 0) {
        console.log('list is now empty');
    }
}
console.log(invitee19);
