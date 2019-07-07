// pages/drag/drag.js
const app = getApp()
Page({
  data: {
    left: '',
    top: ''
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
  viewTouchMove: function (e) {
    if (e.touches[0].clientX <= 60){
      e.touches[0].clientX=60
    } else if (e.touches[0].clientX >= wx.getSystemInfoSync().windowWidth){
      e.touches[0].clientX = wx.getSystemInfoSync().windowWidth
    }
    if (e.touches[0].clientY < 60){
      e.touches[0].clientY = 60
    } else if (e.touches[0].clientY >= wx.getSystemInfoSync().windowHeight){
      e.touches[0].clientY = wx.getSystemInfoSync().windowHeight
    }
    this.setData({
      left: e.touches[0].clientX - 60,
      top: e.touches[0].clientY - 60
    })
  },
  //返回上一级页面
  back() {
    wx.navigateBack({
      delta: 1
    })
  }
})