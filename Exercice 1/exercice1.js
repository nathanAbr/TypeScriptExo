/*
Ce fichier est un fichier javascript standard

Partie 1 : compilation

1. renommez-le en exercice1.ts
2. compilez-le avec la commande >tsc exercice1.ts
3. observez le code javascript généré par transpilage

Partie 2 : typage
1. ajouter un typage par hinting sur l'argument de la fonction saluer
    le hinting d'argument s'écrit de la sorte :
      arg: type
2. compiler
3. observer le code compilé

4. ajouter un typage pour la valeur de retour de la fonction chaineCoucou
    le hinting de valeur de retour s'écrit de la sorte :
      function(...): type {}
2. compiler
3. observer le code compilé

*/
function saluer(nom) {
    console.log('coucou ' + nom);
}
function chaineCoucou() {
    return 'coucou';
}
