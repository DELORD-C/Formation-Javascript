let champ = document.getElementById('text'),
    liste = document.getElementById('liste');

champ.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        let requete = new XMLHttpRequest();
        requete.onreadystatechange = function () {
            if (requete.readyState === 4) {
                let resultats = JSON.parse(requete.responseText);
                resultats = resultats.entries;
                resultats.forEach(resultat => {
                    let newElem = document.createElement('li');
                    newElem.innerHTML = resultat.Link;
                    liste.append(newElem);
                });
            }
        }
        requete.open('GET', 'http://api.publicapis.org/entries?category=' + champ.value);
        requete.send();
    }
});