import { animate, utils } from "animejs";

const snapTo10 = utils.snap(10);
snapTo10(94); // 90
snapTo10(-17); // -20

animate(".seconde", {
  rotate: ["-360", "0"],
  duration: 1000,
  playbackEase: "linear",
  loop: true,
});

animate(".radar", {
  opacity: 1,
  duration: 1000,
  opacity: 0,
  loop: true,
  ease: "linear",
});

animate(".seconde2", {
  rotate: ["180", "-180"],
  duration: 3000,
  playbackEase: "linear",
  loop: true,
});

animate(".radar2", {
  opacity: 1,
  duration: 3000,
  opacity: 0,
  loop: true,
  ease: "linear",
});
