/*
Nous souhaitons écrire une fonction permettant de
calculer la somme des chiffres contenus dans un tableau bi-dimensionnel

Notre première fonction (ci-dessous) ne donne pas le résultat escompté

1. Expliquer pourquoi : les boucles portent le même indice pour l'itération
2. Proposer une correction : remplacer l'un des "i" par "j"

3. Proposer une solution avec uniquement var
4. Proposer une solution avec uniquemnet let
*/

/* 3.
function sommeTableau(tableau) {
    var somme = 0;
    for (var j = 0; j < tableau.length; j++) {
        var ligne = tableau[j];
        for (var i = 0; i < ligne.length; i++) {
            somme += ligne[i];
        }
    }
    return somme;
}
*/

/* 4.
function sommeTableau(tableau) {
    let somme = 0;
    for (let j = 0; j < tableau.length; j++) {
        let ligne = tableau[j];
        for (let i = 0; i < ligne.length; i++) {
            somme += ligne[i];
        }
    }
    return somme;
}
*/

function sommeTableau(tableau) {
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
var tab = [[0, 1], [2, 3]];
var total = sommeTableau(tab);
console.log(total); // outputs 1
