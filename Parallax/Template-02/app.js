const text = document.querySelector('.title h1');
const firstLayer = document.querySelector('.images img:first-child');
const secondLayer = document.querySelector('.images img:nth-child(2)');
const boxes = document.querySelectorAll('.box');

gsap.to(text, {
   scrollTrigger: {
      scrub: 1,
   },
   y: 300,
   opacity: 0,
})
gsap.to(firstLayer, {
   scrollTrigger: {
      scrub: 1,
   },
   y: -200
})
gsap.to(secondLayer, {
   scrollTrigger: {
      scrub: 1,
   },
   y: 200
})
gsap.from(boxes, {
   scrollTrigger: {
      scrub: 1,
   },
   y: 300,
   stagger: 0.25,
   opacity: 0
})

