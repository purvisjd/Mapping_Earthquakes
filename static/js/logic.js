//  add console.log to check to see if code is working properly
console.log("working");

// create the map object with a center and zoom level
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

//alternative method for using setView()
//let map = L.map("mapid", {
//  center: [
//      40.7, -94.5
//  ],
//  zoom: 4
// });

//  add a marker to the map for Los Angeles, California
//let marker = L.marker([34.0522, -118.2437]).addTo(map);
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: "#ffffa1"
}).addTo(map);

//create tile layer that will be background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);