# Exercice 3

## Contexte

Certaines régions de France sont plus touchées que d'autres par la présence de passoires thermiques donc il est intéressant pour Ithaque de savoir où on retrouve le plus grand nombre de ces logements à rénover.

## Consignes

**L'objectif est de créer une page web qui en demandant une latitude et une longitude va afficher une liste des DPE récents autour de cette position.**

Afin d'obtenir le DPE autour d'une position géographique, il faudra utiliser l'API présente ici : https://data.ademe.fr/datasets/dpe-france

Tu peux trouver ci-dessous un exemple de requête CURL de cette API pour la longitude 2.29°E et la latitude 48.85°N

``` bash
curl https://data.ademe.fr/data-fair/api/v1/datasets/dpe-france/lines?geo_distance=2.29%3A48.85%3A10000
```

La qualité du design réalisé sera importante.

le lien de l'exercice : https://dpefrance.netlify.app