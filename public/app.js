const nav = document.querySelector('#nav');
const firstLine = document.querySelector('#first-line');
const secondLine = document.querySelector('#second-line');
const thirdLine = document.querySelector('#third-line');
const button = document.querySelector('#button');
const image = document.querySelector('#image');
const start = document.querySelector('#start');
const load = document.querySelector('#load');

let tl = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}});
tl.from(load,{
    duration: 2,
    delay: 0.5,
    opacity: 1,
    y: '0%',
    stagger: 0.2
});

tl.from(image, {
    duration: 2,
    delay: 0.5,
    opacity: 0,
    scale: 5
});

tl.from(nav, {
    duration: 2,
    delay: 0.2,
    opacity: 0,
    y: "20%"
});

tl.to(firstLine, {y:'0%', duration: 0.5, stagger: 0.1});
tl.to(secondLine, {y:'0%', duration: 0.5, delay: 0.2});
tl.to(thirdLine, {y:'0%', duration: 0.5, delay: 0.4});

tl.from(button, {
    duration: 1,
    delay: 0.3,
    opacity: 0,
    y: "20%"
});

