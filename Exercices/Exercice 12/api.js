let champ = document.getElementById('btn'),
    liste = ?;

function apiCall () {
    if (event.key === 'Enter') {
        let requete = new XMLHttpRequest();
        requete.onreadystatechange = function () {
            if (requete.readyState === 4) {
                let resultats = JSON.parse(requete.responseText);
                resultats = resultats.entries;
                resultats.forEach(resultat => {
                    let newElem = document.createElement('p');
                    newElem.innerHTML = resultat.Link;
                    liste.append(newElem);
                });
            }
        }
        requete.open('GET', '?' + champ.value);
        requete.send();
    }
}