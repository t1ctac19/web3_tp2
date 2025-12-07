import Zdog from "zzz";

const toile = new Zdog.Illustration({
  element: ".zdog-canvas",
  resize: true,
});

const circ = new Zdog.Hemisphere({
  addTo: toile,
  diameter: 200,
  color: "#ffa500",
  backface: "#5cd3d5",
});

function animate() {
  toile.rotate.y += 0.05;
  toile.rotate.x += 0.06;

  toile.updateRenderGraph();
  requestAnimationFrame(animate);
}
animate();

const toile2 = new Zdog.Illustration({
  element: "#barre_div2_02",
  resize: true,
  dragRotate: true,
});

new Zdog.Ellipse({
  addTo: toile2,
  diameter: 100,
  stroke: 20,
  color: "#5cd3d5",
});

function animation() {
  toile2.rotate.y += 0.03;
  toile2.rotate.x += 0.01;
  toile2.updateRenderGraph();
  requestAnimationFrame(animation);
}
animation();
