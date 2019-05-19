// pages/scrollView/scrollView.js
const app = getApp()
Page({
  data: {
    tabs: ["全部", "待付款", "待发货", "待收货", "退换货", "退换货"],
    activeIndex: 0,
    data:[
      { id: 0, name: "张三", age: 18, sex: "男" },
      { id: 1, name: "张三", age: 18, sex: "男" },
      { id: 2, name: "张三", age: 18, sex: "男" },
      { id: 3, name: "张三", age: 18, sex: "男" },
      { id: 4, name: "张三", age: 18, sex: "男" },
    ],
    tabBoxHeight: 100
  },
  tab(e){
    var that = this;
    var idIndex = e.currentTarget.id;
    this.setData({
      activeIndex: idIndex,
    });
  },
  bindChange: function (e) {
    var current = e.detail.current;
    this.setData({
      activeIndex: current,
    });
  },
  //返回上一级页面
  back() {
    wx.navigateBack({
      delta: 1
    })
  }
})