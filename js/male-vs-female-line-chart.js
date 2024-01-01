const lineChartData = {
  labels: ['105', '106', '107', '108', '109', '110'],
  datasets: [
    {
      type: 'line',
      label: '男姓',
      data: [0.03184, 0.03318, 0.03351, 0.03459, 0.03210, 0.03211],
      borderColor: 'rgb(54, 162, 235)',
    },
    {
      type: 'line',
      label: '女性',
      data: [0.02271, 0.02352, 0.02395, 0.02604, 0.02515, 0.02583],
      borderColor: 'rgb(255, 99, 132)',
    }
  ]
};

const ctx = document.getElementById("LineChart");
const myChart = new Chart(ctx, {
  data: lineChartData
});
