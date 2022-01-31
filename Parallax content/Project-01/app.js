const tl = gsap.timeline({
   scrollTrigger: {
      trigger: ".img-wrapper",
      scrub: 1,
      markers: true,
      id: "parallax-img"
   }
});
tl
   .to('.img-thumb', {
      y: -180,
      ease: "power1.inOut"
   })


// gsap.to('figure img', {
//    scrollTrigger: {
//       trigger: '.img-wrapper',
//       start: 'top',
//       markers: true,
//       scrub: 1,
//    },
//    y: -150
// })