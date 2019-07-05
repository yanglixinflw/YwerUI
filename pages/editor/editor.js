// pages/editor/editor.js
//引入富文本
var WxParse = require('../../wxParse/wxParse.js');
const app = getApp()
Page({
  data: {
    //数据
    data:""
  },
  onLoad(){
    var that=this
    //在这一步之前请求接口拿到data数据
    WxParse.wxParse('content', 'html', that.data.data.content, that, 5);
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