const api = require('../../utils/api.js');

const app = getApp();
Page({
  data: {
    trip: {},
    options: null,
    imgList: [
      {
        "id": "1",
        "title": "校园写真",
        "img": "/images/subject1/1.png"
      },
      {
        "id": "2",
        "title": "拍摄于的哈哈发卡了点发货阿款到发货",
        "img": "/images/subject1/2.png"
      },
      {
        "id": "3",
        "title": "",
        "img": "/images/subject1/3.png"
      },
      {
        "id": "4",
        "title": "",
        "img": "/images/subject1/4.png"
      },
      {
        "id": "5",
        "title": "",
        "img": "/images/subject1/5.png"
      },
      {
        "id": "6",
        "title": "",
        "img": "/images/subject1/1.png"
      },
      {
        "id": "7",
        "title": "毕业照",
        "img": "/images/subject1/1.png"
      },
      {
        "id": "8",
        "title": "服装出租",
        "img": "/images/subject1/1.png"
      }
    ]
  },
  onReady() {
    const self = this;
    wx.setNavigationBarTitle({
      title: "校园摄影专题"
    });
  },
  onLoad(options) {
    const self = this;
    const id = options.id;
    self.setData({
      options
    });
  }
});
