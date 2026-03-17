gsap.registerPlugin(DrawSVGPlugin);

gsap.from(".draw", {
  drawSVG: 0,
  duration: 8,
  stagger: 0.2,
  ease: "power2.out",
});
