// Grabs the key variables
var keys = require("./keys.js");

// Gets all of keys from the keys file.
var keyList = keys.myKeys;

// Loop through key list and print out details
for (var key in keyList) {
  console.log("A " + key + " key is " + keyList[key] + ".");
}
