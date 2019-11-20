// pages/js-vcode/js-vcode.js
const app = getApp()
//引入js文件
var Mcaptcha = require('../../utils/mcaptcha.js');
Page({
  data: {
    imgCode: '', //输入的验证码字符
  },
  inputCode: function (e) {
    this.setData({
      imgCode: e.detail.value
    });
  },
  onReady: function () {
    //进入页面初始化渲染验证码
    this.mcaptcha = new Mcaptcha({
      el: 'canvas',
      width: 80,
      height: 35,
      createCodeImg: ""
    });
    //设置自定义头部的高度
    const vm = this;
    var add = getApp().globalData.statusBarHeight + getApp().globalData.titleBarHeight
    vm.setData({
      statusBarHeight: getApp().globalData.statusBarHeight,
      titleBarHeight: getApp().globalData.titleBarHeight,
      add: add,
    })
  },
  //刷新验证码
  onTap: function () {
    this.mcaptcha.refresh();
  },

  //验证验证码的代码
  //验证验证码
//   var res = this.mcaptcha.validate(this.data.imgCode);
//   if(this.data.imgCode == '' || this.data.imgCode == null) {
//   console.log("请输入图形验证码");
//   return;
// };
// if (!res) {
//   wx.showToast({
//     title: '图形验证码错误',
//     icon: "none"
//   })
//   return;
// } else {
//  如果验证通过执行的操作
// }




  //返回上一级页面
  back() {
    wx.navigateBack({
      delta: 1
    })
  }
})