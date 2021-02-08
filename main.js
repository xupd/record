import Vue from 'vue'
import App from './App'
import uView from "uview-ui"

Vue.use(uView)
Vue.config.productionTip = false
Vue.prototype.$request = (data) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: 'http://8.129.53.138:9000/sers/reqservice',
      method: 'POST',
      data: {
        b: data.data,
        h: {
          tradecode: data.code
        }
      },
      success: (res) => {
        resolve(res.data)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
