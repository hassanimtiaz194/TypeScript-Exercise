/* Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else to invite. */

const invitee: string[] = ['Steve Jobs', 'Bill gates', 'Larry Page']
const message5: string[] = ['invitation Accepted', 'invitation Accepted', 'invitation Rejected']
const message6: string[] = ['invitation Accepted', 'invitation Accepted', 'invitation Accepted']
// First invitaion Send
console.log('First invitation sended\n=======================')
invitee.map(function (n, index) {
    console.log(`${n} said, ${message5[index]}`);
});
// invitaion Accepted
console.log('First invitation Accepted\n=======================')
invitee.map(function (n, index) {
    if (message5[index].toLowerCase() === 'invitation accepted')
        console.log(`${n} said, ${message5[index]}`);
});
// invitaion Rejected
console.log('First invitation Rejection\n=======================')
const newIndex: number[] = invitee.map(function (n, index) {
    if (message5[index].toLowerCase() === 'invitation rejected') {
        console.log(`${n} said, ${message5[index]}`);
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
    console.log(`${n} said, ${message6[index]}`);
});