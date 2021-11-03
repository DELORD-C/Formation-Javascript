let img = document.getElementById('img');

window.addEventListener('mousedown', (event) => { //fonction anonyme fléchée
    if (img.style.opacity != '0' && event.button == 0) {
        img.style.opacity = 0;
    }
    else if (event.button == 0) {
        img.style.opacity = 1;
    }
});

window.addEventListener('mousedown', function (event) { //fonction anonyme
    if (img.style.opacity != '0' && event.button == 0) {
        img.style.opacity = 0;
    }
    else if (event.button == 0) {
        img.style.opacity = 1;
    }
});

let num = 20;

num += 10;
num = num + 10; //meme chose

// modulo
let modulo = 100 % 97; // = 3 (le reste de la division de 100 par 97);

if (modulo == 3) {
    console.log('trois');
}
else if (modulo == 5) {
    console.log('cinq')
}
else {
    console.log('autre');
}

modulo == 3 ? console.log('trois') : console.log('autre'); // Opérateur ternaire sert à simplifier une condition (TEST ? VALEUR SI VRAI : VALEUR SI FAUX)

function direBonjour () { //Fonction nommée
    console.log('Bonjour');
}

let bonjour = function () { //fonction anonyme
    console.log('Bonjour');
}