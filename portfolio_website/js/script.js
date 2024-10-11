// GSAP Animations
document.addEventListener('DOMContentLoaded', function() {
    gsap.from("h1", { duration: 1.5, y: -50, opacity: 0, ease: "bounce" });
    gsap.from("p", { duration: 2, y: 100, opacity: 0, ease: "power2.out" });
    gsap.from(".project-card", {
        duration: 1.5,
        scale: 0.5,
        opacity: 0,
        stagger: 0.3, // Stagger animations for project cards
        ease: "elastic.out(1, 0.3)"
    });
});
