window.addEventListener('wheel', (event) => {
    console.log(event);
    if (event.deltaY > 0) {
        animationBas();
    }
    else {
        animationHaut();
    }
});


window.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowDown') {
        animationBas();
    }
    else if (event.key == 'ArrowUp') {
        animationHaut();
    }
});


function animationBas () {
    window.scroll(0, 1080);
}

function animationHaut () {
    window.scroll(0, 0);
}