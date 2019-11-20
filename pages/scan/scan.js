// pages/scan/scan.js
const app = getApp()
Page({
  data: {
    cardNum:""
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
  //卡号
  cardNum(e) {
    var that = this
    var cardNum = e.detail.value
    that.setData({
      cardNum: cardNum
    })
  },
  //扫一扫
  scan() {
    var that = this;
    wx.scanCode({
      success: (res) => {
        if (res.result.indexOf("://") >= 0) {
          wx.showToast({
            title: '错误的扫描',
            icon: "none",
            duration: 3000
          })
        } else {
          var cardNum = res.result
          that.setData({
            cardNum: cardNum
          })
          wx.showToast({
            title: '扫码成功',
            icon: 'none',
            duration: 3000
          })
        }
      },
      fail: (res) => {
        wx.showToast({
          title: '扫码失败',
          icon: 'none',
          duration: 3000
        })
      },
    })
  },
  //返回上一级页面
  back() {
    wx.navigateBack({
      delta: 1
    })
  }
})