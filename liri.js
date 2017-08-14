// Twitter

var fs = require("fs");
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
	console.log(response);
	});

// Spotify

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: '925e3806b30c4ac2878edcfc08392194',
  secret: 'e015f1e4683a4c39ade086dc77fe1448'
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});



// GET https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2

// get from request
// created_at
// text


}