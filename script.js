
/*toggle icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
};

/*scrool sections avtive link*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        };
    });
     /*sticy navbar*/

     let header = document.querySelector('header');

     header.classList.toggle('sticky', window.scrollY > 100);
 
     /*remove toggle icon and navbar when cklik  navbar link (scroll) */
     menuIcon.classList.remove('bx-x')
     navbar.classList.remove('active')
 
 };
 /*scrool reveal*/
ScrollReveal({
    /*reset: true,*/
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portofolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

window.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("EmailSend")
    const linktarget = "mailto:maylasaputri699@gmail.com?subject={SUBJECT}&body={MESSAGE}";

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const fname = document.getElementById("fullname") // $("#fullname")
        const email = document.getElementById("email")
        const phone = document.getElementById("phone")
        const subject = document.getElementById("subject")
        const textMsg = document.getElementById("messege")

        const MESSAGE = `Name : ${fname.value()}\nEmail : ${email.value()}\nPhone : ${phone.value()}\n\n${textMsg.value()}`

        let finalLink = linktarget.replace(/\{SUBJECT\}/gim, subject.value()).replace(/\{MESSAGE\}/gim, MESSAGE);

        window.location.href = finalLink;
    })
})