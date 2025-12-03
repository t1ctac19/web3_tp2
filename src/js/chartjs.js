import Chart, { Legend, plugins } from "chart.js";

document.addEventListener("DOMContentLoaded", () => {
  const barre01 = document.getElementById("barre_div1_01");
  const barre02 = document.getElementById("barre_div1_02");
  const barre03 = document.getElementById("barre_div1_03");
  const barre04 = document.getElementById("barre_div1_04");
  const barre05 = document.getElementById("barre_div1_05");

  let graphique01 = new Chart(barre01, {
    type: "bar",
    data: {
      labels: ["A", "B", "C", "D", "E", "F", "G", "H"],
      datasets: [
        {
          label: "",
          data: [90, 225, 365, 685, 4335, 10760, 30685, 60265],
          borderWidth: 2,
          borderColor: "#E28811",
          backgroundColor: "#5CD3D5",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y",

      plugins: {
        title: { display: false },
        legend: { display: false },
      },

      scales: {
        x: {
          display: false,
          grid: { display: false },
        },
        y: {
          display: false,
          grid: { display: false },
        },
      },
    },
  });

  setInterval(() => {
    for (let ds of graphique01.data.datasets) {
      for (let i = 0; i < ds.data.length; i++) {
        ds.data[i] = Math.round(Math.random() * 80 + 20);
      }
    }
    graphique01.update();
  }, 500);

  let graphique02 = new Chart(barre02, {
    type: "doughnut",
    data: {
      labels: ["A", "B", "C", "D"],
      datasets: [
        {
          data: [1, 2, 3, 4],
          backgroundColor: ["#E28811", "#213CD5", "#DFA60B", "#5CD3D5"],
          hoverOffset: 20,
          borderWidth: 0,
          borderRadius: 1,
          spacing: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "80%",
      plugins: {
        title: {
          display: false,
        },
        legend: { display: false },
      },
    },
  });

  setInterval(() => {
    for (let ds of graphique02.data.datasets) {
      for (let i = 0; i < ds.data.length; i++) {
        ds.data[i] = Math.round(Math.random() * 20);
      }
    }
    graphique02.update();
  }, 500);

  let graphique03 = new Chart(barre03, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "données",
          data: [
            { x: 10, y: 50 },
            { x: 20, y: 30 },
            { x: 30, y: 70 },
            { x: 40, y: 20 },
            { x: 50, y: 20 },
            { x: 60, y: 20 },
            { x: 70, y: 20 },
            { x: 80, y: 20 },
            { x: 90, y: 20 },
          ],
          backgroundColor: "#5CD3D5",
          borderColor: "#E28811",
          borderWidth: 2,
          pointRadius: 6,
        },
      ],
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        title: { display: false },
        legend: { display: false },
      },

      scales: {
        x: {
          type: "linear",
          beginAtZero: true,
          grid: { display: false },
          border: { display: false },
          ticks: { display: false },
        },

        y: {
          type: "linear",
          beginAtZero: true,
          grid: { display: false },
          border: { display: false },
          ticks: { display: false },
        },
      },
    },
  });

  setInterval(() => {
    for (let ds of graphique03.data.datasets) {
      for (let i = 0; i < ds.data.length; i++) {
        const currentY = parseFloat(ds.data[i].y);
        const random = Math.round(Math.random() * 20000 - 10000);
        ds.data[i].y = Math.max(0, currentY + random);
      }
    }
    graphique03.update();
  }, 300);

  let graphique04 = new Chart(barre04, {
    type: "line",
    data: {
      labels: ["A", "B", "C", "D", "E", "F", "G", "H"],
      datasets: [
        {
          data: [90, 225, 365, 685, 4335, 10760, 30685, 60265],
          borderWidth: 2,
          borderColor: "#E28811",
          backgroundColor: "#5CD3D5",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        title: { display: false },
        legend: { display: false },
      },

      scales: {
        x: {
          display: false,
          grid: { display: false },
        },
        y: {
          display: false,
          grid: { display: false },
        },
      },
    },
  });

  setInterval(() => {
    for (let ds of graphique04.data.datasets) {
      for (let i = 0; i < ds.data.length; i++) {
        ds.data[i] = Math.round(Math.random() * 30 + 10);
      }
    }
    graphique04.update();
  }, 1000);

  let graphique05 = new Chart(barre05, {
    type: "bar",
    data: {
      labels: ["A", "B", "C", "D", "E", "F", "G", "H"],
      datasets: [
        {
          data: [90, 225, 365, 685, 4335, 10760, 30685, 60265],
          borderWidth: 2,
          borderColor: "#E28811",
          backgroundColor: "#5CD3D5",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        title: { display: false },
        legend: { display: false },
      },

      scales: {
        x: {
          display: false,
          grid: { display: false },
        },
        y: {
          display: false,
          grid: { display: false },
        },
      },
    },
  });

  setInterval(() => {
    for (let ds of graphique05.data.datasets) {
      for (let i = 0; i < ds.data.length; i++) {
        ds.data[i] = Math.round(Math.random() * 80 + 20);
      }
    }
    graphique05.update();
  }, 300);
});
