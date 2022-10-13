/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
// const skillsContent = document.getElementById('skills_content'),
//       skillHeader = document.getElementById('skills_header')

// function toggleSkills(){
//     let itemClass = this.parentNode.getElementByClassName

//     for(i=0;i<skillsContent.length;i++){
//         skillsContent[i].className = 'skills_content skills_close'
//     }
//     if (itemClass === 'skills_content skills_close') {
//         this.parentNode.className = 'skills_content skills_open'
//     }
// }
// skillHeader.forEach((pp)=>{
//     pp.addEventListener('click', toggleSkills)
// })

/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services_modal');
const modalBtn = document.querySelectorAll('.services_button');
const modalClose = document.querySelectorAll('.services_modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtn.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})
modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalViews) => {
            modalViews.classList.remove('active-modal')
        })
    })
})


/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".swiper-container", {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
});
/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 