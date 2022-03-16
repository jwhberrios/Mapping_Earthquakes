// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
var map = L.map("mapid", {
    center: [
        40.7, -94.5
    ],
    zoom: 2
});

//  Add a marker to the map for Los Angeles, California.
//L.circle([34.0522, -118.2437], {
    //radius: 100
 //}).addTo(map);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create circle radius representative of population for each city.
//cityData.forEach(function(city) {
    //console.log(city)
    //L.circleMarker(city.location, {
        //radius: city.population/100000
    //})
    //add bindPopup to retrieve city name & population with thousands separator "toLocaleString()" added.
    //.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  //.addTo(map);
//});

// Skill Drill: create an orange circle popup marker for each city, 
// with a lineweight of 4, a radius where the population number is decreased by 200,000,  
// that's on a dark map.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000,
        color: 'orange'
    })
    //add bindPopup to retrieve city name & population with thousands separator "toLocaleString()" added.
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY,
}).addTo(map);


// Then we add our 'graymap' tile layer to the map.
    streets.addTo(map);