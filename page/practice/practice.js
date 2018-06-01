// pages/practice/practice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formulas:[],
    index:0,
    mFormula:'',
    corrects:[],
    tempValue:0,
    title:'',
    num:0,
    limit:''
  },

  generateRandomInt: function (num) {
    let a = Math.floor(Math.random() * num + 1);
    return a;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: options.title,
      num: options.num,
      limit: options.limit,
      dOne: Math.floor(Math.random() * options.limit + 1),
      dTwo: Math.floor(Math.random() * options.limit + 1)
    })
    getPracticeFormulas()
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
    switch (data.limit) {
      case 20:
        //加减法
        practice_one()
        break;
      case 1:
        //连加连减
        practice_two()
        break;
      default:
        //n 与 case 1 和 case 2 不同时执行的代码
    }
  },
  practice_one : function(){
    let a = data.dOne
    let b = data.dTwo
    let c = a + b
    let tempValue = 0
    if(c > num){
      if(a > b){
        this.setData({
          mFormula: mFormula + '-' + b,
          tempValue: a - b
        })
      }else{
        this.setData({
          mFormula: b + '-' + mFormula,
          tempValue:b - a
        })
      }
    }else{
      this.setData({
        mFormula: mFormula + '+' + b,
        tempValue: a + b
      })
    }
  },

  practice_two:function(){
    practice_one()
    this.setData({
      dOne: data.tempValue,
      dTwo: generateRandomInt(data.num)
    })
    practice_one()
  }

})