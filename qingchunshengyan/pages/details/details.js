// page/component/details/details.js
Page({
  data: {
    goods: [{
      goods_id: 1,
      image: '/images/category/goods1.jpg',
      goods_name: '简历正装照',
      goods_price: '1.1起',
      detail: '这里是详细介绍。',
      parameter: '满100减10',
    }, {
      goods_id: 2,
      image: '/images/category/goods2.jpg',
      goods_name: '个人写真',
      goods_price: '1.1起',
      detail: '这里是详细介绍。',
      parameter: '满100减10',
    }, {
      goods_id: 3,
      image: '/images/category/goods3.jpg',
      goods_name: '团体摄影',
      goods_price: '1.1起',
      detail: '这里是详细介绍。',
      parameter: '满100减10',
    }, {
      goods_id: 4,
      image: '/images/category/goods4.jpg',
      goods_name: '会议摄像',
      goods_price: '1.1起',
      detail: '这里是详细介绍。',
      parameter: '满100减10',
    }, {
      goods_id: 5,
      image: '/images/category/goods5.jpg',
      goods_name: '正装租赁',
      goods_price: '1.1起',
      detail: '这里是详细介绍。',
      parameter: '满100减10',
    }, {
      goods_id: 6,
      image: '/images/category/goods6.jpg',
      goods_name: '演出服装租赁',
      goods_price: '1.1起',
      detail: '这里是详细介绍。',
      parameter: '满100减10',
    },
    ],
    curIndex: 0,
    show: false,
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.id = options.id
    this.init()
  },

  init() {
    var id = this.id
    var { goods } = this.data

    var itemIndex = goods.findIndex(item => {
      return item['goods_id'] == id
    })

    this.setData({
      good: goods[itemIndex]
    })
  },

  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  }

})