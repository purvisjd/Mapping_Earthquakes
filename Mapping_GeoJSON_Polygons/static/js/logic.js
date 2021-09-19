//create tile layer that will be background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//create dark layer option for map
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });

//create base layer that holds both maps
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
};

// create the map object with a center and zoom level
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
});


//pass our map layers into our layer control and add the layer control to the map
L.control.layers(baseMaps).addTo(map);


//accessing airport geojson url
let torontoHoods = "https://raw.githubusercontent.com/purvisjd/Mapping_Earthquakes/main/torontoNeighborhoods.json";

//create style for lines
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

//grabbing geojson data
d3.json(torontoHoods).then(function(data) {
    console.log(data);
    //create geoJSON layer with retrieved data
    L.geoJSON(data, {
        color: "blue",
        weight: 1,
        fillColor: "yellow",
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h2>" + feature.properties.area_name + "</h3>")
        }
    }).addTo(map);
});
