//create tile layer that will be background of the map
let night = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//create dark layer option for map
let day = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });

//create base layer that holds both maps
let baseMaps = {
    Night: night,
    Day: day
};

// create the map object with a center and zoom level
let map = L.map('mapid', {
    center: [44.0, -88.0],
    zoom: 2,
    layers: [night]
});


// L.polyline(line, {
//     color:"blue",
//     opacity: .5,
//     weight: 4,
//     dashArray:'20, 20'
// }).addTo(map)


//pass our map layers into our layer control and add the layer control to the map
L.control.layers(baseMaps).addTo(map);


//accessing airport geojson url
let torontoData = "https://raw.githubusercontent.com/purvisjd/Mapping_Earthquakes/main/torontoRoutes.json";

//create style for lines
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

//grabbing geojson data
d3.json(torontoData).then(function(data) {
    L.geoJson(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h3>" + "Airline: " + feature.properties.airline + "</h3> <hr><h3 Destination: " + feature.properties.dst + "</h3>");    
        }}).addTo(map);
});
