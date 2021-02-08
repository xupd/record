<template>
  <view class="content">
    <view class="photo-list">
      <view class="photo-item" v-for="(item, index) in photoList" :key="index">
        <image :src="item.image" @click="openImage(item)"></image>
        <u-button plain size="mini" type="error" @click="del(index)">删除</u-button>
      </view>
      <view class="photo-item">
        <u-icon @click="takePhoto" name="plus" color="#ab5bd2" size="80"></u-icon>
      </view>
    </view>
    <view class="btn">
      <tui-button type="primary" plain @click="save">保存</tui-button>
    </view>
    <tui-picture-cropper v-show="cropperShow" @cropper="cropper" :maxWidth="375" :maxHeight="667" :limitMove="false" :imageUrl="imageUrl" :disableRotate="false"></tui-picture-cropper>
    <u-popup v-model="show" mode="center">
      <view class="popup-image">
        <image mode="widthFix" :src="bigImage"></image>
      </view>
    </u-popup>
    <u-select v-model="dshow" :list="list" title="请选择档案类别" @confirm="confirm"></u-select>
    <u-popup v-model="showinput" mode="center" :closeable="true" :mask-close-able="false" @close="close">
      <view class="i-popup">
        <u-form :model="form" ref="uForm" label-width="200">
          <u-form-item label="档案名称" prop="name">
            <u-input placeholder=" " :border="true" v-model="form.name" />
          </u-form-item>
          <u-form-item label="事件发生事件" prop="event">
            <u-input placeholder=" " :border="true" v-model="form.event" />
          </u-form-item>
          <u-form-item label="档案内容" prop="content">
            <u-input placeholder=" " :border="true" v-model="form.content" type="textarea"/>
          </u-form-item>
        </u-form>
        <u-button type="primary" @click="submit">提交</u-button>
      </view>
    </u-popup>
    <u-toast ref="uToast" />
  </view>
</template>

<script>
  export default {
    data() {
      return {
        photoList: [],
        imageUrl: '',
        cropperShow: false,
        show: false,
        bigImage: '',
        dshow: false,
        list: [],
        showinput: false,
        form: {
          name: '',
          event: '',
          content: ''
        },
        rules: {
          name: [
            {
              required: true,
              message: '请输入档案名称',
              trigger: 'blur,change'
            }
          ],
          event: [
            {
              required: true,
              message: '请输入事件发生事件',
              trigger: 'blur,change'
            }
          ],
          content: [
            {
              required: true,
              message: '请输入档案内容',
              trigger: 'blur,change'
            }
          ]
        }
      }
    },
    onReady() {
      this.takePhoto()
      this.list = [
        {
          value: '1',
          label: '工商档案'
        }, {
          value: '2',
          label: '财务档案'
        }, {
          value: '3',
          label: '人事档案'
        }, {
          value: '4',
          label: '业务档案'
        }, {
          value: '5',
          label: '其他档案'
        }
      ]
    },
    methods: {
      takePhoto() {
        let self = this
        uni.chooseImage({
          count: 1, //默认9
          sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
          success: function(res) {
            self.cropperShow = true
            console.log(JSON.stringify(res.tempFilePaths))
            self.imageUrl = res.tempFilePaths[0]
          }
        })
      },
      cropper (obj) {
        this.cropperShow = false
        this.photoList.push({
          image: obj.url
        })
      },
      save () {
        if (this.photoList.length === 0) {
          this.$refs.uToast.show({
            title: '请点击加号拍照',
            type: 'warning'
          })
          return
        }
        this.dshow = true
      },
      openImage (item) {
        this.bigImage = item.image
        this.show = true
      },
      confirm () {
        this.showinput = true
        this.$nextTick(() => {
          this.$refs.uForm.setRules(this.rules)
        })
      },
      submit () {
        this.$refs.uForm.validate(valid => {
          if (valid) {
            console.log('验证通过')
            uni.redirectTo({
              url: 'RecordDigitalSuccess'
            })
          } else {
            console.log('验证失败')
          }
        })
      },
      close () {
        this.$refs.uForm.resetFields()
        this.form.name = ''
        this.form.event = ''
        this.form.content = ''
      },
      del (index) {
        this.photoList.splice(index, 1)
      }
    }
  }
</script>

<style lang="scss">
  .content{
    padding: 30rpx 0;
  }
  .photo-list{
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    overflow-y: auto;
    height: calc(100% -  100rpx);
    padding-bottom: 30rpx;
  }
  .photo-item {
    width: 250rpx;
    height: 290rpx;
    flex-flow: row wrap;
    display: flex;
    align-items: center;
    justify-content: center;
    image {
      width: 200rpx;
      height: 200rpx;
      margin-bottom: 10rpx;
    }
  }
  .btn{
    width: 80%;
    margin-left: 10%;
    height: 100rpx;
  }
  .popup-image{
    width: 700rpx;
    image{
      width: 100%;
    }
  }
  .i-popup{
    width: 700rpx;
    padding: 70rpx 40rpx 40rpx 40rpx;
  }
</style>
