//create tile layer that will be background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//create dark layer option for map
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });

//create base layer that holds both maps
let baseMaps = {
    Street: streets,
    Dark: dark
};

// create the map object with a center and zoom level
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
});


//pass our map layers into our layer control and add the layer control to the map
L.control.layers(baseMaps).addTo(map);


//accessing airport geojson url
let airportData = "https://raw.githubusercontent.com/purvisjd/Mapping_Earthquakes/main/majorAirports.json";

//grabbing geojson data
d3.json(airportData).then(function(data) {
    L.geoJson(data, {
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "</h2>" + "<h3>" + "Airport Name: " + feature.properties.name + "</h3>");
        }
    }).addTo(map);
});
