import {  makePhoneCall } from '../../utils/util'

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

  onShareAppMessage() {
    return {
      title: '南京青春盛焰照相馆',
      path: '/pages/index/index'
    }
  }
})