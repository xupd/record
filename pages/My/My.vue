<template>
	<view class="content">
    <view class="c-head">
      <view class="c-left">
        <u-avatar size="large" src="http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg"></u-avatar>
      </view>
      <view class="c-right">
        <view class="tip">昵称：小小熊</view>
        <view class="tip">个性签名：吃吃吃吃吃吃</view>
      </view>
    </view>
    <u-cell-group>
      <u-cell-item title="会员">
        <image mode="widthFix" class="img" slot="icon" src="../../static/image/vip.png"></image>
      </u-cell-item>
      <u-cell-item title="使用说明">
        <image mode="widthFix" class="img" slot="icon" src="../../static/image/sm.png"></image>
      </u-cell-item>
      <u-cell-item title="设置">
        <image mode="widthFix" class="img" slot="icon" src="../../static/image/sz.png"></image>
      </u-cell-item>
      <u-cell-item title="联系我们">
        <image mode="widthFix" class="img" slot="icon" src="../../static/image/lx.png"></image>
      </u-cell-item>
    </u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {
		},
		methods: {
		}
	}
</script>

<style lang="scss">
  .c-head{
    width: 100%;
    padding: 30rpx 40rpx;
    height: 260rpx;
    background: -webkit-linear-gradient(left, #9181ff , #ab5bd2); /* Safari 5.1 - 6.0 */ 
    background: -o-linear-gradient(right, #9181ff, #ab5bd2); /* Opera 11.1 - 12.0 */ 
    background: -moz-linear-gradient(right, #9181ff, #ab5bd2); /* Firefox 3.6 - 15 */ 
    background: linear-gradient(to right, #9181ff , #ab5bd2); /* 标准的语法 */
    display: flex;
    .c-left{
      width: 150rpx;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .c-right{
      flex: auto 1 1;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-flow: wrap row;
      .tip{
        width: 100%;
        padding: 10rpx;
        color: #fff;
      }
    }
  }
  .img{
    width: 60rpx;
    padding-right: 30rpx;
  }
</style>
