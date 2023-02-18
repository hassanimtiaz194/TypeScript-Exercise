/* Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase. */

const uname: string = 'Hassan Imtiaz';

function titlecase(name2: string) {
    const value1: string[] = name2.toLowerCase().split(' ')
    const value2: string[] = value1.map((n) => {
        return n[0].toUpperCase() + n.slice(1)
    })
    return value2.join(' ');
}
console.log(`lowercase: ${uname.toLowerCase()}`);
console.log(`uppercase: ${uname.toUpperCase()}`);
console.log(`titlecase: ${titlecase(uname)}`);