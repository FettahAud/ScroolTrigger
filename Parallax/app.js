window.addEventListener('load', () => {
    gsap.utils.toArray('section').forEach((section, i) => {
        section.bg = section.querySelector('.bg');
        section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`

        section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;
        gsap.to(section.bg, {
            backgroundPosition: `50% ${innerHeight / 2}px`,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                scrub: true,
            }
        })
    });
})