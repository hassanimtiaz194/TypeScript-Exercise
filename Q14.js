/* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner. */
var invitee1 = ['Steve Jobs', 'Bill gates', 'Larry Page'];
var mess2 = ['invitation Accepted', 'invitation Accepted', 'invitation Rejected'];
invitee1.map(function (n, index) {
    console.log("".concat(n, " said, ").concat(mess2[index]));
});
