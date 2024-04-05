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

    // Añadir un marcador
    agregarHeladera(-34.598516864145495, -58.420117003006,"HELADERA MEDRANO");

    // Añadimos otros
    agregarHeladera(-34.659069603084916, -58.467244833730525, "HELADERA CAMPUS");
}

function agregarHeladera(latitud,longitud,nombreHeladera){
    var marker = L.marker([latitud, longitud]).addTo(map);
    
    marker.bindPopup("<b>"+nombreHeladera+"</b>").openPopup();
}

