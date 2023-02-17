/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
//version 1
var alien_color = ['green', 'yellow', 'red'];
alien_color.map(function (value) {
    if (value === 'green') {
        console.log('just earned 5 points for shooting the alien');
    }
    else if (value === 'yellow') {
        console.log('just earned 10 points for shooting the alien');
    }
    else {
        console.log('just earned 15 points for shooting the alien');
    }
});
//version 2
for (var i = 0; i < alien_color.length; i++) {
    if (alien_color[i] === 'green') {
        console.log('just earned 5 points for shooting the alien');
    }
    else if (alien_color[i] === 'yellow') {
        console.log('just earned 10 points for shooting the alien');
    }
    else {
        console.log('just earned 15 points for shooting the alien');
    }
}
//version 2
alien_color.forEach(function (alien) {
    if (alien === 'green') {
        console.log('just earned 5 points for shooting the alien');
    }
    else if (alien === 'yellow') {
        console.log('just earned 10 points for shooting the alien');
    }
    else {
        console.log('just earned 15 points for shooting the alien');
    }
});
