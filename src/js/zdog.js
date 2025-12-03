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
