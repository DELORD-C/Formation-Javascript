// let test = document.getElementById('test');  //ciblage par ID
// let test2 = document.querySelector('div'); // ciblage par dénomination css (id = #, classe = . etc...) récupération du premier resultat
// let test3 = document.querySelectorAll('div');// ciblage par dénomination css (id = #, classe = . etc...) récupération de tous les résultats

// window.addEventListener('keydown', (event) => { // "écouter" un evènnement
//     if (event.key === 'Enter') {
//         let paragraphe = document.createElement('p');
//         paragraphe.innerHTML = 'Test';
//         document.body.append(paragraphe);
//     }
// });

// EVENEMENTS : souris, clavier, smartphone,
// chargement de la page, changement de taille de la fenetre etc...


// let paragraphe = document.getElementById('paragraphe');
// let button = document.getElementById('button');

// button.addEventListener('mousedown', () => {
//     paragraphe.style.color = 'red';
// });

function changeColor (color) {
    if (confirm("Attention !")) {
        document.getElementById('paragraphe').style.color = color;
    }
}

// let paragraphe = document.getElementById('paragraphe');
// let boutton = document.getElementById('boutton');

// boutton.addEventListener('click', () => {
//     if (confirm('Voulez-vous vraiment supprimer l\'élément ?')) {
//         paragraphe.remove();
//     }
// })