import maplibregl from "maplibre-gl";

const carte = new maplibregl.Map({
  container: "barre_div4_02", // id du div
  style: "https://api.maptiler.com/maps/toner-v2/style.json?key=YbXrGrSkwc1oqteYQjqK",
  center: [-73.8462195, 45.6125882], // Laval
  zoom: 9, // Plus c'est bas, plus c'est haut
});
