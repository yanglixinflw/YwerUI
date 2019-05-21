// pages/test/test.js
const app = getApp()
Page({
  data: {
    delBtnWidth: 160,
    data: [{ content: "1", right: 0 }, { content: "2", right: 0 }, { content: "3", right: 0 }, { content: "4", right: 0 }, { content: "5", right: 0 }, { content: "6", right: 0 }, { content: "7", right: 0 }, { content: "8", right: 0 }, { content: "9", right: 0 }, { content: "10", right: 0 }],
    isScroll: true,
    windowHeight: 0,
  },
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowHeight: res.windowHeight
        });
      }
    });
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
  drawStart: function (e) {
    var touch = e.touches[0]
    for (var index in this.data.data) {
      var item = this.data.data[index]
      item.right = 0
    }
    this.setData({
      data: this.data.data,
      startX: touch.clientX,
    })

  },
  drawMove: function (e) {
    var touch = e.touches[0]
    var item = this.data.data[e.currentTarget.dataset.index]
    var disX = this.data.startX - touch.clientX
    if (disX >= 20) {
      if (disX > this.data.delBtnWidth) {
        disX = this.data.delBtnWidth
      }
      item.right = disX
      this.setData({
        isScroll: false,
        data: this.data.data
      })
    } else {
      item.right = 0
      this.setData({
        isScroll: true,
        data: this.data.data
      })
    }
  },
  drawEnd: function (e) {
    var item = this.data.data[e.currentTarget.dataset.index]
    if (item.right >= this.data.delBtnWidth / 2) {
      item.right = this.data.delBtnWidth
      this.setData({
        isScroll: true,
        data: this.data.data,
      })
    } else {
      item.right = 0
      this.setData({
        isScroll: true,
        data: this.data.data,
      })
    }
  },
  //删除操作
  delItem(){},
  //返回上一级页面
  back() {
    wx.navigateBack({
      delta: 1
    })
  }
})