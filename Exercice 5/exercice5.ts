/*
Considérant l'interface et la classe suivante :
*/
class Personne {
  private nom: string;
  private prenom: string;
}

interface Contact extends Personne {
  telephone: number;
}

/*
Indiquer la hiérachie de type pour chacune des classes suivantes
sous la forme d'un commentaire au dessus de la définition
*/
/* L'étudiant hérite de la classe personne mais n'implémente pas l'interface contact */
class Etudiant extends Personne {}

/* Le professeur implémente l'interface contact qui étant personne*/
class Professeur {
  private nom: string;
  private prenom: string;
  telephone: number;
}

/* La déclaration suivante n'est pas valide.
Expliquez dans un commentaire.
La class n'implemente pas l'attribut telephone de l'interface contact et n'implémente pas les attributs nom et prenom étendu de personne par contact*/
class Stagiaire implements Contact {}
