let liste = document.getElementById('liste');

function apiCall () {
    let requete = new XMLHttpRequest();
    requete.onreadystatechange = function () {
        if (requete.readyState === 4) {
            let resultats = JSON.parse(requete.responseText);
            console.log(resultats);
            resultats.forEach(resultat => {
                let newElem = document.createElement('p');
                newElem.innerHTML = resultat;
                liste.append(newElem);
            });
        }
    }
    requete.open('GET', 'http://api.publicapis.org/categories');
    requete.send();
}