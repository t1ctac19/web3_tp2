import { animate, utils } from "https://esm.sh/animejs";

utils.set(".seconde,.minute", { rotate: "180" });

const snapTo10 = utils.snap(10);
snapTo10(94); // 90
snapTo10(-17); // -20

animate(".seconde", {
  rotate: ["-360", "0"],
  duration: 1000,
  playbackEase: "linear",
  loop: true,
});

animate(".minute", {
  rotate: ["-360", "0"],
  modifier: utils.snap(0.25),
  duration: 3000,
  loop: true,
  ease: "linear",
});

animate(".radar", {
  opacity: 1,
  duration: 1000,
  opacity: 0,
  loop: true,
  ease: "linear",
});
