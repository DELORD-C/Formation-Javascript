let barreDeRecherche = document.getElementById('search');

barreDeRecherche.addEventListener('keydown', function(event){
    if (event.key == 'Enter') {
        let valeurRecherche = barreDeRecherche.value;
        let listeImage = document.getElementsByTagName('img');
        for (let image of listeImage) { //Pour chaque image de listeImage
            let altImage = image.getAttribute('alt');
            if (valeurRecherche == altImage) {
                image.style.display = 'block';
            }
            else {
                image.style.display = 'none';
            }
        }
    }
});