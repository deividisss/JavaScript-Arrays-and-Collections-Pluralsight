// Charts
let ctx = document.getElementById("monthlySales").getContext("2d");
let piectx = document.getElementById("deptSales").getContext("2d");
let yearlyLabel = document.getElementById("yearlyTotal");

let monthlySales = Array.of(500, 9000, 3000);
let monthlyLabels = Array.of("Oct", "Now", "Dec");

let deptSales = Array.of(12, 9, 3);
let deptLabels = Array.of("Hiking", "Running", "Hunting");

let yearlyTotal = 0;

function addYearlyTotal(x) {
  yearlyTotal = x + yearlyTotal;
}

monthlySales.forEach(addYearlyTotal);

let octNums = Array.of(1200, 2000, 5000);
let novNums = Array.of(1100, 1000, 800);
let decNums = Array.of(1400, 3000, 6000);

// let total = Array.of(
//   addYearlyTotal(...octNums),
//   addYearlyTotal(...novNums),
//   addYearlyTotal(...decNums)
// );

function findOver1000() {
  let firstThousand = monthlySales.findIndex((element) => element > 1000);
  alert(firstThousand);
}

function resetNum() {
  monthlySales.fill(0); // We can use it to reset the dota on the Array
  myChart.update();
}

yearlyLabel.innerHTML = "$" + yearlyTotal;

// Bar
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: monthlyLabels,
    datasets: [
      {
        label: "# of Sales",
        data: monthlySales,
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
var deptSalesChart = new Chart(piectx, {
  type: "pie",
  data: {
    labels: deptLabels,
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: [
          "rgba(238, 184, 104, 1)",
          "rgba(75, 166, 223, 1)",
          "rgba(239, 118, 122, 1)",
        ],
        data: deptSales,
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
