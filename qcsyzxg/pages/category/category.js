
const windowWidth = wx.getSystemInfoSync().windowWidth;

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeTab: 0, //选中tab下标
    tabTitles: ["婚纱摄影", "艺术写真", "团体摄影", "服装租赁"]
  },

  onShow(){
    this.setData({
      activeTab: app.globalData.curIndex
    })
  },

  onLoad(options){
    
  },

  /**
   * 点击tab
  */
  selectTab: function (e) {
    console.log(e);
    //设置选中样式
    let toIndex = e.currentTarget.dataset.index;
    let fromIndex = this.data.activeTab;
    if (toIndex === fromIndex) {
      return;
    }
    let offSetLeft = e.currentTarget.offsetLeft;
    this.scrollTopBar(offSetLeft, toIndex);

    this.setData({
      activeTab: toIndex
    });

    app.globalData.curIndex = toIndex;
  },

  /**
   * 自适应tabBar选中位置
   */
  scrollTopBar: function (offSetLeft, index) {
    let that = this;
    var nodeId = "#item-" + index;
    wx.createSelectorQuery().select(nodeId).boundingClientRect(function (rect) {
      var res = wx.getSystemInfoSync();
      let targetOffSetLeft = offSetLeft - (res.windowWidth / 2) + (rect.width / 2);
      that.setData({
        scrollLeft: targetOffSetLeft
      });
    }).exec();
  },

  swiperChange: function (e) {
    console.log("swiperChange")
    var that = this;
    let endIndex = e.detail.current;
    app.globalData.curIndex = endIndex;

    wx.createSelectorQuery().selectAll('.scroll-header-item-wraper').boundingClientRect(function (rects) {
      var offsetLeft = 0;
      for (var i = 0; i < endIndex; i++) {
        offsetLeft += rects[i].width;
      }
      that.scrollTopBar(offsetLeft, endIndex);
    }).exec();
    
    this.setData({
      activeTab: e.detail.current
    });
  }
})
