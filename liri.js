var fs = require("fs");

// Twitter

var twitter = require("twitter");

// Grabs the key variables
var keys = require("./keys.js");

var action = process.argv[2];


	switch (action) {
	case "my-tweets":
		myTweets();
		break;
	case "spotify-this-song":
		spotifyThisSong();
		break;
	case "movie-this":
		movieThis();
		break;
	case "do-what-it-says":
		doWhatItSays();
		break;
	default :
		console.log("Invalid input. Try again!");
	}


function myTweets(){

// Gets all of keys from the keys file.
var keyList = keys.twitterKeys;

// Loop through key list and print out details
for (var key in keyList) {
  console.log("A " + key + " key is " + keyList[key] + ".");
}

// Load the Twitter API
var twitter = require("twitter");

// New instance of a Twitter client
var client = new twitter(keys.twitterKeys);

var parameters = {
	screen_name: "LEBRON__CURRY",
	count: 20
}
;

client.get("statuses/user_timeline", parameters, function(err, response) {
    if (err) {
      return console.log(err);
	}
	for (var i = 0; i < response.length; i++) {
		console.log("-----------")
		console.log(response[i].text+"\n")
		console.log("-----------")
	}
	
	});
}


// Spotify

// var Spotify = require('node-spotify-api');
//  
// var spotify = new Spotify({
//   id: '925e3806b30c4ac2878edcfc08392194',
//   secret: 'e015f1e4683a4c39ade086dc77fe1448'
// });
// 
// function spotifyThisSong(){
// 
// // Gets all of keys from the keys file.
// var keyList = keys.spotifyKeys;
// 
// // Loop through key list and print out details
// for (var key in keyList) {
//   console.log("A " + key + " key is " + keyList[key] + ".");
// }
// 
// // Load the Spotify API
// var spotify = require("spotify");
// 
// // New instance of a Spotify client
// var client = new spotify(keys.spotifyKeys);
// 
// spotify.search({ type: 'track', query: 'inputName' }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }
//  
//     // Do something with 'data' 
// });
// 
// var spotifyParams = {
//                 type: 'track',
//                 query: inputName};
// 
// 
// client.get(" ", spotifyParams, function(err, response) {
//     if (err) {
//       return console.log(err);
// 	}
// 	for (var i = 0; i < response.length; i++) {
// 		console.log("-----------")
// 		console.log(response[i].text+"\n")
// 		console.log("-----------")
// 	}
// 
// 
// });
