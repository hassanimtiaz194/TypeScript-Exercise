/* More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. 
Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, 
one for each person in your list. */

const invitee: string[] = ['Steve Jobs', 'Bill gates', 'Larry Page']
const message1: string[] = ['invitation Accepted', 'invitation Accepted', 'invitation Rejected']
const message3: string[] = ['invitation Accepted', 'invitation Accepted', 'invitation Accepted']
const message4: string[] = ['invitation Accepted', 'invitation Accepted', 'invitation Rejected', 'invitation Accepted', 'invitation Accepted', 'invitation Accepted']
// First invitaion Send
console.log('First invitation sended\n=======================')
invitee.map(function (n, index) {
    console.log(`${n} said, ${message1[index]}`);
});
// invitaion Accepted
console.log('First invitation Accepted\n=======================')
invitee.map(function (n, index) {
    if (message1[index].toLowerCase() === 'invitation accepted')
        console.log(`${n} said, ${message1[index]}`);
});
// invitaion Rejected
console.log('First invitation Rejection\n=======================')
const newIndex: (number|undefined)[] = invitee.map(function (n, index) {
    if (message1[index].toLowerCase() === 'invitation rejected') {
        console.log(`${n} said, ${message1[index]}`);
        return index;
        //console.log(n)
    }
    // return n;
});
const filteredIndex: (number | undefined)[] = newIndex.filter((x) => {
    return x !== undefined;
});
let numb16: (number |any) = filteredIndex[0];
invitee.splice(numb16, 1, "Elon Musk")
console.log(`new invitee list ${invitee}`);

// 2nd invitaion Send
console.log('Second invitation sended\n=======================')
invitee.map(function (n, index) {
    console.log(`${n} said, ${message3[index]}`);
});
console.log('Bigger table is available\n=======================')
invitee.unshift('Jeff Bezos')
invitee.splice((invitee.length) / 2, 0, 'Jack Dorsey')
invitee.push('Mark Zuckerberg');
console.log(`3rd invitaion list ${invitee}`)

console.log('3rd invitation sended\n=======================')
invitee.map(function (n, index) {
    console.log(`${n} said, ${message4[index]}`);
});