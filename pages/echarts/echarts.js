// pages/echarts/echarts.js
var wxCharts = require('../../utils/wxcharts.js');
const app = getApp()
var lineChart = null;
Page({
  data: {
    Data:[
      { Time: "17", Value: 23.5 },
      { Time: "19", Value: 19.1 },
      { Time: "21", Value: 19 },
      { Time: "23", Value: 19.3 },
      { Time: "1", Value: 19.5 },
      { Time: "3", Value: 19.4 },
      { Time: "5", Value: 17.3 },
      { Time: "7", Value: 20 },
      { Time: "9", Value: 22.5 },
      { Time: "11", Value: 23.9 },
      { Time: "13", Value: 23.3 },
      { Time: "15", Value: 21.1 },
      { Time: "17", Value: 21.2 }
    ],
    arr1: [],
    arr2: [],
  },
  onReady: function () {
    //设置自定义头部的高度
    const vm = this;
    var add = getApp().globalData.statusBarHeight + getApp().globalData.titleBarHeight
    vm.setData({
      statusBarHeight: getApp().globalData.statusBarHeight,
      titleBarHeight: getApp().globalData.titleBarHeight,
      add: add,
    })
  },
  //点击节点的时候显示的数据
  plot: function (e) {
    lineChart.showToolTip(e, {
      background: '#7cb5ec',//点击显示文字的背景色
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },
  //x轴的数据
  createSimulationData: function () {
    var that = this;
    var arr2 = that.data.arr2;
    var categories = [];
    // for(var i=0;i<20;i++){
    //   categories.push(i)
    // }
    // data[4] = null;
    return {
      categories: arr2,
      // data: data
    }
  },
  onLoad(){
    var that=this
    that.createSimulationData();
    var chart = that.data.Data;
    var arr1=[];
    var arr2=[]
    chart.map(v => {
      arr1.push(v.Value)
    })
    chart.map(v => {
      arr2.push(v.Time)
    })
    that.setData({
      arr1: arr1,
      arr2: arr2,
    })
    //->绘制图表相关1
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    var simulationData = that.createSimulationData();
    lineChart = new wxCharts({
      canvasId: 'lineCanvas',
      type: 'area',
      categories: simulationData.categories,
      animation: true,
      dataLabel: true,
      legend: false,
      series: [{
        name: '温度',
        data: arr1,
        format: function (val, name) {
          return val.toFixed(1) + '℃';
        }
      }],
      xAxis: {
        disableGrid: true,
        gridColor: "#ffffff"
      },
      yAxis: {
        // title: '成交金额 (万元)',
        format: function (val) {
          return val.toFixed(1);
        },
        min: 0
      },
      width: windowWidth,
      height: 150,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'straight'
      }
    });//《-绘制图表相关1
  },
  //返回上一级页面
  back() {
    wx.navigateBack({
      delta: 1
    })
  }
})