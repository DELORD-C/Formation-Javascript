let activerProchain = false;
function addClass () {
    let champs = document.getElementsByTagName('input');
    for(let champ of champs) {
        if (champ.className == 'active') {
            champ.className = '';
            activerProchain = true;
        }
        else if (activerProchain) {
            champ.className = 'active';
            activerProchain = false;
        }
    }
}