/*
Dans ce fichier, écrire un nombre arbitraire de fonctions.
Ces fonctions doivent faire appel à chacun des types basiques
de Typescript.
Bien entendu, chaque fonction ne doit pas faire à tous les types,
mais tous les types doivent être présent au moins une fois dans vos fonctions

Vérifier la bonne compilation de vote code, inspecter le code produit et
soumettre le résultat sur votre dépot github
*/

function exoString(nom: string) : string{
  return nom;
}

function addition(number1: number, number2: number) : number{
  let result: number;
  result = number1 + number2;
  return result;
}

function saluer(salut: boolean) : string{
  if(salut){
    return "coucou";
  }
  else{
    return null;
  }
}

function returnList(listOrNot: boolean): any{
  if(listOrNot){
    let list: number[] = [1,2,3,4,5,6,7,8,9,0];
    return list;
  }
  else{
    let list: [number, string] = [1, "1", 2, 2, "trol"];
    return list
  }
}

function monNever(): never{
  while(true){

  }
}

function maCouleur(): Couleur{
  return Couleur.Bleu;
}

enum Couleur{
  Rouge,
  Vert,
  Bleu
}

function notDefined(): undefined{
  let nom: undefined;
  return nom;
}
