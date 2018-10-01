var bids = [
  {no: '53***12', id: '8650'},
  {no: '53***12', id: 'zzzz'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'},
  {no: '53***12'}
]

var result = []
var tmpRow = []
for (var i = 0, len = bids.length; i < len; i++) {
  if (tmpRow.length > 0  && tmpRow.length % 10 === 0) {
    result.push(tmpRow)
    tmpRow = []
  }
  tmpRow.push(bids[i])
}

var zhongbiaoImgs = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg',
  '06.jpg',
  '07.jpg',
  '08.jpg',
  '09.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg'
]
exports.pugData = {
  history: [{
    month: 201808,
    odds: '1/130',
    oddspercen: '18%',
    link: 'https://mp.weixin.qq.com/s/JTmj-2JPho0XsMkLhhMu6A'
  }, {
    month: 201807,
    odds: '1/130',
    oddspercen: '0%',
    link: 'https://mp.weixin.qq.com/s/JTmj-2JPho0XsMkLhhMu6A'
  }, {
    month: 201806,
    odds: '1/130',
    oddspercen: '0%',
    link: 'https://mp.weixin.qq.com/s/JTmj-2JPho0XsMkLhhMu6A'
  }, {
    month: 201805,
    odds: '1/130',
    oddspercen: '0%',
    link: 'https://mp.weixin.qq.com/s/JTmj-2JPho0XsMkLhhMu6A'
  }, {
    month: 201804,
    odds: '53/111',
    oddspercen: '47.7%',
    link: 'https://mp.weixin.qq.com/s/cGuFbh-T__yD_gz1Kg2cSQ'
  }, {
    month: 201803,
    odds: '16/107',
    oddspercen: '14.95%',
    link: 'https://mp.weixin.qq.com/s/29Z0uhl1qZ9_OdcwmxGwUA'
  }, {
    month: 201802,
    odds: '7/101',
    oddspercen: '6.93%',
    link: 'https://mp.weixin.qq.com/s/s0UFGREl_Q-QHj8Ew_vLXg'
  }, {
    month: 201801,
    odds: '23/106',
    oddspercen: '21.70%',
    link: 'https://mp.weixin.qq.com/s/5KT0Xaa9jemI5KmLs14QYw'
  }, {
    month: 201712,
    odds: '0/95',
    oddspercen: '0%',
    link: 'https://mp.weixin.qq.com/s/HuioGT7Z78N2-1ltn_ElJQ'
  }, {
    month: 201711,
    odds: '25/83',
    oddspercen: '30.12%',
    link: 'https://mp.weixin.qq.com/s/0T5UcrHMX5QOb2sGsARZkw'
  }, {
    month: 201710,
    odds: '18/79',
    oddspercen: '22.8%',
    link: 'https://mp.weixin.qq.com/s/sl6RtTnhIyOYAA_6sgjg1Q'
  }, {
    month: 201709,
    odds: '12/81',
    oddspercen: '14.8%',
    link: null
  }, {
    month: 201708,
    odds: '2/72',
    oddspercen: '2.78%',
    link: null
  }, {
    month: 201707,
    odds: '23/73',
    oddspercen: '31.50%',
    link: null
  }, {
    month: 201706,
    odds: '1/50',
    oddspercen: '2%',
    link: null
  }, {
    month: 201705,
    odds: '14/61',
    oddspercen: '22.95%',
    link: null
  }],
  currMonth: {
    month: 9,
    tableCol: 10,
    shaidan: null,
    oddspercen: '33%',
    odds: '33/100',
    result: result,
    zhongbiaoImgs: zhongbiaoImgs,
    jianbao: [{
      price: 87300,
      range: '56.7-56.9',
      size: '200ms',
      desc: '区间小，较难中标，56.9-58.1 之间的单子仍旧能够提交成功，但是因为出价太晚而未能中标'
    }, {
      price: 87400,
      range: '57.3-58.1',
      size: '800ms',
      desc: '容易中标'
    }, {
      price: 87500,
      range: '57.9-58.1',
      size: '200ms',
      desc: '区间小，较难中标'
    }, {
      price: 87600,
      range: '没有区间',
      size: '0ms',
      desc: '不可能中标'
    }],
  }
}
