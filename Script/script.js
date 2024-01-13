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

function slideMobileMenu(value){
    const menu = document.querySelector('.mobile');
    menu.style.transform = `translateX(${value})`;
}

document.querySelectorAll('.przepis-content').forEach(function(przepisContent) {
    const opis = przepisContent.querySelector('p');
    const oryginalnyTekst = opis.textContent;
    const składniki = opis.getAttribute('data-składniki');

    przepisContent.addEventListener('mouseenter', function() {
        opis.textContent = składniki;
    });

    przepisContent.addEventListener('mouseleave', function() {
        opis.textContent = oryginalnyTekst;
    });
});

const burger = document.querySelector('.burger');
const remove = document.querySelector('.remove');

burger.addEventListener('click', () => slideMobileMenu('0%'));
remove.addEventListener('click', () => slideMobileMenu('100%'));