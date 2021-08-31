// Définition des fonds de cartes à afficher
layerMapbox = {
    url: 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}

layerEsri = {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
};

layerOpenStreetMap = {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 };
 
// Définition des points d'intérêts (marqueurs)
 const pois = [
    { 
        name: 'Centre',
        coord: { lat:47.3241, lng: 2.8125 }
    }
];

// Construction de la carte
const map = L.map('mapid').setView(pois[0].coord, 5);

// Choix du fond de carte à afficher 
L.tileLayer(layerOpenStreetMap.url, {attribution: layerOpenStreetMap.attribution}).addTo(map);

// Chargement des données geoJson
document.addEventListener("DOMContentLoaded", () => {
    loadData('geojson/departements.geojson');
});

// Ajout des points d'intérêts (markers)
pois.forEach(poi => {
    L.marker(poi.coord)
    .addTo(map)
    .bindPopup(poi.name);
});

// Affichage des coordonnées du point cliqué
map.on('click', (e) => {
    const lat = parseFloat(e.latlng.lat).toFixed(4);
    const lng = parseFloat(e.latlng.lng).toFixed(4);

    alert(`Latitude: ${lat} \nLongitude: ${lng}`);
});

// Fonction de chargement des données geoJson
async function loadData(url) {
    const response = await fetch(url);
    const datas = await response.json();
    console.log(datas);
    const geojson = L.geoJSON(datas).addTo(map);
    // Recentrer la carte
    map.fitBounds(geojson.getBounds());
}