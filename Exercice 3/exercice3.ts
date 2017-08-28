/*
Partie 1
Créer une classe Personne avec deux attributs : nom et prenom
et une methode permettant à la personne de se présenter au travers d'un
message dans la console.

Vérifier la bonne compilation de vote code, inspecter le code produit et
soumettre le résultat sur votre dépot github
*/

class Personne {
  private nom: string;
  private prenom: string;

  public saluer(): string{
    return `Bonjour, je m'appelle ${this.nom} ${this.prenom}`;
  }
}

/*
Partie 2
Créer une classe étudiant, héritant de la classe personne
Ajout un attribut cursus sur l'étudiant prenant dans un énumération
de votre création.

Vérifier la bonne compilation de vote code, inspecter le code produit et
soumettre le résultat sur votre dépot github

*/
enum Cursus{
  Informatique = "Informatique",
  Langue = "Langue",
  Mathematiques = "Mathematiques"
}

class Etudiant extends Personne{
  private cursus = Cursus.Informatique;
}
