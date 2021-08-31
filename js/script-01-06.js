document.addEventListener("DOMContentLoaded", function() {
    chargerDonnees();
});

async function chargerDonnees() {
    // URL de l'API ou fichier local
    let urlData = `data/espaces-naturels-sensibles-44.json`;
    // Charger les données
    let resp = await fetch(urlData);
    // Transférer les données dans une variable
    let datas = await resp.json();

    // console.log(datas);

    for (let data of datas) {
        let d = data.fields;
        console.log(`${d.commune}`);
    }
}