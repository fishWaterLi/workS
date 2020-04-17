import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './filters';
import zhCN from 'iview/dist/locale/zh-CN'
import enUS from 'iview/dist/locale/en-US'
import jaJP from 'iview/dist/locale/ja-JP'
import koKR from 'iview/dist/locale/ko-KR'
import ruRU from 'iview/dist/locale/ru-RU'
import en from './locales/en'
import zh from './locales/zh'
import ja from './locales/japanese'
import ko from './locales/korean'
import ru from './locales/russian'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueI18n from 'vue-i18n'
import axios from './axios/http'
import common from './common'
import SvgIcon from 'vue-svgicon'
Vue.use(SvgIcon, {
    tagName: 'svg-icon'
});
Vue.use(common)
Vue.use(axios)
Vue.use(VueI18n)
Vue.use(iView)
Vue.use(iView, {
    i18n: (key, value) => i18n.t(key, value)
})
const i18n = new VueI18n({
    messages: {
        'zh': Object.assign( zhCN, zh),
        'en': Object.assign( enUS, en),
        'ja': Object.assign( jaJP, ja),
        'ko': Object.assign( koKR, ko),
        'ru': Object.assign( ruRU, ru),
    },
    silentTranslationWarn: true,
})

Object.keys(filters).forEach(key => { //过滤器挂载在Vue上
    Vue.filter(key, filters[key])
})
Vue.config.productionTip = false

let vue = new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')

export default vue;