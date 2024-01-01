const data = {
    labels: ['志趣不合','成績不佳', '逾期未復學', '逾期未註冊', '生涯規劃', '其他'],
    datasets: [{
        label: '比例',
        data: [35.75, 9.36, 28.52, 13.62, 11.72, 0.03]
    }]
};

const ctx = document.getElementById("LineChart");
const myChart = new Chart(ctx, {
    type: 'pie',
    data: data
});