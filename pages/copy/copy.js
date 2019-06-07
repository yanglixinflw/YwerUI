// pages/copy/copy.js
const app = getApp()
Page({
  data: {
    //文本
    content:"设置自定义头部的高度,设置自定义头部的高度设置自定义头部的高度,设置自定义头部的高度设置自定义头部的高度,设置自定义头部的高度,设置自定义头部的高度,设置自定义头部的高度设置自定义头部的高度设置自定义头部的高度设置自定义头部的高度"
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
  //复制文本
  copy(){
    wx.setClipboardData({
      //准备复制的数据
      data: this.data.content,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
          icon: "none"
        });
      }
    });
  },
  //返回上一级页面
  back() {
    wx.navigateBack({
      delta: 1
    })
  }
})