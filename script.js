// Header Toggle----------------------------------//

let menubtn = document.getElementById('menubtn');

menubtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typing effect------------------------------------------------->

let typed = new Typing('.auto-input', {
    String: ['Font-End Developer!', 'UI Designer!', 'UX Designer'],
    typespeed: 100,
    backspeed: 100,
    backDelay: 2000,
    loop: true,
})


// ---Active Link State Scroll--------------------//

// ----Get All Links--------------------------------//

// let navLinks = document.querySelector('nav ul li a')

// let sections = document.querySelector('section')
// window.addEventListener('scrool', function () {
//     let scrollPos = window.scrollY
//     sections.forEach(section => {
//         if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//                 if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
//                     link.classList.add('active')
//                 }
//             });
//         }
//     });
// });