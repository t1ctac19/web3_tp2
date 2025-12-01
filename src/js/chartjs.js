import Chart, { Legend, plugins } from "chart.js";

document.addEventListener("DOMContentLoaded", () => {

    const barre01 =document.getElementById('barre_div1_01');
    const barre02 =document.getElementById('barre_div1_02');
    const barre03 =document.getElementById('barre_div1_03');
    const barre04 =document.getElementById('barre_div1_04');
    const barre05 =document.getElementById('barre_div1_05');
  

    let graphique01 = new Chart(barre01, {
        type: 'bar',
        data: {
          labels: ['Mercure',
                   'Vénus',
                   'Terre',
                   'Mars',
                   'Jupiter',
                   'Saturne',
                   'Uranus',
                   'Neptune',
                  ],
          datasets: [{
            label: 'Nombre de jours pour faire un tour autour du soleil',
            data: [87.969256 , 224.6997056, 365.256363051, 686.979852 , 4332.589, 10759.23, 30685.4, 60266],
            borderWidth: 2,
            borderColor: '#E28811',
            backgroundColor: '#5CD3D5'
          }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: "y",
            plugins: {
                title: {
                    display: false
                  },
                  legend: { display: false },
            scales: {
            y: {
              beginAtZero: true,
            }
          }}
        }
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
          labels: ["Action", "Horreur", "Comédie", "Science-fiction"],
          datasets: [
            {
              data: [1, 2, 3, 4],
              backgroundColor: [
                "#E28811",
                "#213CD5",
                "#DFA60B",
                "#5CD3D5"
              ],
              hoverOffset: 20,
              borderWidth: 0,
              borderRadius: 1,
              spacing: 1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: "80%",
          plugins: {
            title: {
                display: false
              },
              legend: { display: false },
            title: {
              display: true,
              text: "Intérêt par genre de film",
              padding: { top: 8, bottom: 12 }
            }
          }
        }
      });
      
       setInterval(() => {
         for (let ds of graphique02.data.datasets) {
           for (let i = 0; i < ds.data.length; i++) {
             ds.data[i] = Math.round(Math.random() * 20);
           }
         }
         graphique02.update();
       }, 500);



       let graphique04 = new Chart(barre04, {
        type: 'line',
        data: {
          labels: ['Mercure',
                   'Vénus',
                   'Terre',
                   'Mars',
                   'Jupiter',
                   'Saturne',
                   'Uranus',
                   'Neptune',
                  ],
          datasets: [{
            label: 'Nombre de jours pour faire un tour autour du soleil',
            data: [87.969256 , 224.6997056, 365.256363051, 686.979852 , 4332.589, 10759.23, 30685.4, 60266],
            borderWidth: 2,
            borderColor: '#E28811',
            backgroundColor: '#5CD3D5'
          }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins:{
                title: {
                    display: false
                  },
                  legend: { display: false },
            scales: {
            y: {
              beginAtZero: true,
            }
            
          }
        }}
      });

      setInterval(() => {
        for (let ds of graphique05.data.datasets) {
          for (let i = 0; i < ds.data.length; i++) {
            ds.data[i] = Math.round(Math.random() * 80 + 20);
          }
      }
      graphique05.update();
      }, 300);

      setInterval(() => {
        for (let ds of graphique04.data.datasets) {
          for (let i = 0; i < ds.data.length; i++) {
            ds.data[i] = Math.round(Math.random() * 30 + 10);
          }
      }
      graphique04.update();
      }, 1000);






      let graphique05 = new Chart(barre05, {
        type: 'bar',
        data: {
          labels: ['Mercure',
                   'Vénus',
                   'Terre',
                   'Mars',
                   'Jupiter',
                   'Saturne',
                   'Uranus',
                   'Neptune',
                  ],
          datasets: [{
            label: 'Nombre de jours pour faire un tour autour du soleil',
            data: [87.969256 , 224.6997056, 365.256363051, 686.979852 , 4332.589, 10759.23, 30685.4, 60266],
            borderWidth: 2,
            borderColor: '#E28811',
            backgroundColor: '#5CD3D5'
          }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins:{
                title: {
                    display: false
                  },
                  legend: { display: false },
            scales: {
                x: {
                    type: "bar",
                    title: {
                      display: false
                    },
                    grid: {
                      display: false
                    },
                    ticks: {
                      display: false
                    }
                  },

            y: {
                type:"bar",
              beginAtZero: true,
              title: {
                display: false
              },
              grid: {
                display: false
              },
              ticks: {
                display: false,
              }
            }
          }}
        }
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

