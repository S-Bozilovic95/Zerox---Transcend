let hamburger = document.querySelector('.iconHamburger');
let x = document.querySelector('.iconClose');
let dropMenu = document.querySelector('.header__dropdown');
let link = document.querySelectorAll('.header__dropdown__mainList__hasChild');
let searchResponsive = document.querySelector('.iconSearch');
let responsiveSearchBar = document.querySelector('.header__searchBar');
let searchOverlay = document.querySelector('.header__overlay');

// show dropdown menu
if (hamburger && dropMenu) {
    hamburger.addEventListener('click', () => {
        dropMenu.classList.add('dropdownShow');
    });
}

// hide dropdown menu
if (x && dropMenu) {
    x.addEventListener('click', () => {
        dropMenu.classList.remove('dropdownShow');
    });
}

// set link as active
if (link) {
    link.forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target.classList[0] === ('header__dropdown__mainList__hasChild') || e.target.classList[0] === ('header__dropdown__mainList__hasChild setActive')) {
                e.target.classList.toggle('setActive');
                e.target.firstChild.nextElementSibling.classList.toggle('chevRotate');
                e.target.lastChild.previousElementSibling.classList.toggle('underListShow');
            } else if (e.target.classList[0] === ('header__dropdown__mainList__hasChild__label')) {
                e.target.parentElement.classList.toggle('setActive');
                e.target.parentElement.firstChild.nextElementSibling.classList.toggle('chevRotate');
                e.target.parentElement.lastChild.previousElementSibling.classList.toggle('underListShow');
            }
        });
    });
}

// show and hide search bar in responsive screen
if (searchResponsive && responsiveSearchBar) {
    searchResponsive.addEventListener('click', () => {
        responsiveSearchBar.classList.add('showSearchBar');
        searchOverlay.classList.add('showOverlay');
    });

    if (searchOverlay) {
        searchOverlay.addEventListener('click', () => {
            responsiveSearchBar.classList.remove('showSearchBar');
            searchOverlay.classList.remove('showOverlay');
        });
    }
}

// nije bilo previse ponavljanja za svaki proces pa ih nisam stavljao u funkcije.
