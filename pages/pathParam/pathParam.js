// pages/pathParam/pathParam.js
const app = getApp()
Page({
  data: {

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
  confirm:function(){
    var that=this;
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面
    //直接调用上一个页面的setData()方法，把数据存到上一个页面中去,上i个页面需定义mydata接收
    prevPage.setData({
      mydata: { a: 1, b: 2 }
    })
    wx.navigateBack({
      delta:1
    })
  },
  //返回上一级页面
  back() {
    wx.navigateBack({
      delta: 1
    })
  }
})