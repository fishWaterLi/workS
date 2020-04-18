import Vue from 'vue'
import Router from 'vue-router'
import login from './view/login.vue'
import { resolve } from 'q';
// import store from './store'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component:login
        },
        {
            path: '/download',
            component:resolve=>require(['./view/download'],resolve)
        },
        {
            path:'/user',
            component:resolve=>require(['./view/user/user'],resolve),
            children:[
               {path:'/',component:resolve=>require(['./view/user/userRight'],resolve)},
               {path:'recharge',component:resolve=>require(['./view/user/recharge'],resolve)},
               {path:'cashOut',component:resolve=>require(['./view/user/cashOut'],resolve)},
               {path:'transfer',component:resolve=>require(['./view/user/transfer'],resolve)},
               {path:'record',component:resolve=>require(['./view/record/record'],resolve),
                    children:[
                        {path:'cashOutRecord',component:resolve=>require(['./view/record/cashOutRecord'],resolve)},
                        {path:'rechargeRecord',component:resolve=>require(['./view/record/rechargeRecord'],resolve)},
                        {path:'transferRecord',component:resolve=>require(['./view/record/transferRecord'],resolve)}
                    ]
                },
                {path:'mine',component:resolve=>require(['./view/mine/mine'],resolve),
                    children:[
                       {path:'information',component:resolve=>require(['./view/mine/information'],resolve)},
                       {path:'safe',component:resolve=>require(['./view/mine/safe'],resolve)}
                    ]
                }
             ]
        }
    ]


// router.beforeEach((to, from, next) => {
//     if (!to.matched.length) {
//         next({ path: '/home' });
//         return
//     }
//     if (to.matched.some(record => record.meta.requireAuth)) {
//         if (localStorage.getItem('userInfo') !== null || localStorage.getItem('userInfo') !== 'null') {
//             next();
//         } else {
//             store.commit('changeStatus', false);
//             next({ path: '/userlogin' });
//         }
//     } else {
//         next();
    // }
 });

export default router;