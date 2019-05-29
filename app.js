//app.js
App({
  //自定义头部
  onLaunch() {
    const vm = this
    // let totalTopHeightSet = {
    //   'iPhone': 64,
    //   'iPhone X': 88,
    //   'android': 68
    // }
    wx.getSystemInfo({
      success: function (res) {

        // 设备信息(此三条)
        vm.screenWidth = res.windowWidth;
        vm.screenHeight = res.windowHeight;
        vm.pixelRatio = res.pixelRatio;

        let totalTopHeight = 68
        if (res.model.indexOf('iPhone X') !== -1) {
          totalTopHeight = 88
        } else if (res.model.indexOf('iPhone') !== -1) {
          totalTopHeight = 64
        }
        vm.globalData.statusBarHeight = res.statusBarHeight
        vm.globalData.titleBarHeight = totalTopHeight - res.statusBarHeight
      },
      failure() {
        vm.globalData.statusBarHeight = 0
        vm.globalData.titleBarHeight = 0
      }
    })
  },
  globalData: {
    userInfo: null
  }
})