"use strict";
/* Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else to invite. */
const invitee2 = ['Steve Jobs', 'Bill gates', 'Larry Page'];
const message5 = ['invitation Accepted', 'invitation Accepted', 'invitation Rejected'];
const message6 = ['invitation Accepted', 'invitation Accepted', 'invitation Accepted'];
// First invitaion Send
console.log('First invitation sended\n=======================');
invitee2.map(function (n, index) {
    console.log(`${n} said, ${message5[index]}`);
});
// invitaion Accepted
console.log('First invitation Accepted\n=======================');
invitee2.map(function (n, index) {
    if (message5[index].toLowerCase() === 'invitation accepted')
        console.log(`${n} said, ${message5[index]}`);
});
// invitaion Rejected
console.log('First invitation Rejection\n=======================');
const newIndex2 = invitee2.map(function (n, index) {
    if (message5[index].toLowerCase() === 'invitation rejected') {
        console.log(`${n} said, ${message5[index]}`);
        return index;
        //console.log(n)
    }
    // return n;
});
const filteredIndex2 = newIndex2.filter((x) => {
    return x !== undefined;
});
let numb15 = filteredIndex2[0];
invitee2.splice(numb15, 1, "Elon Musk");
console.log(`new invitee list ${invitee2}`);
// 2nd invitaion Send
console.log('Second invitation sended\n=======================');
invitee2.map(function (n, index) {
    console.log(`${n} said, ${message6[index]}`);
});
