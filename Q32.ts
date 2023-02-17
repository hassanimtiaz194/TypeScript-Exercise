/* Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone
has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users.
Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used.
If it has, print a message that the person will need to enter a new username.
If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

const current_users: string[] = ['max', 'eric', 'james', 'ron', 'alex'];
let new_users: string[] = ['alex', 'jessica', 'james', 'helen', 'stephen'];
let new_username: (string | null);

let userIndex = new_users.forEach((n_users, index) => {
    current_users.forEach((c_users, i) => {
        if (n_users === c_users) {
            console.log(index);
            //new_username = prompt("Please enter new username");
            new_username="alvin"
            if (new_username !== '' && new_username !== n_users.toLowerCase() && new_username !== n_users.toUpperCase()
                && !current_users.includes(new_username.toLowerCase()) && !current_users.includes(new_username.toUpperCase())) {
                console.log('username has not been used, print a message saying that the username is available')
                new_users.splice(index, 1, new_username)

            } else {
                console.log('Enter a valid Name')
            }
        }
    })
})
console.log(`current users = ${current_users}`);
console.log(`new users = ${new_users}`);