// Charts
let ctx = document.getElementById("monthlySales").getContext("2d");
let piectx = document.getElementById("deptSales").getContext("2d");

// Bar
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Sales",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(238, 184, 104, 1)",
          "rgba(75, 166, 223, 1)",
          "rgba(239, 118, 122, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

// Dept sales
var deptSales = new Chart(piectx, {
  type: "pie",
  data: {
    labels: ["Africa", "Asia", "Europe"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: [
          "rgba(238, 184, 104, 1)",
          "rgba(75, 166, 223, 1)",
          "rgba(239, 118, 122, 1)",
        ],
        data: [2478, 5267, 734],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Predicted world population (millions) in 2050",
    },
  },
});
