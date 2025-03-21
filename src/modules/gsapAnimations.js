export function gsapAnimations() {
 gsap.fromTo("header img", {
        scale: 1,
        y: 0,
    }, {
        scale: 1.05, 
        y: -5, 
        repeat: -1, 
        yoyo: true,
        ease: "power1.inOut", 
        duration: 1.2, 
        delay: 0.5, 
    });

    gsap.utils.toArray('#size-form button').forEach(button => {
        gsap.fromTo(button, {
            scale: 1,
            color: "#fff"
        }, {
            scale: 0.5,
            color: "#000",
            duration: 0.3,
            ease: "power1.out",
            paused: true
        });

        button.addEventListener("mouseenter", () => {
            gsap.to(button, {
                scale: 0.8,
                color: "#000",
                duration: 0.3,
                ease: "power1.out"
            });
        });

        button.addEventListener("mouseleave", () => {
            gsap.to(button, {
                scale: 1,
                color: "#fff",
                duration: 0.3,
                ease: "power1.out"
            });
        });
    });
}
