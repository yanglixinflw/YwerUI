const app = getApp()
Page({
  data: {
    status:1,
    pathUrlList01:[
      {
        id:1,
        name:"轮播",
        pathUrl:"/pages/swiper/swiper",
        like:true,
      },
      {
        id: 2,
        name: "客服会话功能",
        pathUrl: "/pages/onlineHot/onlineHot",
        like: true,
      },
      {
        id: 3,
        name: " 转发 / 分享功能 小卡片设置",
        pathUrl: "/pages/share/share",
        like: true,
      },
       {
        id: 4,
         name: "获取微信用户的头像和名称(不弹窗的方法)",
         pathUrl: "/pages/login/login",
         like: true,
      },
      // {
      //   id: 5,
      //   name: "Canvas导出图片",
      //   pathUrl: "/pages/canvas/canvas"
      // },
      {
        id: 6,
        name: "小程序弹窗提示(wx.Toast)",
        pathUrl: "/pages/toast/toast",
        like: true,
      },
      {
        id: 7,
        name: "九宫格方式上传图片（预览并删除)",
        pathUrl: "/pages/upload/upload",
        like: true,
      },
      {
        id: 8,
        name: "小程序MD5加密写法（支持加密中文）",
        pathUrl: "/pages/md5/md5",
        like: true,
      },
      {
        id: 9,
        name: "锚点效果",
        pathUrl: "/pages/a/a",
        like: true,
      },
      // {
      //   id: 10,
      //   name: "导航栏吸顶效果 ",
      //   pathUrl: "/pages/mounting/mounting",
      //   like: true,
      // },
      {
        id: 11,
        name: "获取屏幕当前高度并赋值给某个view",
        pathUrl: "/pages/screenHeight/screenHeight",
        like: true,
      },
      // {
      //   id: 12,
      //   name: "图片裁剪功能",
      //   pathUrl: "/pages/onlineHot/onlineHot"
      // },
      {
        id: 13,
        name: "自定义空页",
        pathUrl: "/pages/custom/custom",
        like: true,
      },
      {
        id: 14,
        name: "解决 分享出去的页面没有返回按钮的方法",
        pathUrl: "/pages/share_return/share_return",
        like: true,
      },
      {
        id: 15,
        name: "tab切换功能",
        pathUrl: "/pages/tab/tab",
        like: true,
      },
      {
        id: 16,
        name: "点击按钮返回上一页并传参",
        pathUrl: "/pages/pathParam/pathParam",
        like: true,
      },
      {
        id: 17,
        name: "使用setData修改data中子对象的属性值",
        pathUrl: "/pages/edit_setData/edit_setData",
        like: true,
      },
      {
        id: 18,
        name: "小程序验证手机号、60秒验证码",
        pathUrl: "/pages/onlineHot/onlineHot"
      },
      {
        id: 19,
        name: "获取当前点击item的值data-index的用法",
        pathUrl: "/pages/getData/getData",
        like:true
      },
    ],
    pathUrlList02:[
      {
        id: 1,
        name: "小程序scroll-x写nav",
        pathUrl: "/pages/scrollView/scrollView",
        like: true
      },
      {
        id: 2,
        name: "左滑删除",
        pathUrl: "/pages/del/del",
        like: true
      }, 
      {
        id: 3,
        name: "刻度尺",
        pathUrl: "/pages/silder/silder",
        like: true
      }, 
      {
        id: 4,
        name: "复制文本",
        pathUrl: "/pages/copy/copy",
        like: true
      },
      {
        id: 5,
        name: "清除表情和空格",
        pathUrl: "/pages/cleanEmoji/cleanEmoji",
        like: true
      },
      {
        id: 6,
        name: "下拉框",
        pathUrl: "/pages/pullCase/pullCase",
        like: true
      },
      {
        id:7,
        name: "富文本",
        pathUrl: "/pages/editor/editor",
        like: true
      }, 
      {
        id: 8,
        name: "echarts",
        pathUrl: "/pages/echarts/echarts",
        like: true
      },
      {
        id: 9,
        name: "拖动效果实现",
        pathUrl: "/pages/drag/drag",
        like: true
      },
      {
        id: 10,
        name: "动态切换头部导航2",
        pathUrl: "/pages/changeNav/changeNav",
        like: true
      },
      {
        id: 11,
        name: "微信扫码",
        pathUrl: "/pages/scan/scan",
        like: true
      },
      {
        id: 12,
        name: "js验证码",
        pathUrl: "/pages/js-vcode/js-vcode",
        like: true
      },
    ],
    pathUrlList03:[]
  },
  //自定义头部
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
  //翻页切换
  pageSelect:function(e){
    var that=this;
    var id = e.currentTarget.dataset.id;
    that.setData({
      status:id
    })
  }
})