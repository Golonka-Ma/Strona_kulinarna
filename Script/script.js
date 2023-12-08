$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 6000,
        dots: true,
        arrows: false 
    });
});

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
