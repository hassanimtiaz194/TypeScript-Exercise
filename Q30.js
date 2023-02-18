"use strict";
/* Hello Admin: Make a array of five or more usernames, including the name 'admin'.
Imagine you are writing code that will print a greeting to each user after they log in to a website.
Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
const allUsers = ['admin', 'eric', 'james', 'ron', 'alex'];
//let username: (string | null) = prompt("Please enter your Username");
let username = 'eric';
if (username !== '' && allUsers.includes(username)) {
    allUsers.forEach((users) => {
        //console.log(users)
        if (username === "admin" && users === "admin") {
            console.log(`Hello ${users}, would you like to see a status report`);
        }
        else if (users !== "admin" && users === username) {
            console.log(`Hello ${users}, thank you for logging in again`);
        }
    });
}
else {
    console.log('Enter valid username');
}
