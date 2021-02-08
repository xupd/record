<template>
	<view class="content">
		<view class="box">
      <u-form :model="form" ref="uForm" label-width="200">
        <u-form-item label="档案名称" prop="name">
          <u-input disabled v-model="form.name" />
        </u-form-item>
        <u-form-item label="事件发生事件" prop="event">
          <u-input disabled v-model="form.event" />
        </u-form-item>
        <u-form-item label="档案内容" prop="content">
          <u-input disabled v-model="form.content" type="textarea"/>
        </u-form-item>
      </u-form>
      <view class="photo-list">
        <view class="photo-item" v-for="(item, index) in photoList" :key="index">
          <image :src="item.image" @click="openImage(item)"></image>
        </view>
      </view>
      <u-popup v-model="show" mode="center">
        <view class="popup-image">
          <image mode="widthFix" :src="bigImage"></image>
        </view>
      </u-popup>
    </view>
    <view class="btn">
      <tui-button type="primary" plain @click="back">返回</tui-button>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
				  name: '哈哈哈',
				  event: '酷暑难当',
				  content: '酷暑难当酷暑难当酷暑难当酷暑难当酷暑难当酷暑难当酷暑难当酷暑难当酷暑难当酷暑难当酷暑难当酷暑难当'
				},
        photoList: [
          {
            image: '/static/image/1.png'
          },
          {
            image: '/static/image/1.png'
          },
          {
            image: '/static/image/1.png'
          },
          {
            image: '/static/image/1.png'
          },
          {
            image: '/static/image/1.png'
          },
          {
            image: '/static/image/1.png'
          },
          {
            image: '/static/image/1.png'
          },
          {
            image: '/static/image/1.png'
          },
          {
            image: '/static/image/1.png'
          },
          {
            image: '/static/image/1.png'
          },
          {
            image: '/static/image/1.png'
          },
          {
            image: '/static/image/1.png'
          },
          {
            image: '/static/image/1.png'
          },
          {
            image: '/static/image/1.png'
          },
          {
            image: '/static/image/1.png'
          }
        ],
        bigImage: '',
        show: false
			}
		},
		methods: {
			openImage (item) {
			  this.bigImage = item.image
			  this.show = true
			},
      back () {
        uni.navigateBack()
      }
		}
	}
</script>

<style lang="scss">
  .content{
    padding: 30rpx;
  }
  .box{
    width: 100%;
    height: calc(100% - 110rpx);
    overflow-y: auto;
    margin-bottom: 20rpx;
  }
  .photo-list{
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    padding-top: 20rpx;
  }
  .photo-item {
    width: 230rpx;
    height: 230rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    image {
      width: 200rpx;
      height: 200rpx;
    }
  }
  .popup-image{
    width: 700rpx;
    image{
      width: 100%;
    }
  }
  .btn{
    width: 80%;
    margin-left: 10%;
    height: 100rpx;
  }
</style>
