document.addEventListener("DOMContentLoaded", function() {
    chargerDonnees();
});

async function chargerDonnees() {
    // URL de l'API ou fichier local
    let urlData = `https://data.loire-atlantique.fr/api/records/1.0/search/?dataset=224400028_proprietes-deps-d-espaces-naturels-sensibles-en-loire-atlantique&q=&facet=commune`;
    // Charger les données
    let resp = await fetch(urlData);
    // Transférer les données dans une variable
    let datas = await resp.json();

    // console.log(datas);

    for (let data of datas.records) {
        let d = data.fields;
        console.log(`${d.commune}`);
    }
}