// VARIABLES
let voiture1 = 'mercedes'; // let permet de céclarer une variable qui sera disponible uniquement dans le bloc dans lequel elle a été déclarée
var voiture2 = 'ferrari'; // Au contraire, var permet de déclarer une variable de façon globale, accessible depuis partout
modele1 = 2.34; // Par défaut si on ne précise pas de préfixe, la définiction de la variable sera équvalente à celle de let
let modele2 = 2.35;
const phrase = 'CONSTANT'; // const permet de définir une variable accessible uniquement dans le bloc (comme let) mais qu'on ne pourra pas modifier par la suite

modele1 = modele1 - 1; // Il ne faut plus préciser let, var, ou const lorsque l'on veut accéder/modifier le contenu d'une variable

// console.log(voitures); // console.log permet d'afficher les informations de notre choix dans la console, par exemple le contenu d'une varibale

// résultat :  mercedes 2.34, ferrari 2.35

// CONDITIONS
// Opérateurs :    ==   ===   !=   !==   <   >   <=   >=
let A = 1;
let B = '1';

if (A == B) //VRAI
if (A === B) //FAUX

// if (voiture1 === voiture2 || (modele1 < modele2 && modele1 >= 2)) {  // SI (condition) { ALORS }
//     console.log(voiture1 + ' ' + modele1);
// }
// else if (voiture1 !== voiture2) {   // SINON SI (condition) { ALORS }
//     console.log(voiture1);
// }
// else {     // SINON { ALORS }
//     console/log('faux');
// }


// switch (modele1) {  // Le switch permet d'effectuer des actions en fonction de la valeur d'une variable
//     case 2:
//         console.log('deux');
//         break;

//     case 3:
//         console.log('trois');
//         break;

//     default:
//         console.log('inconnu');
//         break;
// }




// if (modele1 === 2) {
//     console.log('deux');
// }
// else if (modele1 === 3) {
//     console.log('trois');
// }
// else {
//     console.log('inconnu');
// }




let voitures = ['mercedes', 'ferrari', 'renault', 'peugeot', 'toyota'];
// 0:mercedes
// 1:ferrari
// 2:renault
// 3:peugeot
// 4:toyota

// voitures.forEach(voiture => {
//     console.log("<li>" + voiture + "</li>");
// });


// for (let numerovoiture = 0; numerovoiture < voitures.length; numerovoiture++) {
//     console.log("début du for");
//     console.log(voitures[numerovoiture]);
//     console.log("fin du for");
// }


// function direBonjour(prenom, nom, age = 20) {
    console.log('Bonjour ' + prenom + ' ' + nom + ' ' + age + ' ans.');  
// }

// function direAuRevoir() {
//     console.log('Au revoir.');
// }

// direBonjour('Etienne', 'ROCHE', 18);
// direBonjour('Etienne', 'ROCHE');
// direBonjour('Jeremy', 'DEPLACE', 24);




// function chaineDeCharactere (longueur) {
//     let result = '';
//     for (let index = 0; index < longueur; index++) {
//         result = result + '8';
//     }
//     console.log(result);
// }

// chaineDeCharactere(10); // 8888888888





// function sapinDeNoel (hauteur) {
//     let longueur = hauteur * 2 - 1
//     for (let index = 0; index < hauteur; index++) {
//         let ligne = '';
//         let nbEspaces = hauteur - index;
//         let nbZeros = index * 2 + 1;
//         for (let i = 0; i < nbEspaces; i++) {
//             ligne = ligne + ' ';
//         }
//         for (let j = 0; j < nbZeros; j++) {
//             ligne = ligne + '0';
//         }
//         console.log(ligne);
//     }
// }

// sapinDeNoel(15); 

//     0
//    000
//   00000
//  0000000
// 000000000