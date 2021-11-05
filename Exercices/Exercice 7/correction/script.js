let text = document.getElementById('text'),
    boutton = document.getElementById('button');

boutton.addEventListener('click', function () {
    if (confirm('Etes-vous sûre ?')) {
        text.remove();
    }
});