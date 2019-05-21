// pages/upload/upload.js
const app = getApp()
Page({
  data: {
    //上传的图片
    images: [],
    rest: "12"
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
  //上传图片
  upLoad() {
    var that = this
    wx.chooseImage({
      count: 12,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        var imgs = that.data.images.concat(tempFilePaths)
        var rest = 12 - imgs.length
        that.setData({
          images: imgs,
          rest: rest
        });
      }
    })
  },
  //删除
  delete(e) {
    var that = this
    var index = e.currentTarget.dataset.index;
    var images = that.data.images;
    images.splice(index, 1);
    var rest = 12 - images.length
    that.setData({
      images: images,
      rest:rest
    });
  },
  //返回上一级页面
  back() {
    wx.navigateBack({
      delta: 1
    })
  }
})