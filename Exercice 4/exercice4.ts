/*
Nous souhaitons écrire une fonction permettant de
calculer la somme des chiffres contenus dans un tableau bi-dimensionnel

Notre première fonction (ci-dessous) ne donne pas le résultat escompté

1. Expliquer pourquoi : elle est déclarer avec var donc les 2 variable d'iteration i est la même
2. Proposer une correction : modifier l'une des variables pour changer son nom

3. Proposer une solution avec uniquement var cf 2.
4. Proposer une solution avec uniquemnet let reprendre le code du début et modifier var par let
*/

function sommeTableau(tableau: number[][]) {
  var somme = 0;
  for (var i = 0; i < tableau.length; i++) {
    var ligne = tableau[i];
    for (var i = 0; i < ligne.length; i++) {
      somme += ligne[i];
    }
  }

  return somme;
}

// le code de test qui révèle le problème
let tab = [[0, 1], [2, 3]];
let total = sommeTableau(tab);
console.log(total); // outputs 1
