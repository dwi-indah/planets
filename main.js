let hero = document.getElementById("hero");
let parralaxInstance = new Parallax(hero);

// swiper
let keys = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
];

const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    speed: 400,
    spaceBetween: 0,
    centeredSlides: true,
    mousewheel: true,
    pagination: {
        el: ".planets-links",
        clickable: true,
        renderBullet: function (index, className) {
            return `<div class="${className}">${keys[index]}</div>`;
        }
    }
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
toggleActions: "restart pause resume pause",
scroller: ".container"
});

// slide animation
swiper.on("slideChange", function () {
    console.log("SLIDE CHANGED");
    gsap.to(".planets-detail-number", 0.2, {
        x: "100px",
    });
    gsap.to(".planets-detail-name", 0.2, {
        x: "100px"
    });
    gsap.to(".planets-detail-desc p", 0.5, {
        x: "1000px"
    });
    gsap.to(".planets-detail-desc ul", 0.5, {
        x: "1000px"
    });
    gsap.to(".swiper-slide-active", 0.5, {
        scale: 0.85
    });
    gsap.to(".swiper-slide .planets-image img", 1, {
        rotation: 20
    });
});

swiper.on("slideChangeTransitionEnd", function () {
    gsap.to(".swiper-slide .planets-image img", 1, {
        rotation: 10
    });
    gsap.to(".planets-detail-number", 0.2, {
        x: 0,
        delay: 0.1
    });
    gsap.to(".planets-detail-number", 0, {
        x: "-100px"
    });

    gsap.to(".planets-detail-name", 0.2, {
        x: 0,
        delay: 0.1
    });
    gsap.to(".planets-detail-name", 0, {
        x: "-100px"
    });

    gsap.to(".planets-detail-desc p", 0.2, {
        x: 0
    });

    gsap.to(".planets-detail-desc ul", 0.5, {
        x: 0
    });

    gsap.to(".swiper-slide-active", 0.5, {
        scale: 1,
        ease: Power4.easeOut
    });

    gsap.to(".swiper-slide-active .planets-detail-number", 0, {
        autoAlpha: 1
    });
    gsap.to(".swiper-slide-active .planets-detail-name", 0, {
        autoAlpha: 1
    });

});

gsap.to(".swiper-slide", 0, {
    scale: 0.85
});

gsap.to(".swiper-slide-active", 0, {
    scale: 1
});