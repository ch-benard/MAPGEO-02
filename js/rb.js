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
    { code: 5, departement: 'Hautes-Alpes', sites: 1 },
    { code: 6, departement: 'Alpes-Maritimes', sites: 4 },
    { code: 13, departement: 'Bouches-du-Rhône', sites: 36 },
    { code: 14, departement: 'Calvados', sites: 13 },
    { code: 21, departement: 'Côte-d\'Or', sites: 1 },
    { code: 26, departement: 'Drôme', sites: 2 },
    { code: 30, departement: 'Gard', sites: 1 },
    { code: 31, departement: 'Haute-Garonne', sites: 67 },
    { code: 33, departement: 'Gironde', sites: 164 },
    { code: 34, departement: 'Hérault', sites: 13 },
    { code: 35, departement: 'Ille-et-Vilaine', sites: 5 },
    { code: 36, departement: 'Indre', sites: 1 },
    { code: 37, departement: 'Indre-et-Loire', sites: 1 },
    { code: 38, departement: 'Isère', sites: 27 },
    { code: 41, departement: 'Loir-et-Cher', sites: 1 },
    { code: 44, departement: 'Loire-Atlantique', sites: 53 },
    { code: 45, departement: 'Loiret', sites: 3 },
    { code: 49, departement: 'Maine-et-Loire', sites: 8 },
    { code: 57, departement: 'Moselle', sites: 2 },
    { code: 59, departement: 'Nord', sites: 89 },
    { code: 62, departement: 'Pas-de-Calais', sites: 25 },
    { code: 63, departement: 'Puy-de-Dôme', sites: 7 },
    { code: 66, departement: 'Pyrénées-Orientales', sites: 5 },
    { code: 69, departement: 'Rhône', sites: 39 },
    { code: 74, departement: 'Haute-Savoie', sites: 8 },
    { code: 75, departement: 'Paris', sites: 1 },
    { code: 77, departement: 'Seine-et-Marne', sites: 15 },
    { code: 78, departement: 'Yvelines', sites: 9 },
    { code: 83, departement: 'Var', sites: 5 },
    { code: 84, departement: 'Vaucluse', sites: 10 },
    { code: 85, departement: 'Vendée', sites: 1 },
    { code: 86, departement: 'Vienne', sites: 1 },
    { code: 87, departement: 'Haute-Vienne', sites: 1 },
    { code: 91, departement: 'Essonne', sites: 31 },
    { code: 92, departement: 'Hauts-de-Seine', sites: 6 },
    { code: 93, departement: 'Seine-Saint-Denis', sites: 50 },
    { code: 94, departement: 'Val-de-Marne', sites: 41 },
    { code: 95, departement: 'Val-d\'Oise', sites: 26 },
    { code: 973, departement: 'Guyane', sites: 1 }
];

urban_datas = [
    { code: '33063', city: 'Bordeaux', sites: 68},
    { code: '31555', city: 'Toulouse', sites: 64},
    { code: '59350', city: 'Lille', sites: 36},
    { code: '13055', city: 'Marseille', sites: 30},
    { code: '44109', city: 'Nantes', sites: 25},
    { code: '69123', city: 'Lyon', sites: 22},
    { code: '59512', city: 'Roubaix', sites: 22},
    { code: '33039', city: 'Bègles', sites: 18},
    { code: '38185', city: 'Grenoble', sites: 16},
    { code: '33281', city: 'Mérignac', sites: 15},
    { code: '69266', city: 'Villeurbanne', sites: 14},
    { code: '33318', city: 'Pessac', sites: 12},
    { code: '34172', city: 'Montpellier', sites: 12},
    { code: '93048', city: 'Montreuil', sites: 11},
    { code: '93072', city: 'Stains', sites: 10},
    { code: '14118', city: 'Caen', sites: 9},
    { code: '94041', city: 'Ivry-sur-Seine', sites: 9},
    { code: '62351', city: 'Fouquières-lès-Lens', sites: 9},
    { code: '44162', city: 'Saint-Herblain', sites: 8},
    { code: '33119', city: 'Cenon', sites: 8},
    { code: '33550', city: 'Villenave-d\'Ornon', sites: 8},
    { code: '59009', city: 'Villeneuve-d\'Ascq', sites: 8},
    { code: '33522', city: 'Talence', sites: 7},
    { code: '33192', city: 'Gradignan', sites: 7},
    { code: '95127', city: 'Cergy', sites: 6},
    { code: '94076', city: 'Villejuif', sites: 6},
    { code: '94081', city: 'Vitry-sur-Seine', sites: 6},
    { code: '33162', city: 'Eysines', sites: 6},
    { code: '44172', city: 'Sainte-Luce-sur-Loire', sites: 6},
    { code: '84007', city: 'Avignon', sites: 5},
    { code: '63113', city: 'Clermont-Ferrand', sites: 5},
    { code: '95585', city: 'Sarcelles', sites: 5},
    { code: '91340', city: 'Lisses', sites: 4},
    { code: '93001', city: 'Aubervilliers', sites: 4},
    { code: '93066', city: 'Saint-Denis', sites: 4},
    { code: '33069', city: 'Le Bouscat', sites: 4},
    { code: '78423', city: 'Montigny-le-Bretonneux', sites: 4},
    { code: '77288', city: 'Melun', sites: 4},
    { code: '91174', city: 'Corbeil-Essonnes', sites: 4},
    { code: '38421', city: 'Saint-Martin-d\'Hères', sites: 4},
    { code: '62570', city: 'Méricourt', sites: 4},
    { code: '35238', city: 'Rennes', sites: 3},
    { code: '33167', city: 'Floirac', sites: 3},
    { code: '59507', city: 'Ronchin', sites: 3},
    { code: '84092', city: 'Le Pontet', sites: 3},
    { code: '93006', city: 'Bagnolet', sites: 3},
    { code: '93008', city: 'Bobigny', sites: 3},
    { code: '95280', city: 'Goussainville', sites: 3},
    { code: '92050', city: 'Nanterre', sites: 3},
    { code: '13001', city: 'Aix-en-Provence', sites: 3},
    { code: '49007', city: 'Angers', sites: 3},
    { code: '59599', city: 'Tourcoing', sites: 3},
    { code: '44026', city: 'Carquefou', sites: 3},
    { code: '6088', city: 'Nice', sites: 3},
    { code: '77152', city: 'Dammarie-les-Lys', sites: 3},
    { code: '62427', city: 'Hénin-Beaumont', sites: 2},
    { code: '92025', city: 'Colombes', sites: 2},
    { code: '59286', city: 'Haubourdin', sites: 2},
    { code: '93063', city: 'Romainville', sites: 2},
    { code: '91286', city: 'Grigny', sites: 2},
    { code: '44018', city: 'Bouaye', sites: 2},
    { code: '59410', city: 'Mons-en-Baroeul', sites: 2},
    { code: '94016', city: 'Cachan', sites: 2},
    { code: '59527', city: 'Saint-André-lez-Lille', sites: 2},
    { code: '94038', city: 'L\'Haÿ-les-Roses', sites: 2},
    { code: '26182', city: 'Mirabel-aux-Baronnies', sites: 2},
    { code: '49267', city: 'Saint-Barthélemy-d\'Anjou', sites: 2},
    { code: '66164', city: 'Rivesaltes', sites: 2},
    { code: '77468', city: 'Torcy', sites: 2},
    { code: '44047', city: 'Couëron', sites: 2},
    { code: '74012', city: 'Annemasse', sites: 2},
    { code: '74010', city: 'Annecy', sites: 2},
    { code: '95394', city: 'Méry-sur-Oise', sites: 2},
    { code: '93064', city: 'Rosny-sous-Bois', sites: 2},
    { code: '14437', city: 'Mondeville', sites: 2},
    { code: '83137', city: 'Toulon', sites: 2},
    { code: '93070', city: 'Saint-Ouen', sites: 2},
    { code: '66136', city: 'Perpignan', sites: 2},
    { code: '94071', city: 'Sucy-en-Brie', sites: 2},
    { code: '91027', city: 'Athis-Mons', sites: 2},
    { code: '91589', city: 'Savigny-sur-Orge', sites: 2},
    { code: '93027', city: 'La Courneuve', sites: 2},
    { code: '44114', city: 'Orvault', sites: 2},
    { code: '49323', city: 'Verrières-en-Anjou', sites: 2},
    { code: '91434', city: 'Morsang-sur-Orge', sites: 2},
    { code: '57630', city: 'Sarrebourg', sites: 2},
    { code: '93039', city: 'L\'Île-Saint-Denis', sites: 2},
    { code: '95572', city: 'Saint-Ouen-l\'Aumône', sites: 2},
    { code: '94037', city: 'Gentilly', sites: 2},
    { code: '69276', city: 'Feyzin', sites: 2},
    { code: '44020', city: 'Bouguenais', sites: 2},
    { code: '91377', city: 'Massy', sites: 2},
    { code: '74094', city: 'Cranves-Sales', sites: 2},
    { code: '91692', city: 'Les Ulis', sites: 2},
    { code: '33003', city: 'Ambarès-et-Lagrave', sites: 2},
    { code: '59360', city: 'Loos', sites: 2},
    { code: '91161', city: 'Chilly-Mazarin', sites: 2},
    { code: '45234', city: 'Orléans', sites: 2},
    { code: '38516', city: 'La Tronche', sites: 2},
    { code: '38151', city: 'Échirolles', sites: 2},
    { code: '77255', city: 'Livry-sur-Seine', sites: 1},
    { code: '59328', city: 'Lambersart', sites: 1},
    { code: '84003', city: 'Apt', sites: 1},
    { code: '74298', city: 'Vétraz-Monthoux', sites: 1},
    { code: '13005', city: 'Aubagne', sites: 1},
    { code: '33122', city: 'Cestas', sites: 1},
    { code: '91521', city: 'Ris-Orangis', sites: 1},
    { code: '33424', city: 'Saint-Laurent-Médoc', sites: 1},
    { code: '63116', city: 'Combronde', sites: 1},
    { code: '5061', city: 'Gap', sites: 1},
    { code: '94017', city: 'Champigny-sur-Marne', sites: 1},
    { code: '74008', city: 'Ambilly', sites: 1},
    { code: '91659', city: 'Villabé', sites: 1},
    { code: '92002', city: 'Antony', sites: 1},
    { code: '37261', city: 'Tours', sites: 1},
    { code: '91471', city: 'Orsay', sites: 1},
    { code: '93050', city: 'Neuilly-sur-Marne', sites: 1},
    { code: '91103', city: 'Brétigny-sur-Orge', sites: 1},
    { code: '91228', city: 'Évry', sites: 1},
    { code: '59648', city: 'Wattignies', sites: 1},
    { code: '78118', city: 'Buchelay', sites: 1},
    { code: '44035', city: 'La Chapelle-sur-Erdre', sites: 1},
    { code: '34129', city: 'Lattes', sites: 1},
    { code: '94011', city: 'Bonneuil-sur-Marne', sites: 1},
    { code: '13004', city: 'Arles', sites: 1},
    { code: '62350', city: 'Fouquières-lès-Béthune', sites: 1},
    { code: '62628', city: 'Noyelles-sous-Lens', sites: 1},
    { code: '95199', city: 'Domont', sites: 1},
    { code: '30189', city: 'Nîmes', sites: 1},
    { code: '69204', city: 'Saint-Genis-Laval', sites: 1},
    { code: '31557', city: 'Tournefeuille', sites: 1},
    { code: '97302', city: 'Cayenne', sites: 1},
    { code: '62587', city: 'Montigny-en-Gohelle', sites: 1},
    { code: '78314', city: 'Issou', sites: 1},
    { code: '49353', city: 'Trélazé', sites: 1},
    { code: '35207', city: 'Noyal-sur-Vilaine', sites: 1},
    { code: '91477', city: 'Palaiseau', sites: 1},
    { code: '31069', city: 'Blagnac', sites: 1},
    { code: '93051', city: 'Noisy-le-Grand', sites: 1},
    { code: '44215', city: 'Vertou', sites: 1},
    { code: '14341', city: 'Ifs', sites: 1},
    { code: '94073', city: 'Thiais', sites: 1},
    { code: '95306', city: 'Herblay', sites: 1},
    { code: '62498', city: 'Lens', sites: 1},
    { code: '45286', city: 'Saint-Jean-le-Blanc', sites: 1},
    { code: '35240', city: 'Le Rheu', sites: 1},
    { code: '77186', city: 'Fontainebleau', sites: 1},
    { code: '41018', city: 'Blois', sites: 1},
    { code: '59178', city: 'Douai', sites: 1},
    { code: '77464', city: 'Thorigny-sur-Marne', sites: 1},
    { code: '78551', city: 'Saint-Germain-en-Laye', sites: 1},
    { code: '59553', city: 'Santes', sites: 1},
    { code: '91235', city: 'Fleury-Mérogis', sites: 1},
    { code: '59343', city: 'Lesquin', sites: 1},
    { code: '85191', city: 'La Roche-sur-Yon', sites: 1},
    { code: '95256', city: 'Frépillon', sites: 1},
    { code: '63300', city: 'Riom', sites: 1},
    { code: '77407', city: 'Saint-Fargeau-Ponthierry', sites: 1},
    { code: '77305', city: 'Montereau-Fault-Yonne', sites: 1},
    { code: '93014', city: 'Clichy-sous-Bois', sites: 1},
    { code: '83099', city: 'Puget-sur-Argens', sites: 1},
    { code: '59028', city: 'Auby', sites: 1},
    { code: '86194', city: 'Poitiers', sites: 1},
    { code: '78545', city: 'Saint-Cyr-l\'École', sites: 1},
    { code: '75056', city: 'Paris', sites: 1},
    { code: '44143', city: 'Rezé', sites: 1},
    { code: '94003', city: 'Arcueil', sites: 1},
    { code: '31149', city: 'Colomiers', sites: 1},
    { code: '62842', city: 'Vendin-le-Vieil', sites: 1},
    { code: '94068', city: 'Saint-Maur-des-Fossés', sites: 1},
    { code: '33213', city: 'La Brède', sites: 1},
    { code: '94046', city: 'Maisons-Alfort', sites: 1},
    { code: '94033', city: 'Fontenay-sous-Bois', sites: 1},
    { code: '66021', city: 'Bompas', sites: 1},
    { code: '33056', city: 'Blanquefort', sites: 1},
    { code: '83126', city: 'La Seyne-sur-Mer', sites: 1},
    { code: '33302', city: 'Néac', sites: 1},
    { code: '91661', city: 'Villebon-sur-Yvette', sites: 1},
    { code: '33437', city: 'Saint-Magne-de-Castillon', sites: 1},
    { code: '94022', city: 'Choisy-le-Roi', sites: 1},
    { code: '95268', city: 'Garges-lès-Gonesse', sites: 1},
    { code: '21231', city: 'Dijon', sites: 1},
    { code: '13117', city: 'Vitrolles', sites: 1},
    { code: '59646', city: 'Wasquehal', sites: 1},
    { code: '87085', city: 'Limoges', sites: 1},
    { code: '33449', city: 'Saint-Médard-en-Jalles', sites: 1},
    { code: '14327', city: 'Hérouville-Saint-Clair', sites: 1},
    { code: '36063', city: 'Déols', sites: 1},
    { code: '33200', city: 'Le Haillan', sites: 1},
    { code: '94002', city: 'Alfortville', sites: 1},
    { code: '91216', city: 'Épinay-sur-Orge', sites: 1},
    { code: '78642', city: 'Verneuil-sur-Seine', sites: 1},
    { code: '94021', city: 'Chevilly-Larue', sites: 1},
    { code: '95476', city: 'Osny', sites: 1},
    { code: '38169', city: 'Fontaine', sites: 1},
    { code: '95427', city: 'Montmagny', sites: 1},
    { code: '6004', city: 'Antibes', sites: 1},
    { code: '84129', city: 'Sorgues', sites: 1},
    { code: '93031', city: 'Épinay-sur-Seine', sites: 1},
    { code: '95680', city: 'Villiers-le-Bel', sites: 1},
    { code: '94028', city: 'Créteil', sites: 1},
    { code: '94004', city: 'Boissy-Saint-Léger', sites: 1},
    { code: '95088', city: 'Bonneuil-en-France', sites: 1},
    { code: '59346', city: 'Lezennes', sites: 1},
    { code: '93055', city: 'Pantin', sites: 1},
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
const REGION_MIN_ZOOM_LEVEL = 7;
// Niveau de zoom maximum pour l'affichage des régions
const REGION_MAX_ZOOM_LEVEL = 8;
// Niveau de zoom maximum pour l'affichage des départements
const DEPT_MAX_ZOOM_LEVEL = 12;
 
/*============================*
 | Initialisation de la carte |
 *============================*/
// Construction de la carte
const map = L.map('mapid').setView({ lat:47.3241, lng: 2.8125 }, 6);

// Couche des régions
let regionalLayer = L.geoJSON();
// Couche des départements
let departementalLayer = L.geoJSON();
// Couche des communes
let urbanLayer = L.geoJSON();

// Peuplement des couches régions et départements
loadRegionalData();
loadDepartementalData();
loadUrbanData();

map.on("zoomend", () => {
    const zoomLevel = map.getZoom();

    if ( zoomLevel >= REGION_MIN_ZOOM_LEVEL && zoomLevel <= REGION_MAX_ZOOM_LEVEL ) {
        // Afficher les markers régionaux
        console.log(`Niveau de zoom régional: ${zoomLevel}`);
        showRegionalLayer();
    } else if ( zoomLevel > REGION_MAX_ZOOM_LEVEL && zoomLevel <= DEPT_MAX_ZOOM_LEVEL ) {
        // Afficher les markers départementaux
        console.log(`Niveau de zoom départemental: ${zoomLevel}`);
        showDepartementalLayer();
    } else if ( zoomLevel > DEPT_MAX_ZOOM_LEVEL ) {
        // Afficher les markers communaux
        console.log(`Niveau de zoom communal: ${zoomLevel}`);
        showUrbanLayer();
    } else {
        // Niveau de zoom plus détaillé
        console.log(`Niveau de zoom détaillé: ${zoomLevel}`);
        removeDepartementalAndRegionalLayers();
    }
});

// Choix du fond de carte à afficher 
L.tileLayer(layerOpenStreetMap.url, {attribution: layerOpenStreetMap.attribution}).addTo(map);

// Chargement par défaut des données régionales
console.log("Affichage des données régionales");
showRegionalLayer();

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

// Retourne le nombre de site du département dont le nom est passé en paramètre
async function getDepartementSites(deptName) {
    let nbsites = 0;
    departemental_datas.forEach(dept => {
        if ( dept.departement === deptName) {
            nbsites =  dept.sites;
        }
    });
    return nbsites;
}

// Retourne le nombre de site de la ville dont le nom est passé en paramètre
async function getUrbanSites(cityName) {
    let nbsites = 0;
    urban_datas.forEach(city => {
        if ( city.city === cityName) {
            nbsites =  city.sites;
        }
    });
    return nbsites;
}

// Fonction de chargement des données geoJson régionales
async function loadRegionalData() {
    // removeDepartementalLayers();
    const pathToGeoJsonFile = 'geojson/regions.geojson';
    console.log(`Chargement des données depuis ${pathToGeoJsonFile}`);
    const response = await fetch(pathToGeoJsonFile);
    const datas = await response.json();

    regionalLayer = new L.geoJSON(datas,{
        onEachFeature: regionsOnEachFeature
    });
                     
    // regionalLayer.addTo(map);
    // Recentrer la carte
    // map.fitBounds(regionalLayer.getBounds());    
}

async function regionsOnEachFeature(feature, layer) {
    const nbSites = await getRegionSites(feature.properties.nom);
    const siteLabel = nbSites > 1 ? 'sites' : 'site';
    // Calcul de la position du marqueur
    // On utilise la méthode pointOnFeature(), qui garantit que le point soit dans le polygone, plutôt que centroid()
    const markerPosition = turf.pointOnFeature(feature);
    // Création du marqueur à partir de la long et lat retournées par pointOnFeature()
    const lon = markerPosition.geometry.coordinates[0];
    const lat = markerPosition.geometry.coordinates[1];
    circleWithText([lat,lon], nbSites, 20, 3, 'region').addTo(regionalLayer);
}

// Fonction de chargement des données geoJson départementales
async function loadDepartementalData() {
    // removeRegionalLayers();
    const pathToGeoJsonFile = 'geojson/departements.geojson';
    console.log(`Chargement des données depuis ${pathToGeoJsonFile}`);
    const response = await fetch(pathToGeoJsonFile);
    const datas = await response.json();

    departementalLayer = new L.geoJSON(datas,{
        onEachFeature: departementsOnEachFeature
      });    
}

async function departementsOnEachFeature(feature, layer) {
    const nbSites = await getDepartementSites(feature.properties.nom);
    const siteLabel = nbSites > 1 ? 'sites' : 'site';
    // Calcul de la position du marqueur
    // On utilise la méthode pointOnFeature(), qui garantit que le point soit dans le polygone, plutôt que centroid()
    const markerPosition = turf.pointOnFeature(feature);
    // Création du marqueur à partir de la long et lat retournées par pointOnFeature()
    const lon = markerPosition.geometry.coordinates[0];
    const lat = markerPosition.geometry.coordinates[1];
    circleWithText([lat,lon], `<div><strong>${feature.properties.nom}</strong><br/>${nbSites} ${siteLabel}</div>`, 40, 3, 'dept').addTo(departementalLayer);
    // const div = L.divIcon({
    //     className : `panel`,
    //     html: `<div><strong>${feature.properties.nom}</strong><br/>${nbSites} ${siteLabel}</div>`,
    //     iconSize: [250, 75]
    // });
    // L.marker([lat,lon], {
    //     icon: div
    // })
    // .addTo(departementalLayer)
    // .bindPopup(`
    // <b>${feature.properties.nom}</b>
    // <div>${nbSites} ${siteLabel}</div>
    // `);
}

// Fonction de chargement des données geoJson communales
async function loadUrbanData() {
    /*
    // Trop long à charger: on n'utilise pas le tracé des frontières communales
    // On affiche juste un marqueur avec le nbre de sites sur l'emplacement de la commune
    //
    const pathToGeoJsonFile = 'geojson/communes.geojson';
    console.log(`Chargement des données depuis ${pathToGeoJsonFile}`);
    const response = await fetch(pathToGeoJsonFile);
    const datas = await response.json();

    urbanLayer = new L.geoJSON(datas,{
        onEachFeature: citiesOnEachFeature
    });    
    */
    urban_datas.forEach( urban_data => {
        const siteLabel = urban_data.sites > 1 ? 'sites' : 'site';
        
    });
}

async function citiesOnEachFeature(feature) {
    const nbSites = await getUrbanSites(feature.properties.nom);
    const siteLabel = nbSites > 1 ? 'sites' : 'site';
    // Calcul de la position du marqueur
    // On utilise la méthode pointOnFeature(), qui garantit que le point soit dans le polygone, plutôt que centroid()
    const markerPosition = turf.pointOnFeature(feature);
    // Création du marqueur à partir de la long et lat retournées par pointOnFeature()
    const lon = markerPosition.geometry.coordinates[0];
    const lat = markerPosition.geometry.coordinates[1];
    circleWithText([lat,lon], nbSites, 20, 3, 'city').addTo(urbanLayer);
}

function circleWithText(latLng, txt, radius, borderWidth, circleClass) {
    var size = radius * 2;
    var style = 'style="width: ' + size + 'px; height: ' + size + 'px; border-width: ' + borderWidth + 'px;"';
    var iconSize = size + (borderWidth * 2);
    var icon = L.divIcon({
      html: '<span class="' + 'circle ' + circleClass + '" ' + style + '>' + txt + '</span>',
      className: '',
      iconSize: [iconSize, iconSize]
    });
    var marker = L.marker(latLng, {
      icon: icon
    });
    return(marker);
}

function showRegionalLayer() {
    removeDepartementalLayer();
    removeUrbanLayer();
    addRegionalLayer();
}

function showDepartementalLayer() {
    removeRegionalLayer();
    removeUrbanLayer();
    addDepartementalLayer();
}

function showUrbanLayer() {
    removeRegionalLayer();
    removeDepartementalLayer();
    addUrbanLayer();
}

function removeDepartementalAndRegionalLayers() {
    removeDepartementalLayer();
    removeUrbanLayer();
    removeRegionalLayer();
}

function addRegionalLayer() {
    if (!map.hasLayer(regionalLayer) ) {
        console.log("ajout de la couche régionale");
        map.addLayer(regionalLayer);
        // regionalLayer.addTo(map);
    }
}

function removeRegionalLayer() {
    if (map.hasLayer(regionalLayer) ) {
        map.removeLayer(regionalLayer)
    }
}

function addDepartementalLayer() {
    if (!map.hasLayer(departementalLayer) ) {
        map.addLayer(departementalLayer);
        // departementalLayer.addTo(map);
    }
}

function removeDepartementalLayer() {
    if (map.hasLayer(departementalLayer) ) {
        map.removeLayer(departementalLayer);
    }
}

function addRegionalLayer() {
    if (!map.hasLayer(regionalLayer) ) {
        console.log("ajout de la couche régionale");
        map.addLayer(regionalLayer);
        // regionalLayer.addTo(map);
    }
}

function removeRegionalLayer() {
    if (map.hasLayer(regionalLayer) ) {
        map.removeLayer(regionalLayer)
    }
}

function addUrbanLayer() {
    if (!map.hasLayer(urbanLayer) ) {
        console.log("ajout de la couche communale");
        map.addLayer(urbanLayer);
    }
}

function removeUrbanLayer() {
    if (map.hasLayer(urbanLayer) ) {
        map.removeLayer(urbanLayer)
    }
}