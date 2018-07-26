import {  makePhoneCall } from '../../utils/util'

const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/index/b1.jpg',
      '/images/index/b2.jpg',
      '/images/index/b3.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,
  },

  onPhoneTap(e) {
    makePhoneCall('18261149716')
  },

  onItem1(e){
    app.globalData.curIndex = 0;
    wx.switchTab({
      url: '/pages/category/category',
    })
  },

  onItem2(e) {
    app.globalData.curIndex = 1;
    wx.switchTab({
      url: '/pages/category/category',
    })
  },

  onShareAppMessage() {
    return {
      title: '南京青春盛焰照相馆',
      path: '/pages/index/index'
    }
  }
})