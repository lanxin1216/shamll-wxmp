// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //用户名
    userName: '',
    //密码
    password: '',
    //是否显示注册
    isRegister:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      isRegister: options.isRegister == 0
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  /**
   * 输入框的值
   */
  getInputVal: function(e) {
    const type = e.currentTarget.dataset.type
    if (type == 'account') {
      this.setData({
        userName: e.detail.value
      })
    } else if (type == 'password') {
      this.setData({
        password: e.detail.value
      })
    }
  },

  /**
   * 切换注册\登录
   */
  handleChangeShowType() {
    let str = this.onAddToFavorites.isRegister ? '1' : '0'
    wx.redirectTo({
      url: '/pages/login/login?isRegister=' + str
    })
  },

  /**
   * 注册\登录按钮
   */
  handleLoginOrRegister() {
    const that = this
    if (!this.data.userName.trim()) {
      wx.showToast({
        title: '请输入用户名',
        icon: 'none'
      })
      return
    }

    if(this.data.isRegister) {
      that.setData({
        userName: '',
        password: '',
        isRegister: !that.data.isRegister
      })
      wx.showToast({
        title: '注册成功，请登录',
        icon: 'none',
      })
    }else {
      wx.switchTab({
        url: '/pages/index/index',
      })
    }
  }
})