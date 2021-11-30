const tl = gsap.timeline({ defaults: { duration: 2, ease: 'none' } })
    .from('.slide-2', { top: '100vh' })
    .from('.slide-3', { left: '-100vw', top: '0vh' })
    .from('.slide-4', { left: '100vw', top: '0vh' })
    .from('.slide-5', { top: '-100vh' })

ScrollTrigger.create({
    animation: tl,
    trigger: '.cont',
    start: 'top top',
    end: '+=5000',
    scrub: true,
    pin: true,
})

console.log('app.js')