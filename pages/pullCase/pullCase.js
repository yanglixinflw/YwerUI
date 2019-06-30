// pages/pullCase/pullCase.js
const app = getApp()
Page({
  data: {
    //品牌下拉选项
    brandOption: [
      { id: 0, value: '全部', isChecked: true }, { id: 1, value: '奔驰'}, { id: 2, value: '宝马'}, { id: 3, value: '奥迪'}, { id: 4, value: '劳斯莱斯'}, { id: 5, value: '特斯拉'}, { id: 6, value: '保时捷'}
    ],
    //车系下拉选项
    typeOption: [
      { id: 0, value: '全部', isChecked: true }, { id: 1, value: 'a1' }, { id: 2, value: 'a2' }, { id: 3, value: 'x3' }, { id: 4, value: 'c2' }, { id: 5, value: 'd4' }
    ],
    //年份下拉选项
    yearOption: [
      { id: 0, value: '全部', isChecked: true }, { id: 1, value: '2010' }, { id: 2, value: '2011' }, { id: 3, value: '2012' }, { id: 4, value: '2013' }, { id: 5, value: '2014' }, { id: 6, value: '2015' }
    ],
    //尺寸下拉选项
    sizeOption: [
      { id: 0, value: '全部', isChecked: true }, { id: 1, value: '22寸' }, { id: 2, value: '23寸' }, { id: 3, value: '24寸' }, { id: 4, value: '25寸' }, { id: 5, value: '26寸' }, { id: 6, value: '27寸' }
    ],
    //是否显示品牌下拉列表
    isBrand: false,
    //选中的品牌
    brandValue: "品牌",
    //选中的车系
    typeValue: "车系",
    //是否显示类型下拉列表
    isType: false,
    //选中的时间
    yearValue: "年份",
    //是否显示年份下拉列表
    isYear: false,
    //选中的尺寸
    sizeValue: "尺寸",
    //是否显示年份下拉列表
    isSize: false,


    //省份
    provinceValue: "浙江省",
    //是否隐藏省份
    isProvince: true,
    //省份列表
    provinceList: [
      { id: 0, value: '山西' }, { id: 1, value: '北京' }, { id: 2, value: '河北' }, { id: 3, value: '河南' }, { id: 4, value: '陕西' }, { id: 5, value: '贵州' }, { id: 6, value: '浙江' }, { id: 7, value: '新疆维吾尔自治区' }, { id: 8, value: '香港特别行政区' }, { id: 9, value: '台湾' },{ id: 10, value: '重庆' }, { id: 11, value: '广东' }, { id: 12, value: '上海' }
    ],
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
  //点击品牌下拉
  isBrand() {
    var that = this;
    that.setData({
      isBrand: !that.data.isBrand,
      isType: false,
      isYear: false,
      isSize: false
    })
  },
  //点击类型下拉
  isType() {
    var that = this;
    that.setData({
      isType: !that.data.isType,
      isYear: false,
      isSize: false,
      isBrand: false,
    })
  },
  //点击年份下拉
  isYear() {
    var that = this;
    that.setData({
      isYear: !that.data.isYear,
      isSize: false,
      isBrand: false,
      isType: false
    })
  },
  //点击尺寸下拉
  isSize() {
    var that = this;
    that.setData({
      isSize: !that.data.isSize,
      isBrand: false,
      isType: false,
      isYear: false
    })
  },
  //品牌下拉框单选
  brandChange: function (e) {
    var that = this;
    var name = e.detail.value;
    var brandOption = that.data.brandOption;
    for (var i of brandOption) {
      if (i.id == name) {
        i.isChecked = true;
        var brandValue = i.value;
      } else {
        i.isChecked = false
      }
    }
    that.setData({
      brandOption: brandOption,
      brandValue: brandValue,
      isBrand: !that.data.isBrand,
    })
  },
  //类型下拉框单选
  typeChange: function (e) {
    var that = this;
    var type = e.detail.value;
    var typeOption = that.data.typeOption;
    for (var i of typeOption) {
      if (i.id == type) {
        i.isChecked = true;
        var typeValue = i.value;
      } else {
        i.isChecked = false
      }
    }
    that.setData({
      typeOption: typeOption,
      typeValue: typeValue,
      isType: !that.data.isType
    })
  },
  //年份下拉框单选
  yearChange: function (e) {
    var that = this;
    var date = e.detail.value;
    var yearOption = that.data.yearOption;
    for (var i of yearOption) {
      if (i.id == date) {
        i.isChecked = true
        var yearValue = i.value;
      } else {
        i.isChecked = false
      }
    }
    that.setData({
      yearOption: yearOption,
      yearValue: yearValue,
      isYear: !that.data.isYear
    })
  },
  //尺寸下拉框单选
  sizeChange: function (e) {
    var that = this;
    var size = e.detail.value;
    var sizeOption = that.data.sizeOption;
    for (var i of sizeOption) {
      if (i.id == size) {
        i.isChecked = true;
        var sizeValue = i.value;
      } else {
        i.isChecked = false
      }
    }
    that.setData({
      sizeOption: sizeOption,
      sizeValue: sizeValue,
      isSize: !that.data.isSize
    })
  },


  //点击省份
  province() {
    var that = this
    that.setData({
      isProvince: !that.data.isProvince
    })
  },
  //选择省份
  checkedProvince(e) {
    var that = this
    var value = e.currentTarget.dataset.value
    that.setData({
      provinceValue: value,
      isProvince: !that.data.isProvince
    })
  },
  //返回上一级页面
  back() {
    wx.navigateBack({
      delta: 1
    })
  }
})