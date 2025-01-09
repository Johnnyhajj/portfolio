// toggle icon navbar action
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}





// Scroll section active links

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top >= offset && top < offset + height){
navLinks.forEach(links => {
    links.classList.remove('active');
    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
});
    }
});

let header = document.querySelector('header');

header.classList.toggle('sticky' , window.scrollY > 100);


menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};



// multiple text script code

const typed = new Typed('.multiple-text' ,{
    strings: ['Frontend Developer', 'Graphic Designer', 'UI UX Designer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

/**
         * Redirects to gallery.html with the selected group in the query parameter.
         * @param {string} group - The group identifier (e.g., 'group1').
         */
function navigateToGallery(group) {
    window.location.href = `gallery.html?group=${group}`;
}
