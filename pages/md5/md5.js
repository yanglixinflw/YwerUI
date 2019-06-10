// pages/md5/md5.js
const app = getApp();
var MD5s = require('../../utils/md5.js')
Page({
  data: {

  },
  onLoad: function (options) {
    var md = MD5s.md5("这是一段要被加密的话");
    console.log(md);  //802909e380455122f72d652ffaa1a4dc
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
  //返回上一级页面
  back() {
    wx.navigateBack({
      delta: 1
    })
  }
})