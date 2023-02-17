/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, 
and it should print a summary of the sandwich that is being ordered. 
Call the function three times, using a different number of arguments each time.*/

function sandwich_summary(items: string[]) {
    items.forEach((value) => {
        console.log(value)
    })
    console.log('============================')
}

sandwich_summary(['crispy chicken', 'lettuce', 'ketup', 'bread'])
sandwich_summary(['bbq chicken', 'lettuce', 'bbq sauce', 'cheese', 'mayoniese', 'bread'])
sandwich_summary(['grilled chicken', 'lettuce', 'thosand island', 'cheese', 'mayoniese', 'bread'])


