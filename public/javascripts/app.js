$(() => { const socket = io();
    const map = L.map('mapid').setView([39.7392, -104.9903], 11);
    let busLayer;
    const load = data => {
        console.log(data.entity)
            if (busLayer) {
                busLayer.clearLayers();
            }
        let busMarkers = new Array();
        data.entity.forEach(bus => {
            if (bus.vehicle.trip) {
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
                busMarker.addEventListener('click', function(event) {
                    $('.info').html(`Route: ${this.options.title}`);
                });
                busMarkers.push(busMarker);
            }
        });
        busLayer = new L.layerGroup(busMarkers);
        busLayer.addTo(map);
    }

    const displayRoutes = routes => {
        console.log(routes);
        routes.forEach(route => {
            $('.routes').append(`
                    <div>
                    <input id="${route.route_short_name}" class="radio-custom" name="radio-group" type="radio" checked>
                    <label for="${route.route_short_name}" class="radio-custom-label">${route.route_short_name}</label>
                    </div>
                    `)
        }); 
    }

    $.get('/routes')
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


