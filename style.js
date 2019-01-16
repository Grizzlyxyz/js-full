let multiplication = (a, b) => {
    let c = a * b;
    return c;
   };// Créer une function qui soustrait le second paramètre au premier paramètre;
   // Une 2ème pour l'addition
   // Une 3ème pour la division
   let addition = (a, b) => {
    let c = a + b;
    return c;
   };let soustraction = (a, b) => {
    let c = a - b;
    return c;
   };let division = (a, b) => {
    let c = a / b;
    return c;
   };// Exo 2
   // Créer une function qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule
   let majFirstString = (a) => {
    let b = a.substr(0, 1).toUpperCase() + a.substr(1);
    return b;
   }// Exo 3
   // Créer une function qui push des éléments dans un tableau du nom de tab01 et affiche le tableau
   let tableauPushInTab = [];
   let pushInTab = (x) => {
    tableauPushInTab.push(x);
    return tableauPushInTab;
   }// Exo 4
   // Créer une function qui retourne une série de nombre à l'envers exemple si j'entre 851 elle me retourne 158
   function reverse(n) {
    n = n.toString();
    return parseInt(n.split("").reverse().join(""));
   }// Exo 5
   // Créer une function ayant 3 paramètre
   // nombre +-*/ nombre
   // Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse
   let calculette = (a, b, c) => {
      let resultat;
      if (b === "+") {
        resultat = a + c;
      } else if (b === "-") {
        resultat = a - b;
      } else if (b === "/") {
        resultat = a / b;}
        else if (b === "*") {
          resultat = a * b
      };
    }    // Exo 6
      // Créer une function retournant si le nombre est premier ou non
      let nbrPremier = (nbr) => {
        if (nbr === 1) {
          return "1 n'est pas un nombre premier";
        } else {
          for (let i = 2; i < nbr; i++) {
            if (nbr % i === 0) {
              return (nbr + " n'est pas un nombre premier");
            }
          }
          return nbr + " est bien un nombre premier";
        }
      }    // Exo 7
      // Créer une function qui retourne une chaine de caractère avec une majuscule à chaque mot.
      let majOne = (str) => {
        let strMaj;
        strMaj = str.split(' ');
        for (let i = 0; i < strMaj.length;i++) {
          strMaj[i] = strMaj[i].substr(0,1).toUpperCase() + strMaj[i].substr(1);      }
        strMaj = strMaj.join(' ');      return strMaj;
      }
