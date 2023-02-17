/* Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else to invite. */
var invitee = ['Steve Jobs', 'Bill gates', 'Larry Page'];
var message5 = ['invitation Accepted', 'invitation Accepted', 'invitation Rejected'];
var message6 = ['invitation Accepted', 'invitation Accepted', 'invitation Accepted'];
// First invitaion Send
console.log('First invitation sended\n=======================');
invitee.map(function (n, index) {
    console.log("".concat(n, " said, ").concat(message5[index]));
});
// invitaion Accepted
console.log('First invitation Accepted\n=======================');
invitee.map(function (n, index) {
    if (message5[index].toLowerCase() === 'invitation accepted')
        console.log("".concat(n, " said, ").concat(message5[index]));
});
// invitaion Rejected
console.log('First invitation Rejection\n=======================');
var newIndex = invitee.map(function (n, index) {
    if (message5[index].toLowerCase() === 'invitation rejected') {
        console.log("".concat(n, " said, ").concat(message5[index]));
        return index;
        //console.log(n)
    }
    // return n;
});
var filteredIndex = newIndex.filter(function (x) {
    return x !== undefined;
});
var numb = filteredIndex[0];
invitee.splice(numb, 1, "Elon Musk");
console.log("new invitee list ".concat(invitee));
// 2nd invitaion Send
console.log('Second invitation sended\n=======================');
invitee.map(function (n, index) {
    console.log("".concat(n, " said, ").concat(message6[index]));
});
