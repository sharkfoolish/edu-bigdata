const lineChartData = {
  labels: ['105', '106', '107', '108', '109', '110'],
  datasets: [
    {
      type: 'bar',
      label: '數學系',
      data: [3.268, 3.9, 4.587, 4.315, 4.460, 3.698],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1
    },
    {
      type: 'bar',
      label: '應用數學系',
      data: [3.392, 2.789, 2.359, 2.136, 2.253, 2.249],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 1
    },
    {
      type: 'bar',
      label: '化學系',
      data: [2.734, 2.201, 2.495, 2.634, 2.403, 1.983],
      backgroundColor: 'rgba(253, 126, 20, 0.2)',
      borderColor: 'rgb(253, 126, 20)',
      borderColor: '#fd7e14',
      borderWidth: 1
    },
    {
      type: 'bar',
      label: '應用化學系',
      data: [3.549, 2.862, 3.301, 3.641, 2.866, 2.561],
      backgroundColor: 'rgba(13, 202, 240, 0.2)',
      borderColor: 'rgb(13, 202, 240)',
      borderColor: '#fd7e14',
      borderWidth: 1
    },
  ]
};

const ctx = document.getElementById("LineChart");
const myChart = new Chart(ctx, {
  data: lineChartData
});生理男性vs生理女性