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
    category: [
      {
        "category_id": "1",
        "title": "证件照",
        "icon": "/images/index/icon_1.png"
      },
      {
        "category_id": "2",
        "title": "个人写真",
        "icon": "/images/index/icon_1.png"
      },
      {
        "category_id": "3",
        "title": "儿童摄影",
        "icon": "/images/index/icon_1.png"
      },
      {
        "category_id": "4",
        "title": "古装摄影",
        "icon": "/images/index/icon_1.png"
      },
      {
        "category_id": "5",
        "title": "婚纱照",
        "icon": "/images/index/icon_1.png"
      },
      {
        "category_id": "6",
        "title": "团体照",
        "icon": "/images/index/icon_1.png"
      },
      {
        "category_id": "7",
        "title": "毕业照",
        "icon": "/images/index/icon_1.png"
      },
      {
        "category_id": "8",
        "title": "服装出租",
        "icon": "/images/index/icon_1.png"
      }
    ]
  },

  onShareAppMessage() {
    return {
      title: '南京青春盛焰照相馆',
      path: '/pages/index/index'
    }
  }
})