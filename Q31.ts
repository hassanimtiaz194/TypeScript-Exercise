/* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

const allUsers1: string[] = ['admin', 'eric', 'james', 'ron', 'alex'];
while (allUsers1.length > 0) {
    allUsers1.pop();
}
if (allUsers1.length == 0 ) {
    console.log('we need to find some more users')
}
