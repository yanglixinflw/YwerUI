// pages/cleanEmoji/cleanEmoji.js
const app = getApp()
//清除表情的方法
function filterEmoji(name) {
  var str = name.replace(/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig, "");
  return str;
}
//清除空格的方法
function filterSpace(name) {
  var str = name.replace(/\s+/g, '');
  return str;
}
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
  //input中的内容
  input(e){
    var that=this
    console.log(e);
    var con = filterEmoji(e.detail.value);
    that.setData({
      con:filterSpace(con)
    })
    console.log(that.data.con)
  },
  //返回上一级页面
  back() {
    wx.navigateBack({
      delta: 1
    })
  }
})