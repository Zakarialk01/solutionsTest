const fs = require('fs');
const auditsData = require('./data.json'); 


function EnergyEconomies(audits) {
    const weeksWork = 4;
    const daysPerWeek = 5;
    const maxDays = weeksWork * daysPerWeek;
//audits dont la durée est inférieure ou égale à maxDays / daysPerWeek
    const validAudits = audits.filter(audit => audit.temps_audit <= maxDays / daysPerWeek);

    // Accumuler les économies d'énergie pour les audits filtrés
    const maxEconomies = validAudits.reduce((totalEconomies, currAudit) => {
        return totalEconomies + currAudit.economies_energie;
    }, 0);

    return maxEconomies;
}
const maxEconomies = EnergyEconomies(auditsData);
console.log("Le Total des économies d'énergie réalisable en 4 semaines par auditeur : ", maxEconomies);
// 8883