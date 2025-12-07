import Chart, { Legend, plugins } from "chart.js";

document.addEventListener("DOMContentLoaded", () => {
  const barre01 = document.getElementById("barre_div1_01");
  const barre02 = document.getElementById("barre_div1_02");
  const barre03 = document.getElementById("barre_div1_03");
  const barre04 = document.getElementById("barre_div1_04");
  const barre05 = document.getElementById("barre_div1_05");
  const barre06 = document.getElementById("barre_div3_02");
  const barre07 = document.getElementById("barre_div3_03");

  let graphique01 = new Chart(barre01, {
    type: "bar",
    data: {
      labels: ["A", "B", "C", "D", "E", "F", "G", "H"],
      datasets: [
        {
          label: "",
          data: [90, 22, 36, 68, 43, 10, 30, 60],
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
          backgroundColor: ["#E28811", "#2Ac6d0", "#DFA60B", "#5CD3D5"],
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
        const random = Math.round(Math.random() * 200 - 100);
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
          data: [90, 22, 36, 68, 43, 10, 30, 60],
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
          data: [90, 22, 36, 68, 43, 10, 30, 60],
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

  let graphique06 = new Chart(barre06, {
    type: "bubble",
    data: {
      labels: ["Travaux créatifs"],
      datasets: [
        {
          data: [
            { x: 0, y: 54, r: 50 },
            { x: 1, y: 32, r: 32 },
          ],
          backgroundColor: "#E28811",
        },
        {
          data: [
            { x: 0, y: 43, r: 43 },
            { x: 1, y: 62, r: 55 },
          ],
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
    for (let ds of graphique06.data.datasets) {
      for (let i = 0; i < ds.data.length; i++) {
        const random = Math.round(Math.random() * 50 + 10);
        ds.data[i].r = ds.data[i].y = Math.max(0, random);
      }
    }
    graphique06.update();
  }, 1000);

  let graphique07 = new Chart(barre07, {
    type: "doughnut",
    data: {
      labels: ["A", "B", "C", "D"],
      datasets: [
        {
          data: [1, 2, 3, 4],
          backgroundColor: ["#2Ac6d0", "#E28811", "#5CD3D5", "#DFA60B"],
          borderWidth: 0,
          borderRadius: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "0%",
      plugins: {
        title: {
          display: false,
        },
        legend: { display: false },
      },
    },
  });

  setInterval(() => {
    for (let ds of graphique07.data.datasets) {
      for (let i = 0; i < ds.data.length; i++) {
        ds.data[i] = Math.round(Math.random() * 40 + 10);
      }
    }
    graphique07.update();
  }, 300);
});
