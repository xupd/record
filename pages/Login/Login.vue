<template>
	<view class="content">
		<view class="title">获取头像和昵称</view>
    <view class="title2">请允许我们获取您的头像和昵称</view>
    <view class="title3">头像和昵称将展示在会员中心</view>
    <u-button :custom-style="customStyle" hover-class="none" open-type="getUserInfo" @getuserinfo="getuserinfo">获取授权</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customStyle: {
				  background: 'linear-gradient(to right, #9181ff , #ab5bd2);',
				  color: '#fff'
				}
			};
		},
    methods: {
      getuserinfo (detail) {
        console.log(detail.detail.userInfo)
      }
    }
	}
</script>

<style lang="scss">
.content{
  padding: 100rpx;
}
.title{
  text-align: center;
  font-size: 40rpx;
  font-weight: bold;
  padding-bottom: 100rpx;
}
.title2{
  padding-bottom: 30rpx;
}
.title3{
  padding-bottom: 100rpx;
}
</style>
