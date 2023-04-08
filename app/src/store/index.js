import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import search from './search'
import { reqCategoryList } from '@/api';

Vue.use(Vuex)
const state = {
    // count: 1

}
export default new Vuex.Store({
    //存储数据
    state,
    //理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
    getters: {},
    //修改state的唯一手段
    mutations: {
        // ADD(state) {
        //     state.count++
        // }

    },
    //处理action,可以书写自己的业务逻辑，也可处理异步
    actions: {
        // add({ commit }) {
        //     commit("ADD")
        // }

    },
    modules: {
        home,
        search
    }
})