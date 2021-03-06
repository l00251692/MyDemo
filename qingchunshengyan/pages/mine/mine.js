// pages/mine/mine.js
import { getUserInfo, makePhoneCall, alert } from '../../utils/util'
import { logout, getMineInfo } from '../../utils/api'

const app = getApp()
Page({
  data: {
    loginInfo: null
  },
  onLoad: function (options) {

  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    var that = this
    //用户授权则登录，否则等用户点击授权
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              that.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })

  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onPhoneTap(e) {
    makePhoneCall(e.currentTarget.dataset.phone)
  },

  callback() {
    this.onLogin()
  },
  onLogin() {
    var { loginInfo } = this.data
    if (loginInfo == null) {
      var that = this
      getApp().getLoginInfo(loginInfo => {
        if (loginInfo != null && loginInfo.is_login) {
          that.setData({
            loginInfo: loginInfo,
            userInfo: loginInfo.userInfo
          })
        }
      })
    }
  },
  onShareAppMessage() {
    return {
      title: '南京青春盛焰照相馆',
      path: '/pages/mine/mine'
    }
  }
})