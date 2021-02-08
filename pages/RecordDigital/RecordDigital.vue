<template>
	<view class="content">
		<view v-show="isLogin">
      <view class="pic">
        <image mode="widthFix" src="../../static/image/2.png"></image>
        <view class="tips">点击下方按钮开始扫描档案吧</view>
      </view>
      <view class="photo">
        <image src="../../static/image/3.png" @click="open('RecordDigitalItem')"></image>
      </view>
    </view>
    <view v-show="!isLogin" class="no-login">
      <view class="title">登录使用全部功能</view>
      <u-button :custom-style="customStyle" hover-class="none" @click="open('/pages/Login/Login')">点击登录</u-button>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        isLogin: false,
        customStyle: {
          background: 'linear-gradient(to right, #9181ff , #ab5bd2);',
          color: '#fff'
        }
			}
		},
    onLoad () {
      let self = this
      uni.getStorage({
        key: 'userInfo',
        success: function (res) {
          console.log('---')
          self.isLogin = true
        }
      })
    },
    methods: {
      open (url) {
        console.log(url)
        uni.navigateTo({
          url: url
        })
      }
    }
	}
</script>

<style lang="scss">
  .pic{
    width: 100%;
    padding-left: 180rpx;
    height: 600rpx;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
    image{
      width: 500rpx;
    }
    .tips{
      padding-top: 20rpx;
      padding-left: 20rpx;
      color: grey;
    }
  }
  .photo{
    width: 100%;
    text-align: center;
    height: calc(100% - 600rpx);
    display: flex;
    align-items: center;
    justify-content: center;
    image{
      width: 120rpx;
      height: 120rpx;
    }
  }
  .no-login{
    padding: 200rpx 100rpx;
    .title{
      text-align: center;
      padding-bottom: 30rpx;
    }
  }
</style>
