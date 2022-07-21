const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', ()=>{
        //Toggle now
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;            
            }
        });

        //Burger animation
        burger.classList.toggle('toggle')
    })
}

document.onclick = function (e) {
    if (document.querySelector('.nav-links').classList.contains('nav-active') && e.target.id!='nav-links' && !e.target.classList.contains('btn-burger')){
        document.querySelector('.burger').click()
    }
};

navSlide();

const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to(".text", {y: '0%', duration: 1, stagger: 0.25});
tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5});
tl.to(".intro", {y: "-100%", duration: 1}, "-=1.1");

tl.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo(".main-heading", {opacity: 0}, {opacity: 1, duration: 1}, "-=1.1");
tl.fromTo(".btn", {opacity: 0}, {opacity: 1, duration: 1}, "-=1.1");

// Nav behavior

const nav = document.querySelector("nav");
const sectionOne = document.querySelector("#home");

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);