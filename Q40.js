/*Album: Write a function called make_album() that builds a Object describing a music album. '
The function should take in an artist name and an album title, and it should return a Object containing
these two pieces of information. Use the function to make three dictionaries representing different albums.
Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object.
Make at least one new function call that includes the number of tracks on an album.*/
function make_album(aName, aTitle, tracks) {
    if (tracks === void 0) { tracks = 0; }
    var album = {
        Artist_Name: aName,
        Album_Title: aTitle
    };
    if (tracks !== 0) {
        album.No_of_tracks = tracks;
    }
    return album;
}
var a1 = make_album('Atif Aslam', 'Atif Aslam Album');
var a2 = make_album('Ali Zafar', 'Jhoom', 6);
console.log(a1);
console.log(a2);
