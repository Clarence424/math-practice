// pages/practice/practice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    opts:[],
    firstnums:[],
    secondnums:[],
    answers:[],
    corrects:[],
    formulas:[],
    index:0,
    dindex:0,
    mFormula:'',
    tempValue:0,
    title:'',
    num:0,
    limit:0,
    preflag:false,
    nextflag:true
  },
  updateCache:function(){
    let arr = this.prepareDetail()
    wx.setStorageSync({
      key: "detail",
      data: arr
    })
  },
  prepareDetail:function(){
    let arr = []
    for (let i = 0; i < this.data.num; i++) {
      let str = this.data.firstnums[i] + this.data.opts[i]+this.data.secondnums[i] + '=' +this.data.corrects[i]
      arr.push(str)
    }
    return arr.toString()
  },
  generateRandomInts: function () {
    let arr = []
    arr.push(Math.floor(Math.random() * this.data.limit + 1))
    arr.push(Math.floor(Math.random() * this.data.limit + 1))
    arr.sort((a,b)=>{return a - b})
    return arr;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: options.title,
      limit: options.limit,
      num: options.num
    })
    this.getPracticeFormulas()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  /**
   * getPracticeFormulas
   */
  getPracticeFormulas:function(){
    let arr = []
    arr = this.generateRandomInts();
    let a = arr.shift() 
    let b = arr.shift()
    let c = a + b
    let opt = '+'
    let correct = c
    if (c > this.data.limit) {
      opt = '-'
      correct = b - a 
    }
    let first = this.data.firstnums
    first.push(b)
    let second = this.data.secondnums
    second.push(a)
    let oarr = this.data.opts
    oarr.push(opt)
    let carr = this.data.corrects
    carr.push(correct)
    let dindex = this.data.index + 1
    this.setData({
      firstnums: first,
      secondnums: second,
      corrects:carr,
      opts: oarr,
      dindex : dindex
    })
  },
  updateValue:function(e){
     let currentval = e.detail.value
     let arr = []
     arr = this.data.answers
     arr[this.data.index] = currentval
     this.setData({
       answers: arr
     })
  },
  nextTest:function(){
    let index = this.data.index + 1
    let flag = true
    let dindex = index + 1
    if (dindex == this.data.num){
       flag = false
    }
    this.setData({
      index: index,
      nextflag: flag,
      preflag:true,
      dindex: dindex
    })
    
    let len = this.data.opts.length
    if(len <= index){
      this.getPracticeFormulas()
    }
  },

  preTest:function(){
    let index = this.data.index - 1
    let flag = true
    let dindex = index + 1
    if(index == 0){
      flag = false
    }
    this.setData({
      index: index,
      preflag: flag,
      nextflag:true,
      dindex: dindex
    })
  }


  // ,
  // practice_one : function(){
  //   let a = data.dOne
  //   let b = data.dTwo
  //   let c = a + b
  //   let tempValue = 0
  //   if(c > num){
  //     if(a > b){
  //       this.setData({
  //         mFormula: mFormula + '-' + b,
  //         tempValue: a - b
  //       })
  //     }else{
  //       this.setData({
  //         mFormula: b + '-' + mFormula,
  //         tempValue:b - a
  //       })
  //     }
  //   }else{
  //     this.setData({
  //       mFormula: mFormula + '' + b,
  //       tempValue: a + b
  //     })
  //   }
  // },

  // practice_two:function(){
  //   practice_one()
  //   this.setData({
  //     dOne: data.tempValue,
  //     dTwo: generateRandomInt(data.num)
  //   })
  //   practice_one()
  // }

}) 
