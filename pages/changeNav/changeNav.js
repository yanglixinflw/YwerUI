// pages/changeNav/changeNav.js
var app = getApp()
Page({
  data: {
    tabs: ["全部", "待发货", "待收货", "已完成"],
    //tab栏索引
    activeIndex: 0,
    //页码
    page: 1,
    //页面的数据
    data: "",
    //是否可以++
    isAdd: true,
    top:""//自定义top要动态计算
  },
  onReady: function () {
    //设置自定义头部的高度
    const vm = this;
    var add = getApp().globalData.statusBarHeight + getApp().globalData.titleBarHeight
    vm.setData({
      statusBarHeight: getApp().globalData.statusBarHeight,
      titleBarHeight: getApp().globalData.titleBarHeight,
      add: add,
      top:add
    })
  },
  onShow() {
    var that = this
    that.setData({
      page: 1,
      activeIndex: 0,
      isAdd: true
    })
    // wx.request({
    //   url: app.api.apiurl + 'Order/order_list.html',
    //   method: "POST",
    //   data: {
    //     dyappsecret: "9cf80b86e29e6afeb188c340a0c1aaf1",
    //     type: that.data.activeIndex,
    //     token: app.globalData.token,
    //     p: that.data.page
    //   },
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded',
    //     "apihandshakekey": "d1db42101f5195c5c3bcb59f35cbcc01"
    //   },
    //   success(res) {
    //     if (res.data.errcode == 1) {
    //       that.setData({
    //         data: res.data.data
    //       })
    //     }
    //   }
    // })
  },
  //tab切换
  tab(e) {
    var that = this;
    var idIndex = e.currentTarget.id;
    console.log(idIndex)
    that.setData({
      activeIndex: idIndex,
      page: 1,
      isAdd: true
    });
    // wx.request({
    //   url: app.api.apiurl + 'Order/order_list.html',
    //   method: "POST",
    //   data: {
    //     dyappsecret: "9cf80b86e29e6afeb188c340a0c1aaf1",
    //     type: idIndex,
    //     token: app.globalData.token,
    //     p: that.data.page
    //   },
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded',
    //     "apihandshakekey": "d1db42101f5195c5c3bcb59f35cbcc01"
    //   },
    //   success(res) {
    //     if (res.data.errcode == 1) {
    //       that.setData({
    //         data: res.data.data
    //       })
    //     }
    //   }
    // })
  },
  //查看详情
  // lookDetails(e) {
  //   var ordersn = e.currentTarget.dataset.ordersn
  //   wx.navigateTo({
  //     url: '../orderDetails/orderDetails?ordersn=' + ordersn + "&type=" + 2,
  //   })
  // },
  //下拉翻页
  // onReachBottom: function () {
  //   var that = this
  //   if (that.data.isAdd) {
  //     that.setData({
  //       page: that.data.page + 1
  //     })
  //   } else {
  //     that.setData({
  //       page: that.data.page
  //     })
  //   }
  //   wx.request({
  //     url: app.api.apiurl + 'Order/order_list.html',
  //     method: "POST",
  //     data: {
  //       dyappsecret: "9cf80b86e29e6afeb188c340a0c1aaf1",
  //       type: that.data.activeIndex,
  //       token: app.globalData.token,
  //       p: that.data.page
  //     },
  //     header: {
  //       'content-type': 'application/x-www-form-urlencoded',
  //       "apihandshakekey": "d1db42101f5195c5c3bcb59f35cbcc01"
  //     },
  //     success(res) {
  //       if (res.data.errcode == 1) {
  //         if (res.data.data.length !== 0) {
  //           var data = that.data.data.concat(res.data.data)
  //           that.setData({
  //             data: data
  //           })
  //         } else {
  //           that.setData({
  //             page: that.data.page,
  //             isAdd: false
  //           })
  //           wx.showToast({
  //             title: '已加载全部',
  //             icon: "none"
  //           })
  //         }
  //       }
  //     }
  //   })
  // },
  // //确认订单
  // confirm(e) {
  //   var that = this
  //   var ordersn = e.currentTarget.dataset.ordersn
  //   wx.request({
  //     url: app.api.apiurl + 'Order/order_confirm.html',
  //     method: "POST",
  //     data: {
  //       dyappsecret: "9cf80b86e29e6afeb188c340a0c1aaf1",
  //       token: app.globalData.token,
  //       ordersn: ordersn
  //     },
  //     header: {
  //       'content-type': 'application/x-www-form-urlencoded',
  //       "apihandshakekey": "d1db42101f5195c5c3bcb59f35cbcc01"
  //     },
  //     success(res) {
  //       if (res.data.errcode == 1) {
  //         wx.showToast({
  //           title: res.data.message,
  //           icon: 'none',
  //           duration: 2000
  //         })
  //         //重新请求接口实现刷新
  //         that.setData({
  //           page: 1,
  //           isAdd: true
  //         })
  //         wx.request({
  //           url: app.api.apiurl + 'Order/order_list.html',
  //           method: "POST",
  //           data: {
  //             dyappsecret: "9cf80b86e29e6afeb188c340a0c1aaf1",
  //             type: that.data.activeIndex,
  //             token: app.globalData.token,
  //             p: that.data.page
  //           },
  //           header: {
  //             'content-type': 'application/x-www-form-urlencoded',
  //             "apihandshakekey": "d1db42101f5195c5c3bcb59f35cbcc01"
  //           },
  //           success(res) {
  //             console.log(res)
  //             if (res.data.errcode == 1) {
  //               that.setData({
  //                 data: res.data.data
  //               })
  //             }
  //           }
  //         })
  //       }
  //     }
  //   })
  // },
  //返回上一级页面
  back() {
    wx.navigateBack({
      delta: 1
    })
  },
})