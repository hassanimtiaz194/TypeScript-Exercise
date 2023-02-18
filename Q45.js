"use strict";
/*Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly.*/
function car_details(manufacturer, model, optional = []) {
    const obj = {
        car_manufacturer: manufacturer,
        car_model: model
    };
    if (optional.length === 2) {
        obj.optional_features = {
            color: optional[0],
            rims: optional[1],
        };
    }
    return obj;
}
const a5 = car_details('Toyota', 2021);
const a6 = car_details('Honda', 2023, ['red', 'alloy']);
console.log(a5);
console.log(a6);
