gsap.registerPlugin(ScrollTrigger);

gsap.to(".X", {
	scrollTrigger: {
	trigger: ".animationTrigger",
	scrub: true,
	start: "top center",
	end: "bottom 200px",
    once: true,
	},
	height: 657,
});
