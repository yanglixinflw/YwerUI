// pages/getData/getData.js
const app = getApp()
Page({
  data: {
    listImg:[
      { index: 0, name: "张三" },
      { index: 1, name: "张四" },
      { index: 2, name: "张五" },
      { index: 3, name: "张六" }
    ]
  },

  onReady: function (e) {
    //设置自定义头部的高度
    const vm = this;
    var add = getApp().globalData.statusBarHeight + getApp().globalData.titleBarHeight
    vm.setData({
      statusBarHeight: getApp().globalData.statusBarHeight,
      titleBarHeight: getApp().globalData.titleBarHeight,
      add: add,
    })
  },
  listFirst(e){
    console.log(e.currentTarget.dataset.index);
  },
  //返回上一级页面
  back() {
    wx.navigateBack({
      delta: 1
    })
  }
})