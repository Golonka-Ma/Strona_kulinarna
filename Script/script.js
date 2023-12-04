$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000, // Czas trwania jednego slajdu w milisekundach (2 sekundy w tym przypadku)
        dots: true, // Pokazuje punkty nawigacyjne
        arrows: false // Ukrywa strzałki nawigacyjne
    });
});

function navigateTo(page) {
    if (page === 'home') {
        window.location.href = 'home_page.html';
    } else if (page === 'recipes') {
        window.location.href = 'recipes.html';
    } else if (page === 'about') {
        window.location.href = 'about.html';
    } else {
        console.log(`Nieznana strona: ${page}`);
    }
}

function navigateToFacebook() {
    window.location.href = 'https://www.facebook.com';
}
function navigateToYT() {
    window.location.href = 'https://www.youtube.com';
}
function navigateToIns() {
    window.location.href = 'https://www.instagram.com';
}
function navigateToPin() {
    window.location.href = 'https://pl.pinterest.com';
}

function toggleMoreInfo() {
    var moreInfo = document.getElementById('more-info');
    var toggleButton = document.getElementById('toggle-button');

    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        toggleButton.innerText = 'Ukryj szczegóły';
    } else {
        moreInfo.style.display = 'none';
        toggleButton.innerText = 'Czytaj więcej';
    }
}
