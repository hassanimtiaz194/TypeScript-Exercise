/* Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner. */

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
console.log(`Total Invitation sended 1st time= ${invitee.length}`)
// invitaion Accepted
console.log('\nFirst invitation Accepted\n=======================')
invitee.map(function (n, index) {
    if (message[index].toLowerCase() === 'invitation accepted')
        console.log(`${n} said, ${message[index]}`);
});
// invitaion Rejected
console.log('\nFirst invitation Rejection\n=======================')
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
// 2nd invitaion Send
console.log('\nSecond invitation sended\n=======================')
invitee.splice(numb, 1, "Elon Musk")
console.log(`new invitee list ${invitee}`);


invitee.map(function (n, index) {
    console.log(`${n} said, ${message2[index]}`);
});
console.log(`Total Invitation send 2nd time= ${invitee.length}`)
console.log('\nBigger table is available\n=======================')
invitee.unshift('Jeff Bezos')
invitee.splice((invitee.length) / 2, 0, 'Jack Dorsey')
invitee.push('Mark Zuckerberg');
console.log(`3rd invitaion list ${invitee}`)

console.log('\n3rd invitation sended\n=======================')
invitee.map(function (n, index) {
    console.log(`${n} said, ${message3[index]}`);
});
console.log(`Total Invitation send 3rd time= ${invitee.length}`)
console.log('\nCan invite only two people\n=======================')
for (let i = invitee.length; invitee.length > 2; i--) {
    console.log(`sorry due to unavailability i can invitee i can invite two peoples ${invitee.pop()} you are univited`)
}
console.log('\n4th invitation sended\n=======================')
invitee.map(function (n, index) {
    console.log(`${n} said, ${message4[index]}`);
});
console.log(`Total Invitation send 4th time= ${invitee.length}`)
console.log('\nemptying list \n=======================')
for (let i = invitee.length; invitee.length > 0; i--) {
    console.log(`${invitee.pop()} you are univited`)
    if (invitee.length === 0) {
        console.log('list is now empty')
    }
}
console.log(invitee);
