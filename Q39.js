/*City Names: Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/
function city_country(city, country) {
    return city + ', ' + country;
}
var a1 = city_country('Islamabad', 'Pakistan');
var a2 = city_country('Sydney', 'Austrailia');
var a3 = city_country('london', 'UK');
console.log(a1);
console.log(a2);
console.log(a3);
