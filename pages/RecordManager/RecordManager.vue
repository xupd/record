<template>
	<view class="content">
		<view class="head">
      <u-search placeholder="搜索" shape="square"></u-search>
    </view>
    <view class="record-list">
      <view class="list-title">
        <view class="field"></view>
        <view class="field" style="flex: 3;">档案名称</view>
        <view class="field" style="flex: 2;">时间</view>
      </view>
      <scroll-view class="list" scroll-y="true" @scrolltolower="scrolltolower">
        <view class="list-item" v-for="item in recordList" :key="item.id">
          <view class="field">
            <u-checkbox v-model="item.checked" @change="checkboxGroupChange(item)"></u-checkbox>
          </view>
          <view class="field" style="flex: 3;">{{item.name}}</view>
          <view class="field" style="flex: 2;">{{item.date}}</view>
        </view>
        <view style="height: 30rpx;"></view>
        <u-loadmore :status="status" :loadText="loadText" @loadmore="complete"/>
      </scroll-view>
      <view class="btn">
        <u-button plain size="medium" type="error" @click="del">删除</u-button>
        <u-button plain size="medium" type="primary" @click="exportRecord">导出</u-button>
      </view>
    </view>
    <u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
        selectList: [],
				recordList: [
          {
            id: '1',
            name: '扣扣扣扣',
            date: '2020/08/12',
            checked: false
          },
          {
            id: '11',
            name: '看见上课的马克思面对',
            date: '2020/08/12',
            checked: false
          },
          {
            id: '18',
            name: 'aksdmk',
            date: '2020/08/12',
            checked: false
          }
        ],
        status: 'loadmore',
        loadText: {
          loadmore: '点击或上拉加载更多',
          loading: '正在加载，请喝杯茶...',
          nomore: '我也是有底线的'
        }
			}
		},
    onReady () {
    },
    methods: {
      checkboxGroupChange (item) {
        let flag = false
        for (let i = 0; i < this.selectList.length; i++) {
          if (this.selectList[i].id === item.id) {
            flag = true
            this.selectList.splice(i, 1)
            break
          }
        }
        if (!flag) {
          this.selectList.push(item)
        }
      },
      del () {
        if (this.selectList.length === 0) {
          this.$refs.uToast.show({
            title: '请先选择档案！',
            type: 'warning'
          })
          return
        }
        console.log(this.selectList)
      },
      exportRecord () {
        if (this.selectList.length === 0) {
          this.$refs.uToast.show({
            title: '请先选择档案！',
            type: 'warning'
          })
          return
        }
        console.log(this.selectList)
      },
      scrolltolower () {
        this.complete()
      },
      complete () {
        this.status = 'loading'
        setTimeout(() => {
          this.status = 'loadmore'
          this.recordList = [
            {
              id: '2',
              name: '哈哈哈',
              date: '2020/08/12',
              checked: false
            },
            {
              id: '3',
              name: '哈哈哈',
              date: '2020/08/12',
              checked: false
            },
            {
              id: '4',
              name: '哈哈哈',
              date: '2020/08/12',
              checked: false
            },
            {
              id: '5',
              name: '哈哈哈',
              date: '2020/08/12',
              checked: false
            },
            {
              id: '6',
              name: '哈哈哈',
              date: '2020/08/12',
              checked: false
            },
            {
              id: '7',
              name: '哈哈哈',
              date: '2020/08/12',
              checked: false
            },
            {
              id: '8',
              name: '哈哈哈',
              date: '2020/08/12',
              checked: false
            },
            {
              id: '9',
              name: '哈哈哈',
              date: '2020/08/12',
              checked: false
            },
            {
              id: '10',
              name: '哈哈哈',
              date: '2020/08/12',
              checked: false
            }
          ]
        }, 2000)
      }
    }
	}
</script>

<style lang="scss">
  .content{
  }
  .head{
    width: 100%;
    height: 360rpx;
    background-image: url('~@/static/image/4.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 30rpx 40rpx;
  }
  .record-list{
    width: 100%;
    height: calc(100% - 360rpx);
    .list-title{
      width: 100%;
      height: 80rpx;
      display: flex;
      border-bottom: 1px solid #909399;
    }
    .list{
      width: 100%;
      height: calc(100% - 180rpx);
      .list-item{
        display: flex;
        width: 100%;
        min-height: 80rpx;
        padding: 15rpx 0;
      }
    }
    .field{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .btn{
      width: 100%;
      height: 100rpx;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
</style>
