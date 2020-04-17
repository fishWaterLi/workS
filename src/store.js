import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    language: localStorage.getItem('language') ? localStorage.getItem('language') : 'en',
    status: localStorage.getItem('userInfo') ? true : false, //是否登录
    bindGoogle: false, // 是否存储谷歌
    bindFundPwd: false, //绑定资金密码
    message: '',
    loginFlag: false,
    Authorization:localStorage.getItem('Authorization')?localStorage.getItem('Authorization'):''

};
const mutations = {
    changeLanguage(state, language) {
        localStorage.setItem('language', language);
        state.language = language;
    },
    changeStatus(state, status) {
        state.status = status;
    },
    changeGoogle(state, google) {
        state.bindGoogle = google;
    },
    changeFundPwd(state, fundPwd) {
        state.bindFundPwd = fundPwd;
    },
    message(state, status) {
        state.message = status;
    },
    changeLoginFlag(state, loginFlag) {
        state.loginFlag = loginFlag;
    },
    changeLogin(state,user){
        state.Authorization=user.Authorization;
        localStorage.setItem('Authorization',user.Authorization)
      }
};
const actions = {
    subLanguage(context, val) {
        context.commit('changeLanguage', val)
    }
};
const getters = {
    getLanguage(state) {
        return state.language
    },
    getStatue() {
        state.status = localStorage.getItem('userInfo') ? true : false;
        return state.status
    },
    getGoogle(state) {
        return state.bindGoogle
    },
    getFundPwd(state) {
        return state.bindFundPwd
    },
};
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});