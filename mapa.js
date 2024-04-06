var map;

$(document).ready(function() {
    cargarMapa();
});

// La L es un objeto de leaflet 

function cargarMapa(){

    // Inicializar el mapa y establecer su punto central y el nivel de zoom
    map = L.map('mapid').setView([-34.656032172926906, -58.426227983358935], 13);
    
    // Cargar mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Añadir puntos en el mapa
    agregarHeladera(-34.598516864145495, -58.420117003006,"HELADERA MEDRANO");
    agregarHeladera(-34.659069603084916, -58.467244833730525, "HELADERA CAMPUS");

    // Añadir heladeras al mapa haciendo doble click
    // Salta un cuadro de dialogo para que el usuario ingrese el nombre de la heladera
    // esto se podria hacer mas lindo seguramente pero escapa a mi comprension
    map.on('dblclick', function(event) {
        var punto = event.latlng;
        var nombreHeladera = prompt("Ingrese el nombre de la heladera", "Heladera1")
        agregarHeladera(punto.lat, punto.lng, nombreHeladera);
    });
    
}

function agregarHeladera(latitud,longitud,nombreHeladera){
    var marker = L.marker([latitud, longitud]).addTo(map);
    marker.bindPopup("<b>"+nombreHeladera+"</b>").openPopup();
}

