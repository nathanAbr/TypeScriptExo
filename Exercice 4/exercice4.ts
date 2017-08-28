/*
Nous souhaitons écrire une fonction permettant de
calculer la somme des chiffres contenus dans un tableau bi-dimensionnel

Notre première fonction (ci-dessous) ne donne pas le résultat escompté

1. Expliquer pourquoi
2. Proposer une correction

3. Proposer une solution avec uniquement var
4. Proposer une solution avec uniquemnet let
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
