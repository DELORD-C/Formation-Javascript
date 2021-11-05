let champ = document.getElementById('text'),
    liste = document.getElementById('liste');

champ.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        let requete = new XMLHttpRequest(); //creation de la requète
        requete.onreadystatechange = function () { //ici on affecte une fonction au changement d'état de la requète
            if (requete.readyState === 4) { //on vérifie que la requete est terminée (etat n°4)
                let resultats = JSON.parse(requete.responseText); //on récupère le résultat de la requète
                resultats = resultats.entries;
                resultats.forEach(resultat => { //pour chaque résultat :
                    let newElem = document.createElement('li'); //on créer un élément <li>
                    newElem.innerHTML = resultat.Link; //on place le résultat dans notre élément <li>
                    liste.append(newElem); //on ajoute notre élément <li> à notre <div> liste
                });
            }
        }
        requete.open('GET', 'http://api.publicapis.org/entries?category=' + champ.value); //définition de l'url cible
        requete.send(); //Lancement de la requète
    }
});