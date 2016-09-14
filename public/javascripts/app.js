$(() => { const socket = io();
    const map = L.map('mapid').setView([39.7392, -104.9903], 11);
    let busLayer;
    let busData;
    // let currentLat = 39.757667999999995;
    // let currentLong = -105.00731119999999;
    // let currentIcon = L.icon({
    //     iconUrl: 'images/marker.png',
    //     iconSize:     [20, 38], // size of the icon
    //     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    // });
    // let currentMarker = new L.marker([currentLat, currentLong], {icon: currentIcon});
    // currentMarker.addTo(map);
    const load = data => {
        busData = data;
        if (busLayer) {
            busLayer.clearLayers();
        }
        let busMarkers = new Array();
        var route = $('input[type=radio]:checked').val();
        data.entity.forEach(bus => {
            if (bus.vehicle.trip && bus.vehicle.trip.route_id == route) {
                let busIcon = L.icon({
                    iconUrl: 'images/bus.png',
                    iconSize:     [38, 38], // size of the icon
                    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
                });
                let lat = bus.vehicle.position.latitude;
                let long = bus.vehicle.position.longitude;
                let route = bus.vehicle.trip.route_id;
                let busMarker = new L.marker([lat, long], {icon: busIcon, title: route});
                busMarkers.push(busMarker);
            }
        });
        busLayer = new L.layerGroup(busMarkers);
        busLayer.addTo(map);
    }

    const displayRoutes = routes => {
        routes.forEach(route => {
            $('.routes').append(`
                    <div>
                    <input id="${route.route_short_name}" class="radio-custom" name="radio-group" value="${route.route_short_name}" type="radio">
                    <label for="${route.route_short_name}" class="radio-custom-label">${route.route_short_name}</label>
                    </div>
                    `)
        }); 
        $('input[type=radio]').click(() => {
            if (busData) {
                load(busData);
            }
        });

    }

    $.get('/api/gtfs/agency/RTD/route')
        .done( routes => {
            displayRoutes(routes);
        }); 

    L.tileLayer('https://api.mapbox.com/styles/v1/bertoort/cisxv93yl00482xodnmqrqh8b/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmVydG9vcnQiLCJhIjoiY2lzeHV4NnF0MGF4ZzJ6cXBuY3RybXIzNCJ9.5q6gLtoI8Acuto71lC8GsQ', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: '1',
            accessToken: 'pk.eyJ1IjoiYmVydG9vcnQiLCJhIjoiY2lzeHV4NnF0MGF4ZzJ6cXBuY3RybXIzNCJ9.5q6gLtoI8Acuto71lC8GsQ'
            }).addTo(map);
    socket.on('data', load);
});


