let nom = document.getElementById('Nom'),
    prenom = document.getElementById('Prenom'),
    email = document.getElementById('Email'),
    mdp = document.getElementById('Mdp'),
    tel = document.getElementById('Tel'),
    formulaire = document.getElementById('formulaire');

function verifForm (event) {
    event.preventDefault();
    let erreurs = 0;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email.style.border = '2px solid red';
        erreurs++;
    }
    else {
        email.style.border = '1px solid black';
    }
    if (!/^\S*(?=\S{8,})(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[\d])\S*$/.test(mdp.value)) {
        mdp.style.border = '2px solid red';
        erreurs++;
    }
    else {
        mdp.style.border = '1px solid black';
    }
    if (!/(0|\\+33|0033)[1-9][0-9]{8}/.test(tel.value)) {
        tel.style.border = '2px solid red';
        erreurs++;
    }
    else {
        tel.style.border = '1px solid black';
    }
    if (!/^([A-z]|-| ){2}([A-z]|-| )+$/.test(nom.value)) {
        nom.style.border = '2px solid red';
        erreurs++;
    }
    else {
        nom.style.border = '1px solid black';
    }
    if (!/^([A-z]|-| ){2}([A-z]|-| )+$/.test(prenom.value)) {
        prenom.style.border = '2px solid red';
        erreurs++;
    }
    else {
        tel.style.border = '1px solid black';
    }
    if (erreurs === 0) {
        formulaire.submit();
    }
}