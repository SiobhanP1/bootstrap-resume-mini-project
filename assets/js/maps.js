function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });
};
var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var locations = [{
        lat: 40.785091,
        lng: -73.968285
    },
    {
        lat: 41.084045,
        lng: -73.874245
    }
];

// i is index of current location in array
var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length] // will loop to the beginning when reaches the end
    });
});

// marker image from code in marker cluster google tutorial
//var markerCluster = new markerClusterer(map, markers, 
//imagePath: ...);

// add script info from Google map API -> 'Create Marker Clusters' tutorial code example (script at bottom of code)