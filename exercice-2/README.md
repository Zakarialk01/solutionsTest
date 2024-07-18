# Exercice 2

## Contexte

Lors d'un audit énergétique pour réduire la consommation d'énergie du logement, il faut d'abord en connaître les déperditions totales puis on pourra décider des parois à isoler en fonction des réductions possibles sur chacune d'entre elles.

Les déperditions totales du logement (GV) se calculent en additionnant les déperditions de chaque paroi avec la formule suivante :

$$ GV = \sum_i Si * Ui $$

Les paramètres présentés sont les suivants :
- S est la surface de la paroi en m²
- U est la conductivité thermique de la paroi en W/m²K. Les valeurs de U sont renseignées en [annexe](#annexes).
- GV est la somme des déperditions de la maison en W/K

Les différentes parois du logement concernées sont :
- Les murs
- Les fenêtres
- Le plafond
- Le plancher

## Consignes

**L'objectif est de déterminer la paroi (mur, fenêtre, plafond ou plancher) la plus importante à isoler pour réduire les déperditions de l'ensemble des logements.**

Quand on isole la paroi en question, les valeurs de U deviennent les suivantes (correspondant au U après 2012) :
- Pour un mur : U = 0,23
- Pour un plancher : U = 0,23
- Pour un plafond : U = 0,14
- Pour une fenêtre : U = 1

L'exercice se fait en deux étapes :
1. Calculer les déperditions de chaque logement
2. Tester les différentes parois à isoler pour déterminer la plus performante

Résultat obtenu (à remplir) :

## Hypothèses

- La forme au sol de la maison est carrée
- Il ne faut prendre en compte que les murs déperditifs pour le calcul des déperditions et ignorer les autres
- Les fenêtres se situent uniquement sur les murs déperditifs et sont équitablement réparties
- Les fenêtres mesurent 1,3m de largeur et 1m de hauteur
- La hauteur sous plafond est de 2,5m
- Il n'y a qu'un seul étage (juste un rez-de-chaussée)
- Le plafond et la toiture sont plats

## Explication des données

Les fichiers `data.csv` et `data.json` contiennent les **mêmes** données des caractéristiques des logements audités.
Tu es libre d'utiliser le format qui te convient le mieux.

## Annexes

### Mur

Année du logement | Valeur de U
--- | ---
Avant 1974 | 2,5
Entre 1975 et 1988 | 0,8
Entre 1989 et 2012 | 0,4
Après 2013 | 0,23

### Plafond

Année du logement | Valeur de U
--- | ---
Avant 1974 | 2,5
Entre 1975 et 1988 | 0,4
Entre 1989 et 2012 | 0,2
Après 2013 | 0,14

### Plancher

Année du logement | Valeur de U
--- | ---
Avant 1974 | 2
Entre 1975 et 1988 | 0,8
Entre 1989 et 2012 | 0,4
Après 2013 | 0,23

### Fenêtres

Année du logement | Valeur de U
--- | ---
Avant 1974 | 5,3
Entre 1975 et 1988 | 3,3
Entre 1989 et 2012 | 2
Après 2013 | 1

