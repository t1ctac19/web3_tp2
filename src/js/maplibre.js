import maplibregl from "maplibre-gl";

const carte = new maplibregl.Map({
  container: "carte",
  style: "https://api.maptiler.com/maps/019adc69-43b9-7d2f-a9bc-7aae6e41ac7e/style.json?key=aMep3UNgzwfT00PlHEEg",
  center: [-73.94349, 40.81455],
  zoom: 17,
  attributionControl: false,
  dragRotate: false,
});

carte.on("style.load", () => {
  const layers = carte.getStyle().layers;
  let labelLayerId = null;
  for (const layer of layers) {
    if (layer.type === "symbol" && layer.layout && layer.layout["text-field"]) {
      labelLayerId = layer.id;
      break;
    }
  }

  carte.addSource("openfreemap", {
    url: "https://tiles.openfreemap.org/planet",
    type: "vector",
  });

  carte.addLayer(
    {
      id: "3d-buildings",
      source: "openfreemap",
      "source-layer": "building",
      type: "fill-extrusion",
      minzoom: 11,
      paint: {
        "fill-extrusion-color": "#5cd3d5",
        "fill-extrusion-height": ["interpolate", ["linear"], ["zoom"], 15, 0, 16, ["get", "render_height"]],
        "fill-extrusion-opacity": 1,
      },
    },
    labelLayerId || undefined
  );
});
