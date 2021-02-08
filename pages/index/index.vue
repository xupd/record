<template>
	<view class="content">
    <view class="c-head">
      <u-search placeholder="搜索" shape="square" :disabled="true" :show-action="false"></u-search>
    </view>
    <view class="c-body">
      <view class="cb" style="background-color: #9181ff;">档案知识</view>
      <view class="cb" style="background-color: #ab5bd2;">政策、法律</view>
    </view>
    <view class="c-list">
      <u-divider>新闻列表</u-divider>
      <view class="cl-item" v-for="(item, index) in newsList" :key="index">
        <view class="left">
          <image :src="item.image"></image>
        </view>
        <view class="right">
          <view class="r-top">{{item.title}}</view>
          <view class="r-bottom">{{item.content}}</view>
        </view>
      </view>
    </view>
    <u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
        newsList: []
			}
		},
		onLoad() {
      this.newsList = [
        {
          image: '/static/image/1.png',
          title: '为小微激发新动能',
          content: '截止11月末，该联社小微企业贷款余额为94.65亿元...'
        },
        {
          image: '/static/image/1.png',
          title: '为小微激发新动能',
          content: '截止11月末，该联社小微企业贷款余额为94.65亿元...'
        },
        {
          image: '/static/image/1.png',
          title: '为小微激发新动能',
          content: '截止11月末，该联社小微企业贷款余额为94.65亿元...'
        },
        {
          image: '/static/image/1.png',
          title: '为小微激发新动能',
          content: '截止11月末，该联社小微企业贷款余额为94.65亿元...'
        },
        {
          image: '/static/image/1.png',
          title: '为小微激发新动能',
          content: '截止11月末，该联社小微企业贷款余额为94.65亿元...'
        },
        {
          image: '/static/image/1.png',
          title: '为小微激发新动能',
          content: '截止11月末，该联社小微企业贷款余额为94.65亿元...'
        },
        {
          image: '/static/image/1.png',
          title: '为小微激发新动能',
          content: '截止11月末，该联社小微企业贷款余额为94.65亿元...'
        }
      ]
      this.init()
    },
		methods: {
      search () {
      },
      getOpenid (code) {
        let self = this
        this.$request({
          code: 'codetologin',
          data: {
            code: code
          }
        }).then(res => {
          if (res.retcode == '1111') {
             console.log(res)
             if (res.data.userInfo) {
               
             } else {
              uni.setStorage({
                key: 'openid',
                data: res.data.openid
              })
             }
          } else {
            self.$refs.uToast.show({
              title: res.retmsg,
              type: 'error'
            })
          }
        }).catch(err => {
          console.log(err)
          self.$refs.uToast.show({
            title: err.errMsg,
            type: 'error'
          })
        })
      },
      init () {
        let self = this
        uni.getStorage({
          key: 'default_openid',
          success: function (res) {
            console.log(res)
          },
          fail: function (err) {
            console.log(err)
            wx.login({
              success (res) {
                console.log(res)
                self.getOpenid(res.code)
              }
            })
          }
        })
      }
		}
	}
</script>

<style lang="scss">
  .c-head{
    width: 100%;
    padding: 30rpx 40rpx;
    margin-bottom: 30rpx;
    height: 200rpx;
    background: -webkit-linear-gradient(left, #9181ff , #ab5bd2); /* Safari 5.1 - 6.0 */ 
    background: -o-linear-gradient(right, #9181ff, #ab5bd2); /* Opera 11.1 - 12.0 */ 
    background: -moz-linear-gradient(right, #9181ff, #ab5bd2); /* Firefox 3.6 - 15 */ 
    background: linear-gradient(to right, #9181ff , #ab5bd2); /* 标准的语法 */
  }
  .c-body{
    width: 100%;
    display: flex;
    justify-content: space-around;
    .cb{
      width: 300rpx;
      height: 150rpx;
      background-color: red;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32rpx;
    }
  }
  .c-list{
    width: 100%;
    padding: 30rpx 38rpx;
    .cl-item{
      width: 100%;
      min-height: 180rpx;
      margin-top: 30rpx;
      display: flex;
      flex-wrap: nowrap;
      .left{
        width: 230rpx;
        height: 100%;
        image{
          width: 100%;
          height: 180rpx;
        }
      }
      .right{
        width: calc(100% - 250rpx);
        height: 100%;
        margin-left: 20rpx;
        .r-top{
          width: 100%;
          min-height: 60rpx;
          padding: 10rpx;
          font-size: 30rpx;
        }
        .r-bottom{
          width: 100%;
          min-height: 120rpx;
          padding: 10rpx;
          font-size: 26rpx;
          color: gray;
        }
      }
    }
  }
</style>
