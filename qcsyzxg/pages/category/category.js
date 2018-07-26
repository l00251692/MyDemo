//index.js
var goodsData = require('../../utils/goodsData.js');
//获取应用实例
var app = getApp()
Page({
  data: {
    carousel:{},
    navs:{},
    zhengjian: [
      {
        "goods_id": 1,
        "goods_name": "简历正装照",
        "goods_price": "28.9起",
        "thumbnail": "/images/category/goods1.jpg",
      }]
    ,
    sheying: [{
      "goods_id": 2,
      "goods_name": "个人写真",
      "goods_price": "28.9起",
      "thumbnail": "/images/category/goods2.jpg",
    },
      {
        "goods_id": 3,
        "goods_name": "团体摄影",
        "goods_price": "28.9起",
        "thumbnail": "/images/category/goods3.jpg",
      },
      {
        "goods_id": 4,
        "goods_name": "会议摄像",
        "goods_price": "28.9起",
        "thumbnail": "/images/category/goods4.jpg",
      }],
    zulin: [{
      "goods_id": 5,
      "goods_name": "正装租赁",
      "goods_price": "20.0起",
      "thumbnail": "/images/category/goods5.jpg",
    },
      {
        "goods_id": 6,
        "goods_name": "演出服装租赁",
        "goods_price": "100.0起",
        "thumbnail": "/images/category/goods6.jpg",
      }]
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
  
    that.setData({
      carousel: goodsData.carousel,
      newGoods: goodsData.newGoods(),
      hotGoods: goodsData.hotGoods(),
    })
  },

  onShareAppMessage() {
    return {
      title: '南京青春盛焰照相馆',
      path: '/pages/category/category'
    }
  }
})
