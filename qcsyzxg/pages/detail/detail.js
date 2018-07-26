const api = require('../../utils/api.js');

const app = getApp();
Page({
  data: {
    trip: {},
    options: null,
    list: [
      {
        id: "1",
        title: "婚纱摄影",
        img1: { "id_1": "/images/cat1/cat1_1_1.jpg", "id_2": "/images/cat1/cat1_1_2.jpg", "id_3": "/images/cat1/cat1_1_3.jpg", "id_4": "/images/cat1/cat1_1_4.jpg"},
        img2: { "id_1": "/images/cat1/cat1_2_1.jpg", "id_2": "/images/cat1/cat1_2_2.jpg", "id_3": "/images/cat1/cat1_2_3.jpg" },
        img3: { "id_1": "/images/cat1/cat1_3_1.jpg", "id_2": "/images/cat1/cat1_3_2.jpg", "id_3": "/images/cat1/cat1_3_3.jpg" },
        img4: { "id_1": "/images/cat1/cat1_4_1.jpg", "id_2": "/images/cat1/cat1_4_2.jpg", "id_3": "/images/cat1/cat1_4_3.jpg", "id_4": "/images/cat1/cat1_4_4.jpg" },
      },
      {
        id: "2",
        title: "艺术写真",
        img1: { "id_1": "/images/cat2/cat2_1_1.jpg", "id_2": "/images/cat2/cat2_1_2.jpg", "id_3": "/images/cat2/cat2_1_3.jpg", "id_4": "/images/cat2/cat2_1_4.jpg" },
        img2: { "id_1": "/images/cat2/cat2_2_1.jpg", "id_2": "/images/cat2/cat2_2_2.jpg", "id_3": "/images/cat2/cat2_2_3.jpg" },
        img3: { "id_1": "/images/cat2/cat2_3_1.jpg", "id_2": "/images/cat2/cat2_3_2.jpg", "id_3": "/images/cat2/cat2_3_3.jpg" },
        img4: { "id_1": "/images/cat2/cat2_4_1.jpg", "id_2": "/images/cat2/cat2_4_2.jpg", "id_3": "/images/cat2/cat2_4_3.jpg", "id_4": "/images/cat2/cat2_4_4.jpg" },
      },
      {
        id: "3",
        title: "团体摄影",
        img1: { "id_1": "/images/cat3/cat3_1_1.jpg", "id_2": "/images/cat3/cat3_1_2.jpg", "id_3": "/images/cat3/cat3_1_3.jpg", "id_4": "/images/cat3/cat3_1_4.jpg" },
        img2: { "id_1": "/images/cat3/cat3_2_1.jpg", "id_2": "/images/cat3/cat3_2_2.jpg", "id_3": "/images/cat3/cat3_2_3.jpg" },
        img3: { "id_1": "/images/cat3/cat3_3_1.jpg", "id_2": "/images/cat3/cat3_3_2.jpg", "id_3": "/images/cat3/cat3_3_3.jpg" }
      },
      {
        id: "4",
        title: "服装租赁",
        img1: { "id_1": "/images/cat4/cat4_1_1.jpg", "id_2": "/images/cat4/cat4_1_2.jpg", "id_3": "/images/cat4/cat4_1_3.jpg", "id_4": "/images/cat4/cat4_1_4.jpg" },
        img2: { "id_1": "/images/cat4/cat4_2_1.jpg", "id_2": "/images/cat4/cat4_2_2.jpg", "id_3": "/images/cat4/cat4_2_3.jpg", "id_4": "/images/cat4/cat4_2_4.jpg" },
        img3: { "id_1": "/images/cat4/cat4_3_1.jpg", "id_2": "/images/cat4/cat4_3_2.jpg", "id_3": "/images/cat4/cat4_3_3.jpg", "id_4": "/images/cat4/cat4_3_4.jpg" },
      }
    ]
  },

  onReady() {
  },
  
  onLoad(options) {
    this.category = options.cat
    this.sub_category = options.sub
    this.title = options.title

    wx.setNavigationBarTitle({
      title: this.title,
    })

    var { list } = this.data
    var data_cat = list[this.category - 1]
    var imgList = data_cat["img" + this.sub_category]

    this.setData({
      imgList: imgList
    })
  },

  onPhoneTap(e) {
    makePhoneCall('18261149716')
  }
});
