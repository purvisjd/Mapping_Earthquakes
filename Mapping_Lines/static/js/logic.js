//  add console.log to check to see if code is working properly
console.log("working");

// create the map object with a center and zoom level
let map = L.map('mapid').setView([37.6123, -122.3790], 5);


// coordinates for points to be used in line
let line = [
    [33.9416, -118.4085],
    [40.641766, -73.780968],
    [30.1975, -97.6664],
    [39.0508, -84.6673],
    [43.6777, -79.6248]
];


//create polyline using line coordinates and make line red
L.polyline(line, {
    color:"blue",
    opacity: .5,
    weight: 4,
    dashArray:'20, 20'
}).addTo(map)


//L.circleMarker([34.0522, -118.2437], {
//    radius: 300,
//   color: "black",
//    fillColor: "#ffffa1"
//}).addTo(map);

//create tile layer that will be background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);