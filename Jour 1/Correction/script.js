let num = 255;
let txt = '255';
let bin = true;
let fit = 7.23;

num++;
// équivalent à : num = num + 1;

txt = txt + ' est ici une chaîne de caractères';

bin = !bin; //inverser un résultat

num = num + fit;

function isoNum () {
    console.log(42);
}

// isoNum();

function myFct (arg1, arg2) {
    console.log(arg1 + arg2);
}

// myFct(1, 3);

function isTooLong (str) {
    if (str.length > 10) {
        console.log('vrai');
    }
    else {
        console.log('faux');
    }
}

// isTooLong('Bonjour à tous');
// isTooLong('Bonjour');

let tablo = [1, 2, 3];