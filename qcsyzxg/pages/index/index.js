import {  makePhoneCall } from '../../utils/util'

const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/index/b1.png',
      '/images/index/b2.png',
      '/images/index/b3.png'
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

  onItem3(e) {
    app.globalData.curIndex = 2;
    wx.switchTab({
      url: '/pages/category/category',
    })
  },

  onItem4(e) {
    app.globalData.curIndex = 3;
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