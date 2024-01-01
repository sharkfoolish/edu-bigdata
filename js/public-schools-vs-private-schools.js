const lineChartData = {
  labels: ['105', '106', '107', '108', '109', '110'],
  datasets: [
    {
      type: 'line',
      label: '公立學校',
      data: [3.02, 3.03, 3.23, 1.81, 3.42, 3.43],
      borderColor: '#198754',
    },
    {
      type: 'line',
      label: '私立學校',
      data: [2.53, 2.70, 2.63, 3.62, 2.48, 2.52],
      borderColor: '#dc3545',
    }
  ]
};


const ctx = document.getElementById("LineChart");
const myChart = new Chart(ctx, {
  data: lineChartData
});
