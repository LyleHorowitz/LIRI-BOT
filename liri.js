var fs = require("fs");
var twitter = require("twitter");

// Grabs the key variables
var keys = require("./keys.js");

var action = process.argv[2];


	switch (action) {
	case "my-tweets":
		myTweets();
		// (Remember to write a function "my tweets")
		break;
	case "spotify-this-song":
		spotifyThisSong();
		// (Remember to write a function "Spotify this song")
		break;
	case "movie-this":
		movieThis();
		// (Remember to write a function "Movie this")
		break;
	case "do-what-it-says":
		doWhatItSays();
		// (Remember to write a function "Spotify this song")
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
	console.log(response);
	});


// GET https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2

// get from request
// created_at
// text


}