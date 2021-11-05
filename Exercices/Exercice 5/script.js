function sapinDeNoel (hauteur) {
    for (let index = 0; index < hauteur; index++) {
        let ligne = '';
        let nbEspaces = hauteur - index;
        let nbZeros = index * 2 + 1;
        for (let i = 0; i < nbEspaces; i++) {
            ligne = ligne + ' ';
        }
        for (let j = 0; j < nbZeros; j++) {
            ligne = ligne + '0';
        }
        console.log(ligne);
    }
}

sapinDeNoel(15); 