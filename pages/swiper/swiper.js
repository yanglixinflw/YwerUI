// pages/swiper/swiper.js
const app = getApp()
Page({
  data: {
    //普通轮播的配置项
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,//自动切换时间间隔
    duration: 800,//滑动动画时长
    circular: true,//是否采用衔接滑动
    imgUrls: [
      '../../images/foodbg.png',
      '../../images/foodbg.png',
      '../../images/foodbg.png'
    ] ,
    //可点击的上下轮播配置项
    swiper: {
      //当前的轮播位置
      current: 0,
      //作品
      works: [
        { id: 1, src: "../../images/works2.png" },
        { id: 2, src: "../../images/works.png" },
        { id: 3, src: "../../images/works2.png" },
        { id: 4, src: "../../images/works2.png" },
        { id: 5, src: "../../images/works.png" },
        { id: 6, src: "../../images/works2.png" },
        { id: 7, src: "../../images/works.png" },
      ],
    },
    //大图的地址赋值
    worksSrc: "../../images/works.png",
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
  onLoad() {
    this.setData({
      worksSrc: this.data.swiper.works[0].src
    })
  },
  intervalChange(e) {
    this.setData({
      worksSrc: this.data.swiper.works[e.detail.current].src
    })
  },
  //上一张图
  prev() {
    var swiper = this.data.swiper;
    var current = swiper.current;
    swiper.current = current > 0 ? current - 1 : swiper.works.length - 1;
    this.setData({
      swiper: swiper,
    })
  },
  //下一张图
  next() {
    var swiper = this.data.swiper;
    var current = swiper.current;
    swiper.current = current < (swiper.works.length - 1) ? current + 1 : 0;
    this.setData({
      swiper: swiper,
    })
  },
  //单击图片
  clickPic(e) {
    this.setData({
      worksSrc: this.data.swiper.works[e.currentTarget.id].src
    })
  },
  //返回上一级页面
  back() {
    wx.navigateBack({
      delta: 1
    })
  },
})