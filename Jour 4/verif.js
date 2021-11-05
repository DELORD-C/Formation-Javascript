//On commence par récupérer tous nos champs et on les stocke dans des variables
let nom = document.getElementById('Nom'),
    prenom = document.getElementById('Prenom'),
    email = document.getElementById('Email'),
    mdp = document.getElementById('Mdp'),
    tel = document.getElementById('Tel'),
    formulaire = document.getElementById('formulaire');

function verifForm (event) { //notre fonction de vérification
    event.preventDefault(); //on empèche le formulaire de s'envoyer et donc de rafraichir / changer de page
    let erreurs = 0; //on créé une variable tampon qui va s'incrémenter à chaque erreur du formulaire
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) { //on test le champ email avec une regex
        email.style.border = '2px solid red'; //si le champ est faux, on ajoute une bordure rouge
        erreurs++; //et on incrémente la variable erreurs
    }
    else {
        email.style.border = '1px solid black'; //sinon, on remet la bordure à son état d'origine
    }
    if (!/^\S*(?=\S{8,})(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[\d])\S*$/.test(mdp.value)) { //on test le champ mot de passe avec une regex
        mdp.style.border = '2px solid red';
        erreurs++;
    }
    else {
        mdp.style.border = '1px solid black';
    }
    if (!/(0|\\+33|0033)[1-9][0-9]{8}/.test(tel.value)) { //on test le champ téléphone avec une regex
        tel.style.border = '2px solid red';
        erreurs++;
    }
    else {
        tel.style.border = '1px solid black';
    }
    if (!/^([A-z]|-| ){2}([A-z]|-| )+$/.test(nom.value)) { //on test le champ nom avec une regex
        nom.style.border = '2px solid red';
        erreurs++;
    }
    else {
        nom.style.border = '1px solid black';
    }
    if (!/^([A-z]|-| ){2}([A-z]|-| )+$/.test(prenom.value)) { //on test le champ prenom avec une regex
        prenom.style.border = '2px solid red';
        erreurs++;
    }
    else {
        tel.style.border = '1px solid black';
    }
    if (erreurs === 0) { //si il n'y a eu aucune erreur :
        formulaire.submit(); //on envoi le formulaire
    }
}