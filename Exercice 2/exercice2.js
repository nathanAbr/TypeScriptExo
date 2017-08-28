/*
Dans ce fichier, écrire un nombre arbitraire de fonctions.
Ces fonctions doivent faire appel à chacun des types basiques
de Typescript.
Bien entendu, chaque fonction ne doit pas faire à tous les types,
mais tous les types doivent être présent au moins une fois dans vos fonctions

Vérifier la bonne compilation de vote code, inspecter le code produit et
soumettre le résultat sur votre dépot github
*/
function exoString(nom) {
    return nom;
}
function addition(number1, number2) {
    var result;
    result = number1 + number2;
    return result;
}
function saluer(salut) {
    if (salut) {
        return "coucou";
    }
    else {
        return null;
    }
}
function returnList(listOrNot) {
    if (listOrNot) {
        var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        return list;
    }
    else {
        var list = [1, "1", 2, 2, "trol"];
        return list;
    }
}
function monNever() {
    while (true) {
    }
}
function maCouleur() {
    return Couleur.Bleu;
}
var Couleur;
(function (Couleur) {
    Couleur["Rouge"] = "rouge";
    Couleur["Vert"] = "vert";
    Couleur["Bleu"] = "bleu";
})(Couleur || (Couleur = {}));
function notDefined() {
    var nom;
    return undefined;
}
