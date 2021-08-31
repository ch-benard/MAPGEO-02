/*===================================*
 | Définition des variables globales |
 *===================================*/
// Données régionales
regional_datas = [
    { code: 3, region: 'Guyane', sites: 1 },
    { code: 11, region: 'Île-de-France', sites: 179 },
    { code: 24, region: 'Centre-Val de Loire', sites: 6 },
    { code: 27, region: 'Bourgogne-Franche-Comté', sites: 1 },
    { code: 28, region: 'Normandie', sites: 13 },
    { code: 32, region: 'Hauts-de-France', sites: 114 },
    { code: 44, region: 'Grand Est', sites: 2 },
    { code: 52, region: 'Pays de la Loire', sites: 62 },
    { code: 53, region: 'Bretagne', sites: 5 },
    { code: 75, region: 'Nouvelle-Aquitaine', sites: 166 },
    { code: 76, region: 'Occitanie', sites: 86 },
    { code: 84, region: 'Auvergne-Rhône-Alpes', sites: 83 },
    { code: 93, region: 'Provence-Alpes-Côte d\'Azur', sites: 56 }
];

// Données départementales
departemental_datas = [
    { code: 5, departement: 'Hautes-Alpes', nbre_sites: 1 },
    { code: 6, departement: 'Alpes-Maritimes', nbre_sites: 4 },
    { code: 13, departement: 'Bouches-du-Rhône', nbre_sites: 36 },
    { code: 14, departement: 'Calvados', nbre_sites: 13 },
    { code: 21, departement: 'Côte-d\'Or', nbre_sites: 1 },
    { code: 26, departement: 'Drôme', nbre_sites: 2 },
    { code: 30, departement: 'Gard', nbre_sites: 1 },
    { code: 31, departement: 'Haute-Garonne', nbre_sites: 67 },
    { code: 33, departement: 'Gironde', nbre_sites: 164 },
    { code: 34, departement: 'Hérault', nbre_sites: 13 },
    { code: 35, departement: 'Ille-et-Vilaine', nbre_sites: 5 },
    { code: 36, departement: 'Indre', nbre_sites: 1 },
    { code: 37, departement: 'Indre-et-Loire', nbre_sites: 1 },
    { code: 38, departement: 'Isère', nbre_sites: 27 },
    { code: 41, departement: 'Loir-et-Cher', nbre_sites: 1 },
    { code: 44, departement: 'Loire-Atlantique', nbre_sites: 53 },
    { code: 45, departement: 'Loiret', nbre_sites: 3 },
    { code: 49, departement: 'Maine-et-Loire', nbre_sites: 8 },
    { code: 57, departement: 'Moselle', nbre_sites: 2 },
    { code: 59, departement: 'Nord', nbre_sites: 89 },
    { code: 62, departement: 'Pas-de-Calais', nbre_sites: 25 },
    { code: 63, departement: 'Puy-de-Dôme', nbre_sites: 7 },
    { code: 66, departement: 'Pyrénées-Orientales', nbre_sites: 5 },
    { code: 69, departement: 'Rhône', nbre_sites: 39 },
    { code: 74, departement: 'Haute-Savoie', nbre_sites: 8 },
    { code: 75, departement: 'Paris', nbre_sites: 1 },
    { code: 77, departement: 'Seine-et-Marne', nbre_sites: 15 },
    { code: 78, departement: 'Yvelines', nbre_sites: 9 },
    { code: 83, departement: 'Var', nbre_sites: 5 },
    { code: 84, departement: 'Vaucluse', nbre_sites: 10 },
    { code: 85, departement: 'Vendée', nbre_sites: 1 },
    { code: 86, departement: 'Vienne', nbre_sites: 1 },
    { code: 87, departement: 'Haute-Vienne', nbre_sites: 1 },
    { code: 91, departement: 'Essonne', nbre_sites: 31 },
    { code: 92, departement: 'Hauts-de-Seine', nbre_sites: 6 },
    { code: 93, departement: 'Seine-Saint-Denis', nbre_sites: 50 },
    { code: 94, departement: 'Val-de-Marne', nbre_sites: 41 },
    { code: 95, departement: 'Val-d\'Oise', nbre_sites: 26 },
    { code: 973, departement: 'Guyane', nbre_sites: 1 }
];

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

// Niveau de zoom minimum pour l'affichage des régions
const REGION_MIN_ZOOM_LEVEL = 4;

// Niveau de zoom maximum pour l'affichage des régions
const REGION_MAX_ZOOM_LEVEL = 8;
// Niveau de zoom maximum pour l'affichage des départements
const DEPT_MAX_ZOOM_LEVEL = 10;
 
let pathToGeoJsonFile = null;

// Définition des points d'intérêts (marqueurs)
const pois = [
    { 
        name: 'Centre',
        coord: { lat:47.3241, lng: 2.8125 }
    }
];

let map = null;
let currentZoomLevel = 6;

/*============================*
 | Initialisation de la carte |
 *============================*/
displayMap();

function displayMap() {
    // Construction de la carte
    map = L.map('mapid').setView({ lat:47.3241, lng: 2.8125 }, currentZoomLevel);
    console.log(`Niveau de zoom initial ${map.getZoom()}`);

    // Tracking du niveau de zoom pour adapter la couche (régional / départemental / général)
    map.on('zoomend', function() {
        console.log(`Niveau de zoom: ${map.getZoom()}`);
        onZoomEnd();
    }); 

    // Chargement des données geoJson
    document.addEventListener("DOMContentLoaded", () => {
        loadData();
    });
}

// Choix du fond de carte à afficher 
L.tileLayer(layerOpenStreetMap.url, {attribution: layerOpenStreetMap.attribution}).addTo(map);


// Retourne le nombre de site de la région dont le nom est passé en paramètre
async function getRegionSites(regionName) {
    let nbsites = 0;
    regional_datas.forEach(region => {
        if ( region.region === regionName) {
            nbsites =  region.sites;
        }
    });
    return nbsites;
}

function createRegionalMarkers() {
    // Vider le tableau de marqueurs régionaux s'il contient des éléments
    if (this.regionalMarkers.length > 0 ) {
        while (this.regionalMarkers.length) {
            this.regionalMarkers.pop();
        }    
    }
    // Peupler le tableau des marqueurs régionaux
    // if  ( regional_datas.length > 0 ) {
    //     regional_datas.forEach(region => {
    //         const m = L.marker(region.)
    //     })            
    // }
}

// Fonction de chargement des données geoJson
async function loadData() {
    // On teste le niveau de zoom
    onZoomEnd();
    if (map.getZoom() >= REGION_MIN_ZOOM_LEVEL) { // Si le niveau de zoom est supérieur au zoom mini pour le niveau régional
        if (pathToGeoJsonFile !== null) {
            console.log("pathToJson n'est pas null");
            const response = await fetch(pathToGeoJsonFile);
            const datas = await response.json();
            const geojson = L.geoJSON(datas, {
                onEachFeature: async (feature, layer) => {
                    const nbSites = await this.getRegionSites(feature.properties.nom);
                    const siteLabel = nbSites > 1 ? 'sites' : 'site';
                    layer.bindPopup(`
                        <b>${feature.properties.nom}</b>
                        <div>${nbSites} ${siteLabel}</div>
                    `);
                    // Calcul du centroïd 
                    // On utilise la méthode pointOnFeature(), qui garantit que le point soit dans le polygone, plutôt que centroid()
                    const centroid = turf.pointOnFeature(feature);
                    // Création du marqueur à partir de la long et lat du centroid
                    const lon = centroid.geometry.coordinates[0];
                    const lat = centroid.geometry.coordinates[1];
                    L.marker([lat,lon])
                    .addTo(map)
                    .bindPopup(`
                        <div>${nbSites} ${siteLabel}</div>
                    `);
                }
            }).addTo(map);
            // Recentrer la carte
            // map.fitBounds(geojson.getBounds());    
        } else {
            console.log("pathToJson est null");
        }
    } else {
        console.log("On n'est pas encore au niveau de zoom régional qui est de " + REGION_MIN_ZOOM_LEVEL);
    }
}

function onZoomEnd() {
    const zoomLevel = map.getZoom();

    if ( isBetween(zoomLevel, REGION_MIN_ZOOM_LEVEL, REGION_MAX_ZOOM_LEVEL) ) {
        // Afficher les markers régionaux
        console.log("Niveau de zoom régional");
        pathToGeoJsonFile = 'geojson/regions.geojson';
    } else if ( zoomLevel > REGION_MAX_ZOOM_LEVEL && zoomLevel <= DEPT_MAX_ZOOM_LEVEL ) {
        // Afficher les markers départementaux
        console.log("Niveau de zoom départemental");
        pathToGeoJsonFile = 'geojson/departements.geojson';
    } else {
        // Niveau de zoom général
        console.log("Niveau de zoom général !");
        pathToGeoJsonFile = null;
    }

    currentZoomLevel = zoomLevel;

    // if (!this.poiMarkersVisible && zoomLevel > POI_ZOOM_LEVEL) {
    //     this.poiMarkersVisible = true;
    //     this.pois.forEach(this.createPOIMarker);
    // }

    // if (this.poiMarkersVisible && zoomLevel <= POI_ZOOM_LEVEL) {
    //     this.poiMarkersVisible = false;
    //     this.removeAllPOIMarkers();
    // }
}

function isBetween(x, min, max) {
    return x >= min && x <= max;
  }