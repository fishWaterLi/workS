import axios from 'axios';
import qs from 'qs';
import router from '../router';
import _this from '../main'

let CancelToken = axios.CancelToken;
// let global = 'https://www.elechash.com/api/v1'; // 服务器
let global = 'http://192.168.1.69:2233/api/v1'; // 测试
//设置默认请求头
axios.defaults.headers = {
   'Content-Type': 'application/json',
    //'Content-Type': 'application/x-www-form-urlencoded',
}
    // 请求超时的时间限制
axios.defaults.timeout = 6000
axios.defaults.baseURL = '/api/';
axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;

// 开始设置请求 发起的拦截处理
// config 代表发起请求的参数的实体
axios.interceptors.request.use(config => {
    // 得到参数中的 requestName 字段，用于决定下次发起请求，取消对应的 相同字段的请求
    // 如果没有 requestName 就默认添加一个不同的时间戳
    let cancel;
    if (localStorage.getItem('token')) {
        config.headers.Authorization = localStorage.getItem('token');
    }
    if (_this.$store.state.language) {
        config.headers.Language = _this.$store.state.language;
    }
    if (config.method === 'post') {
        if (config.data && qs.parse(config.data).cancel) {
            cancel = qs.parse(config.data).cancel
        } else {
            cancel = new Date().getTime()
        }
    } else {
        if (config.params && config.params.cancel) {
            cancel = config.params.cancel
        } else {
            cancel = new Date().getTime()
        }
    }
    // 判断，如果这里拿到的参数中的 requestName 在上一次请求中已经存在，就取消上一次的请求
    if (cancel) {
        if (axios[cancel] && axios[cancel].cancel) {
            axios[cancel].cancel()
        }
        config.cancelToken = new CancelToken(c => {
            axios[cancel] = {}
            axios[cancel].cancel = c
        })
    }
    return config
}, error => {
    return Promise.reject(error);
})

// 请求到结果的拦截处理
axios.interceptors.response.use(config => {
        // 返回请求正确的结果
        if (config.data.code === 1010012) {
            // localStorage.removeItem('userInfo');
            _this.$setItem('userInfo', null);
            localStorage.removeItem('token');
            _this.$store.commit('changeStatus', false);
            router.push({ path: `/user/${'login'}` });
        }
        return config;
    }, error => {
        //  // 请求超时处理
        let config = error.config;
        // 如果config不存在或未设置重试选项，请拒绝
        if (!config || !config.retry) return Promise.reject(error);
        // 设置变量跟踪重试次数
        config.__retryCount = config.__retryCount || 0;
        // 检查是否已经达到最大重试总次数
        if (config.__retryCount >= config.retry) {
            // 抛出错误信息
            return Promise.reject(error);
        }
        // 增加请求重试次数
        config.__retryCount += 1;
        // 创建新的异步请求
        let backoff = new Promise(function(resolve) {
            setTimeout(function() {
                resolve();
            }, config.retryDelay || 1);
        });
        // 返回axios信息，重新请求
        return backoff.then(function() {
            return axios(config);
        });
    })
    // post 请求
const post = (url, params, success) => {
        axios.post(global + "/" + url, params).then(res => {
            success(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

const getCaptchaUrl = (id) => {
        return global + "/web/pc/login/captcha?id=" + id
    }

    // get 请求
const get = (url, params, success) => {
        for (const key in params) {
            if (params[key] == '') {
                delete params[key]
            }
        }
        let data = {
            params: params,
        }
        axios.get(global + url, data).then(res => {
            success(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
    // 上传图片
const upImg = (url, data, handle) => {
    let instance = axios.create({
        baseURL: global,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
    instance.post(url, data).then(res => {
        handle(res.data);
    }).catch(error => {
        console.log(error);
    })
}
const install = (Vue) => {
    /*
    用户模块
    */
 
    //获取验证码序列号
    Vue.prototype.$getCaptchaid = (params,success) => get('/web/pc/login/captchaid',params,success);
    
    Vue.prototype.$getCaptcha = (id) => getCaptchaUrl(id);
    //获取验证码
   // Vue.prototype.$getCaptcha = (params,success) => get('/web/pc/login/captcha',params,success);

    //获取二维码
    Vue.prototype.$getQrcode = (params,success) => get('/web/pc/qrcode ',params,success);

    //获取国旗
    Vue.prototype.$getFlags = (params,success) => get("/web/pc/flags", params, success);


    // 电费预估接口
    Vue.prototype.$powerPrice = (params, success) => get('/tc/common/power/price', params, success);

    // 用户邮箱注册
    Vue.prototype.$emailRegister = (params, success) => post('/user/email/register', params, success);
    // 用户邮箱注册认证 
    Vue.prototype.$emailRegisterVerify = (params, success) => post('/user/email/register-verify', params, success);
    // 用户手机注册
    Vue.prototype.$phoneRegister = (params, success) => post('/user/phone/register', params, success);
    // 用户手机注册认证
    Vue.prototype.$phoneRegisterVerify = (params, success) => post('/user/phone/register-verify', params, success);
    // 用户邮箱登录
    Vue.prototype.$emailLogin = (params, success) => post('/user/email/login', params, success);
    // 用户邮箱登录认证
    Vue.prototype.$emailLoginVerify = (params, success) => post('/user/email/login-verify', params, success);
    // 用户手机登录
    Vue.prototype.$phoneLogin = (params, success) => post('web/pc/login', params, success);
    // 用户手机登录认证
    Vue.prototype.$phoneLoginVerify = (params, success) => post('/user/phone/login-verify', params, success);
    // 获取邮箱验证码
    Vue.prototype.$getEmailCode = (params, success) => post('/user/email/verify-code', params, success);
    // 绑定邮箱
    Vue.prototype.$emailBind = (params, success) => post('/user/email/bind', params, success);
    // 绑定邮箱认证
    Vue.prototype.$emailBindVerify = (params, success) => post('/user/email/bind-verify', params, success);
    // 获取手机验证码
    Vue.prototype.$getPhoneCode = (params, success) => post('/user/phone/verify-code', params, success);
    // 绑定手机
    Vue.prototype.$phoneBind = (params, success) => post('/user/phone/bind', params, success);
    // 绑定手机
    Vue.prototype.$phoneBindVerify = (params, success) => post('/user/phone/bind-verify', params, success);
    // 获取谷歌密钥和二维码
    Vue.prototype.$getGaCode = (params, success) => get('/user/ga-code', params, success);
    // 绑定谷歌
    Vue.prototype.$bindGaCode = (params, success) => post('/user/ga-code/bind', params, success);
    // 绑定谷歌验证
    Vue.prototype.$bindGaCodeVerify = (params, success) => post('/user/ga-code/bind-verify', params, success);
    // 检查用户名是否存在
    Vue.prototype.$checkUser = (params, success) => post('/user/user-name/check', params, success);
    // 登录后修改密码
    Vue.prototype.$changePassword = (params, success) => post('/user/password/change', params, success);
    // 登录后修改密码认证
    Vue.prototype.$changePasswordVerify = (params, success) => post('/user/password/change-verify', params, success);
    // 登录前忘记密码重置密码
    Vue.prototype.$resetPassword = (params, success) => post('/user/password/reset', params, success);
    // 登录前忘记密码重置密码认证
    Vue.prototype.$resetPasswordVerify = (params, success) => post('/user/password/reset-verify', params, success);
    // 获取当前用户邀请码
    Vue.prototype.$getInviteCode = (params, success) => post('/user/invite-code', params, success);
    // 获取用户日志列表
    Vue.prototype.$logList = (params, success) => get('/user/log/list', params, success);
    // 验证Token
    Vue.prototype.$tokenVerify = (params, success) => post('/user/token/verify', params, success);
    //获取用户信息
    Vue.prototype.$userInfo = (params, success) => get('/user/info', params, success);
    //设置资金密码
    Vue.prototype.$fundPwd = (params, success) => post('/user/fund-pwd/bind', params, success);
    //设置资金密码认证
    Vue.prototype.$fundPwdVerify = (params, success) => post('/user/fund-pwd/bind-verify', params, success);
    //修改资金密码
    Vue.prototype.$updata_fundPwd = (params, success) => post('/user/fund-pwd/change', params, success);
    //修改资金密码认证
    Vue.prototype.$updata_fundPwdVerify = (params, success) => post('/user/fund-pwd/change-verify', params, success);
    // 身份证的上传
    Vue.prototype.$upload = (params, success) => upImg('/user/identity-card/upload', params, success);
    // 身份认证
    Vue.prototype.$auth = (params, success) => post('/user/identity/auth', params, success);

    /*
    优惠券
    */
    //轮次信息
    Vue.prototype.$infoInfo = (params, success) => get('/tc/info/info', params, success);
    //优惠券
    Vue.prototype.$coupon = (params, success) => get('/tc/info/coupon', params, success);
    //优惠券转增
    Vue.prototype.$couponOffer = (params, success) => post('/tc/info/coupon/offer', params, success);
    //优惠券转增验证
    Vue.prototype.$couponVerify = (params, success) => post('/tc/info/coupon/offer-verify', params, success);
    //优惠券使用记录
    Vue.prototype.$couponRecord = (params, success) => get('/tc/info/coupon/record', params, success);
    //优惠券转赠消息提醒
    Vue.prototype.$couponMsg = (params, success) => get('/tc/info/coupon/msg', params, success);
    //体验套餐
    Vue.prototype.$trial = (params, success) => get('/tc/info/trial', params, success);
    //用户是否用过免费体验套餐
    Vue.prototype.$trialStatus = (params, success) => get('/tc/info/trial/status', params, success);


    /*
    控制面板
    */
    //当前总算力
    Vue.prototype.$statisticsCurrent = (params, success) => get('/tc/console/statistics_current', params, success);
    //前30天每日算力
    Vue.prototype.$quarter = (params, success) => get('/tc/console/quarter', params, success);
    //获取美元的价格
    Vue.prototype.$usds = (params, success) => get('/tc/common/usds', params, success);
    //订单支付
    Vue.prototype.$orderNew = (params, success) => post('/tc/order/new', params, success);
    //订单支付验证
    Vue.prototype.$orderVerify = (params, success) => post('/tc/order/new-verify', params, success);
    //可支付的币种
    Vue.prototype.$coinList = (params, success) => get('/tc/common/coins', params, success);
    // 获取币信息列表
    Vue.prototype.$coinInfo = (params, success) => get('/tc/common/coin/info', params, success);
    //账户余额
    Vue.prototype.$accountList = (params, success) => get('/tc/account/list', params, success);
    //总算力、总收益
    Vue.prototype.$consoleStatistics = (params, success) => get('/tc/console/statistics', params, success);
    //每日产出
    Vue.prototype.$consoleDay = (params, success) => get('/tc/console/day', params, success);
    //每单产出
    Vue.prototype.$consoleOrder = (params, success) => get('/tc/console/order', params, success);
    //算力套餐订单
    Vue.prototype.$consoleHash = (params, success) => get('/tc/console/hash', params, success);
    //获取单个账户的入金地址
    Vue.prototype.$inAddress = (params, success) => get('/tc/account/in-address', params, success);
    //获取单个账户的入金地址
    Vue.prototype.$inAddress = (params, success) => get('/tc/account/in-address', params, success);
    //获取出入金明细列表
    Vue.prototype.$withdrawalDetail = (params, success) => get('/tc/deposit-withdrawal-detail/list', params, success);
    //提现申请
    Vue.prototype.$withdrawal = (params, success) => post('/tc/account/withdrawal', params, success);
    //提现撤销
    Vue.prototype.$withdrawalCancel = (params, success) => post('/tc/account/withdrawal-cancel', params, success);
    //财务记录收益
    Vue.prototype.$product = (params, success) => get('/tc/finance/product', params, success);


    //获取用户邀请码
    Vue.prototype.$inviteCode = (params, success) => get('/user/invite-code', params, success);
    //获取用户邀请列表
    Vue.prototype.$inviteList = (params, success) => get('/user/invite/list', params, success);
    //获取是否有邀请资格
    Vue.prototype.$inviteStatus = (params, success) => get('/user/invite/status', params, success);
    //轮播
    Vue.prototype.$advertisement = (params, success) => get('/tc/info/advertisement', params, success);
    //公告
    Vue.prototype.$announcement = (params, success) => get('/tc/info/announcement', params, success);


    Vue.prototype.$setItem = function(key, newVal) {
            if (key === 'language') {
                // 创建一个StorageEvent事件
                let newStorageEvent = document.createEvent('StorageEvent');
                const storage = {
                    setItem: function(k, val) {
                        localStorage.setItem(k, val);
                        // 初始化创建的事件
                        newStorageEvent.initStorageEvent('setLanguage', false, false, k, null, val, null, null);

                        // 派发对象
                        window.dispatchEvent(newStorageEvent)
                    }
                }
                return storage.setItem(key, newVal);
            }
            if (key === 'userInfo') {
                // 创建一个StorageEvent事件
                let newStorageEvent = document.createEvent('StorageEvent');
                const storage = {
                    setItem: function(k, val) {
                        localStorage.setItem(k, val);
                        // 初始化创建的事件
                        newStorageEvent.initStorageEvent('setInfo', false, false, k, null, val, null, null);
                        // 派发对象
                        window.dispatchEvent(newStorageEvent)
                    }
                }
                return storage.setItem(key, newVal);
            }
        }
        // 人机验证
    // Vue.prototype.grecaptcha = function() {
    //     return new Promise((resolve) => {
    //         grecaptcha.execute('6LfwQa4UAAAAAIP2b_nAWFqoN8XjtBfimAer5UNO', { action: 'homepage' }).then(function(token) {
    //             resolve(token)
    //         })
    //     })
    // }
}

export default install;