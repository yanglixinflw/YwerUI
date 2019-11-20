// pages/scrollView/scrollView.js
const app = getApp()
Page({
  data: {
    //tab栏
    tabs: ["全部", "待付款", "待发货", "待收货", "已完成","已作废"],
    //tab栏索引
    activeIndex: 0,
    //页面数据
    data: [],
    //每条列表的高度
    tabBoxHeight: 80,
    // 模拟json数据
    data:{
      
    },
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
  //tab切换
  tab(e) {
    var that = this;
    var idIndex = e.currentTarget.id;
    this.setData({
      activeIndex: idIndex,
    });
  },
  //swiper内容切换
  bindChange: function (e) {
    var that=this;
    var current = e.detail.current;
    that.setData({
      activeIndex: current,
      list:that.data.data[current]
    });
    console.log(that.data.list)
  },
  //返回上一级页面
  back() {
    wx.navigateBack({
      delta: 1
    })
  }
})