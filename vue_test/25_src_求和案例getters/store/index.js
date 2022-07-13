//该文件用于创建vuex中最为核心的store
//引入vue
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//应用vuex插件
Vue.use(Vuex)
//准备actions 用于响应组件中的动作
const actions = {
    //jia(){}
    /*  jia: function (context, value) {
         context.commit('JIA', value) //交给mutations处理
     },
     jian(context, value) {
         context.commit('JIAN', value)
     }, */
    jiaOdd(context, value) {
        if (context.state.sum & 1) {
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500);
    }

}
//准备mutations 用于操作数据(state)
const mutations = {
    JIA(state, value) {
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    },
}
//准备state 用于存储数据
const state = {
    sum: 0 //当前的和
}
//准备getters用于将state中的数据进行加工, 函数的参数是state
const getters = {
    bigSum(state) {
        return state.sum * 10;
    }
}

//创建store 并传入配置对象 并向外暴露以至于可以被导出 
export default new Vuex.Store({
    actions: actions, //可以简写成actions 下面也同理
    mutations: mutations,
    state: state,
    getters,
})
