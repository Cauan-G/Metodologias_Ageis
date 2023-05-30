gerarGraficosMoradores()
function gerarGraficosMoradores(){
    var dom = document.getElementById('moradores');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;
    
    option = {
      title: {
        text: 'População'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Brasil', 'Rio de Janeiro']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1980', '1990', '2000', '2010', '2020', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Brasil',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Rio de Janeiro',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
      ]
    };
    
    myChart.setOption(option);
    window.addEventListener('resize', myChart.resize);

}