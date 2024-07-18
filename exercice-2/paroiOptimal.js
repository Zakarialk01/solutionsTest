const fs = require('fs');
const data = require('./data.json');

function calculDeperditionsTotales(logement) {
    let deperditions = 0;
    //calcul pour les murs
    logement.murs.forEach(mur => {
        deperditions += mur.surface * mur.U;
    });
    //calcul pour les fenetres
    logement.fenetres.forEach(fenetre => {
        deperditions += fenetre.nombre * (1.3 * 1) * fenetre.U; 
    });

    // Calcul pour plafond
    deperditions += logement.plafond.surface * logement.plafond.U;

    // Calcul pour plancher
    deperditions += logement.plancher.surface * logement.plancher.U;

    return deperditions;
}

function getParoiImportante(data) {
    let paroiImportante = '';
    let maxDeperditions = 0;

    data.forEach(logement => {
        const deperditions = calculDeperditionsTotales(logement);

        if (deperditions > maxDeperditions) {
            maxDeperditions = deperditions;
            paroiImportante = logement.paroi;
        }
    });

    return paroiImportante;
}

const logements = data; 
const paroiOptimale = getParoiImportante(logements);
console.log(`La paroi la plus importante à isoler est : ${paroiOptimale}`);
