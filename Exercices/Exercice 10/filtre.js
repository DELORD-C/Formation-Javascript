let search = document.getElementById('search');

// Version Image
search.addEventListener('keydown', function(event) { //Event listener : On appelle cette fonction à chaque
                                                     //fois qu'une touche est pressée dans le champs input 'search'
    if (event.key === 'Enter') { //Ici on verifie que la touche appuyée 
        let keyword = search.value; //On récupère la valeur du champs search
        let imagesListe = document.getElementsByTagName('img'); //On récupère la liste des images
        if (keyword == '') { //On vérifie que le champs search n'est pas vide
            for (let image of imagesListe) { //Créer notre boucle sur chaque image (pour chaque image = for each img)
                image.style.display = 'block'; //On affiche l'image
            } //On affiche toutes les images
        } // Fin de notre condition
        else { // Si le champs search n'est pas vide
            for (let image of imagesListe) { //Créer notre boucle pour chaque image
                if (image.getAttribute("alt") === keyword) { // Si attribut alt de l'image et la valeur du champs search sont les mêmes
                    image.style.display = 'block'; //Alors on affiche l'image
                }
                else {// Sinon
                    image.style.display = 'none'; // On cache l'image
                }
            }         
        }
    }
});