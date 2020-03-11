// You job is to comment the code here. 
// Walk through step by step and write down what you think the code is doing
// in the same format you're see this line of comments.

var myLocation = document.getElementById("my-coordinates") //selecting the p tag with ID my-coordinates when the Variable myLocation is called

function getLocation() { //calling the function getLocation
  if(navigator.geolocation){ // if navigator.geolocation .getCurrentPosition is true then Display Position
    navigator.geolocation.getCurrentPosition(displayPosition)
  } else { // else if false write in p tag Not Available
   myLocation.innerHTML = "Not available"
  }
}

function displayPosition(position) { 
  myLocation.innerHTML = "Longitude: " + position.coords.longitude + " Latitude: " + position.coords.latitude
}// if .getCurrentPosition was true add text to p tag the coordinates of your latitude and longitude