const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.44}s`;
            }

        });
        //Burger animation//
        burger.classList.toggle('toggle');

    });
}



const goTopBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight)

function checkHeight() {
    if (window.scrollY > 200) {
        goTopBtn.style.display = "flex"
    } else {
        goTopBtn.style.display = "none"
    }
}
goTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"

    })
})
navSlide();

function copyText() {

    /* Copy text into clipboard */
    navigator.clipboard.writeText("0782042828 ");
    alert("Numero copier ");
}

function emailcopy() {
    navigator.clipboard.writeText("mariusanefs@yahoo.com ");
    alert("addresse email copier ");
}