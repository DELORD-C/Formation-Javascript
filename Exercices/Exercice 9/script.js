let rouge = document.getElementsByClassName('rouge')[0],
    bleue = document.getElementsByClassName('bleue')[0],
    verte = document.getElementsByClassName('verte')[0],
    violette = document.getElementsByClassName('violette')[0],
    orange = document.getElementsByClassName('orange')[0];

rouge.addEventListener('mouseenter', function() {
    rouge.style.opacity = 0;
});

rouge.addEventListener('mouseleave', function() {
    rouge.style.opacity = 1;
});

bleue.addEventListener('mouseenter', function() {
    bleue.style.width = '0px';
});

bleue.addEventListener('mouseleave', function() {
    bleue.style.width = '50px';
});

verte.addEventListener('mouseenter', function() {
    verte.style.marginLeft = '150px';
});

verte.addEventListener('mouseleave', function() {
    verte.style.marginLeft = '5px';
});

violette.addEventListener('mouseenter', function() {
    violette.style.transform = 'rotate(90deg)';
});

violette.addEventListener('mouseleave', function() {
    violette.style.transform = 'rotate(0deg)';
});

orange.addEventListener('mouseenter', function() {
    orange.style.filter = 'grayscale(1)';
});

orange.addEventListener('mouseleave', function() {
    orange.style.filter = 'grayscale(0)';
});