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
let regionalLayer = null;
let departementalLayer = null;
let previousGeoLevel = null;

/*============================*
 | Initialisation de la carte |
 *============================*/
displayMap();

function displayMap() {
    // Construction de la carte
    map = L.map('mapid').setView(pois[0].coord, 6);

    // Choix du fond de carte à afficher 
    L.tileLayer(layerOpenStreetMap.url, {attribution: layerOpenStreetMap.attribution}).addTo(map);

    // Tracking du niveau de zoom pour adapter la couche (régional / départemental / général)
    map.on('zoomend', onZoomEnd());

    // Déclenchement du premier chargement de données
    onZoomEnd();
}

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

// Fonction de chargement des données geoJson
async function loadData(niveauGeo = 'region') {
    if (niveauGeo == 'region') {
        if (pathToGeoJsonFile !== null) {
            console.log(`Chargement des données depuis ${pathToGeoJsonFile}`);
            const response = await fetch(pathToGeoJsonFile);
            const datas = await response.json();
    
            regionalLayer = L.geoJSON(datas, {
                onEachFeature: regionsOnEachFeature
            });
    
            // Recentrer la carte
            // map.fitBounds(regionalLayer.getBounds());    
        } else {
            // Rien à faire
            console.log("pathToGeoJsonFile est null");
        }
        regionalLayer.addTo(map);
    }
}

// handle click events on garden features
async function regionsOnEachFeature(feature, layer) {
    const nbSites = await this.getRegionSites(feature.properties.nom);
    const siteLabel = nbSites > 1 ? 'sites' : 'site';
    layer.bindPopup(`
        <b>${feature.properties.nom}</b>
        <div>${nbSites} ${siteLabel}</div>
    `);
    // Calcul de la position du marqueur 
    // On utilise la méthode pointOnFeature(), qui garantit que le point soit dans le polygone, plutôt que centroid()
    const markerPos = turf.pointOnFeature(feature);
    // Création du marqueur à partir de la long et lat du centroid
    const lon = markerPos.geometry.coordinates[0];
    const lat = markerPos.geometry.coordinates[1];
    L.marker([lat,lon])
    .addTo(regionalLayer)
    .bindPopup(`
        <div>${nbSites} ${siteLabel}</div>
    `);
}

function onZoomEnd() {
    console.log("Avant init de zoomLevel");
    // const zoomLevel = map.getZoom();
    // const currentGeoLevel = whichLevel(zoomLevel);
 
    // console.log(`Niveau de zoom: ${zoomLevel}`);
    // console.log(`pathToJsonFile: ${pathToGeoJsonFile}`);
    // console.log(`currentGeoLevel: ${currentGeoLevel}`);
    // console.log(`previousGeoLevel: ${previousGeoLevel}`);

    // if ( previousGeoLevel === null ) {
    //     console.log("Nous sommes après le chargement initial avant le 1er zoom");
    //     // Nous sommes après le chargement initial avant le 1er zoom
    //     pathToGeoJsonFile = 'geojson/regions.geojson';
    //     previousGeoLevel = whichLevel(zoomLevel);
    //     loadData('region');
    // } else {
    //     // Il y a déjà eu un changement de zoom sur la carte
    //     if ( currentGeoLevel === 'REGIONAL' ) {
    //         // Afficher les données régionales
    //         pathToGeoJsonFile = 'geojson/regions.geojson';

    //         // Si le niveau géo a changé
    //         if ( currentGeoLevel !== previousGeoLevel || ( regionalLayer === null && departementalLayer === null ) ) {
    //             if ( regionalLayer === null && departementalLayer === null ) {
    //                 console.log("regionalLayer et departementalLayer sont null");
    //             }
    //             // Si  la couche départementale est chargée, il faut la décharger
    //             // et charger la couche régionale
    //             if (departementalLayer !== null && map.hasLayer(departementalLayer) ) {
    //                 map.remove(departementalLayer);
    //             }
    //             previousGeoLevel = currentGeoLevel;
    //             loadData('region');
    //         }
        // } else if ( currentGeoLevel === 'DEPARTEMENTAL' ) {
        //     // Afficher les données départementales
        //     pathToGeoJsonFile = 'geojson/departements.geojson';

        //     // Si le niveau géo a changé
        //     if ( currentGeoLevel !== previousGeoLevel ) {
        //         // Si  la couche régionale est chargée, il faut la décharger
        //         // et charger la couche départementale
        //         if ( regionalLayer !== null && map.hasLayer(regionalLayer) ) {
        //             map.remove(regionalLayer);
        //             previousGeoLevel = currentGeoLevel;
        //             //loadData();
        //         }
        //     }
        // } else {
        //     // Niveau de zoom général
        //     console.log("Niveau de zoom général !");
        //     pathToGeoJsonFile = null;
        //     //loadData();
        }    
    // }
// }

function whichLevel(zoomLevel) {
    let mapLevel = null;
    if ( zoomLevel >= REGION_MIN_ZOOM_LEVEL && zoomLevel <= REGION_MAX_ZOOM_LEVEL ) {
       mapLevel = 'REGIONAL' 
    } else if ( zoomLevel > REGION_MAX_ZOOM_LEVEL && zoomLevel <= DEPT_MAX_ZOOM_LEVEL ) {
       mapLevel = 'DEPARTEMENTAL' 
    };
    return mapLevel;
  }