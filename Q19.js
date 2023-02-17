/* Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner. */
var invitee = ['Steve Jobs', 'Bill gates', 'Larry Page'];
var message = ['invitation Accepted', 'invitation Accepted', 'invitation Rejected'];
var message2 = ['invitation Accepted', 'invitation Accepted', 'invitation Accepted'];
var message3 = ['invitation Accepted', 'invitation Accepted', 'invitation Rejected', 'invitation Accepted', 'invitation Accepted', 'invitation Accepted'];
var message4 = ['You are still Invited', 'You are still Invited'];
// First invitaion Send
console.log('First invitation sended\n=======================');
invitee.map(function (n, index) {
    console.log("".concat(n, " said, ").concat(message[index]));
});
console.log("Total Invitation sended 1st time= ".concat(invitee.length));
// invitaion Accepted
console.log('\nFirst invitation Accepted\n=======================');
invitee.map(function (n, index) {
    if (message[index].toLowerCase() === 'invitation accepted')
        console.log("".concat(n, " said, ").concat(message[index]));
});
// invitaion Rejected
console.log('\nFirst invitation Rejection\n=======================');
var newIndex = invitee.map(function (n, index) {
    if (message[index].toLowerCase() === 'invitation rejected') {
        console.log("".concat(n, " said, ").concat(message[index]));
        return index;
        //console.log(n)
    }
    // return n;
});
var filteredIndex = newIndex.filter(function (x) {
    return x !== undefined;
});
var numb = filteredIndex[0];
// 2nd invitaion Send
console.log('\nSecond invitation sended\n=======================');
invitee.splice(numb, 1, "Elon Musk");
console.log("new invitee list ".concat(invitee));
invitee.map(function (n, index) {
    console.log("".concat(n, " said, ").concat(message2[index]));
});
console.log("Total Invitation send 2nd time= ".concat(invitee.length));
console.log('\nBigger table is available\n=======================');
invitee.unshift('Jeff Bezos');
invitee.splice((invitee.length) / 2, 0, 'Jack Dorsey');
invitee.push('Mark Zuckerberg');
console.log("3rd invitaion list ".concat(invitee));
console.log('\n3rd invitation sended\n=======================');
invitee.map(function (n, index) {
    console.log("".concat(n, " said, ").concat(message3[index]));
});
console.log("Total Invitation send 3rd time= ".concat(invitee.length));
console.log('\nCan invite only two people\n=======================');
for (var i = invitee.length; invitee.length > 2; i--) {
    console.log("sorry due to unavailability i can invitee i can invite two peoples ".concat(invitee.pop(), " you are univited"));
}
console.log('\n4th invitation sended\n=======================');
invitee.map(function (n, index) {
    console.log("".concat(n, " said, ").concat(message4[index]));
});
console.log("Total Invitation send 4th time= ".concat(invitee.length));
console.log('\nemptying list \n=======================');
for (var i = invitee.length; invitee.length > 0; i--) {
    console.log("".concat(invitee.pop(), " you are univited"));
    if (invitee.length === 0) {
        console.log('list is now empty');
    }
}
console.log(invitee);
