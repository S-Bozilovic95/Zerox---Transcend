let hamburger = document.querySelector('.icon-hamburger');
let x = document.querySelector('.icon-close');
let dropMenu = document.querySelector('.header__dropdown');
let link = document.querySelectorAll('.header__dropdown__main-list__has-child');
let searchResponsive = document.querySelector('.icon-search');
let responsiveSearchBar = document.querySelector('.header__search-bar');
let dropMenuOverlay = document.querySelector('.header__overlay2');
let searchOverlay = document.querySelector('.header__overlay');

// show dropdown menu
if (hamburger && dropMenu && dropMenuOverlay) {
    hamburger.addEventListener('click', () => {
        dropMenu.classList.add('dropdown-show');
        dropMenuOverlay.classList.add('show-overlay');
    });
}

// hide dropdown menu
if (x && dropMenu && dropMenuOverlay) {
    x.addEventListener('click', () => {
        dropMenu.classList.remove('dropdown-show');
        dropMenuOverlay.classList.remove('show-overlay');
    });
    dropMenuOverlay.addEventListener('click', () => {
        dropMenu.classList.remove('dropdown-show');
        dropMenuOverlay.classList.remove('show-overlay');
    });
}

// set link as active
if (link) {
    link.forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target.classList[0] === ('header__dropdown__main-list__has-child') || e.target.classList[0] === ('header__dropdown__main-list__has-child set-active')) {
                e.target.classList.toggle('set-active');
                e.target.firstChild.nextElementSibling.classList.toggle('chev-rotate');
                e.target.lastChild.previousElementSibling.classList.toggle('under-list-show');
            } else if (e.target.classList[0] === ('header__dropdown__main-list__has-child__label')) {
                e.target.parentElement.classList.toggle('set-active');
                e.target.parentElement.firstChild.nextElementSibling.classList.toggle('chev-rotate');
                e.target.parentElement.lastChild.previousElementSibling.classList.toggle('under-list-show');
            }
        });
    });
}

// show and hide search bar in responsive screen
if (searchResponsive && responsiveSearchBar) {
    searchResponsive.addEventListener('click', () => {
        responsiveSearchBar.classList.add('show-search-bar');
        searchOverlay.classList.add('show-overlay');
    });

    if (searchOverlay) {
        searchOverlay.addEventListener('click', () => {
            responsiveSearchBar.classList.remove('show-search-bar');
            searchOverlay.classList.remove('show-overlay');
        });
    }
}

// nije bilo previse ponavljanja za svaki proces pa ih nisam stavljao u funkcije.
