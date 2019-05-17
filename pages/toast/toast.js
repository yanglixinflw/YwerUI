// pages/toast/toast.js
const app = getApp()
Page({
  data: {
    hiddenmodalput: true,//model控件显示隐藏
    name: "",//姓名
    phoneNum: '',//手机号
  },
  //取消按钮
  cancelM: function (e) {
    this.setData({
      hiddenmodalput: true,
    })
  },
  // 确认按钮
  confirmM: function (e) {
    console.log("姓名：" + this.data.name + "  电话：" + this.data.phoneNum);
      this.setData({
        hiddenmodalput: true,
      })  
  },
  // bindinput
  iName: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  // bindinput
  iPhoneNum: function (e) {
    this.setData({
      phoneNum: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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
  model1:function(){
    wx.showToast({
      title: '失败',//提示文字
      duration: 2000,//显示时长
      mask: true,//是否显示透明蒙层，防止触摸穿透，默认：false  
      icon: 'success', //图标，支持"success"、"loading"  
      success: function () { },//接口调用成功
      fail: function () { },  //接口调用失败的回调函数  
      complete: function () { } //接口调用结束的回调函数  
    })
  },
  model2: function () {
    wx.showModal({
      title: '删除图片',
      content: '确定要删除该图片？',
      showCancel: true,//是否显示取消按钮
      cancelText: "否",//默认是“取消”
      cancelColor: 'skyblue',//取消文字的颜色
      confirmText: "是",//默认是“确定”
      confirmColor: 'skyblue',//确定文字的颜色
      success: function (res) {
        if (res.cancel) {
          //点击取消,默认隐藏弹框
        } else {
          //点击确定
          temp.splice(index, 1),
            that.setData({
              tempFilePaths: temp,
            })
        }
      },
      fail: function (res) { },//接口调用失败的回调函数
      complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）
    })
  },
  model3: function () {
    var that=this;
    wx.showActionSheet({
      itemList: ['列1', '列2', '列3'],//显示的列表项
      success: function (res) {//res.tapIndex点击的列表项
        console.log("点击了列表项：" + that[res.tapIndex])
      },
      fail: function (res) { },
      complete: function (res) { }
    })
  },
  //返回上一级页面
  back() {
    wx.navigateBack({
      delta: 1
    })
  }
})