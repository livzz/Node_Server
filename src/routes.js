import User from './components/user/User.vue';
// import UserDetail from './components/user/UserDetail.vue';
// import UserStart from './components/user/UserStart.vue';
// import UserEdit from './components/user/UserEdit.vue';
import Router from 'vue-router';
import Vue from 'vue';
Vue.use(Router);
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Basic from './components/Basic.vue';
import SMS from './components/SMS.vue';
const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Home,
            meta: {
                requireAuth: true,
            }
        },
        {
            path: '/students',
            component: User,
            meta: {
                requireAuth: true,
            }
        },
        {
            path: '/SMS',
            component: SMS,
            meta: {
                requireAuth: true,
                user: 'admin@gmail.com'
            }
        },
        {
            path: '/login',
            component: Login,
        }
    ]
});
// router.beforeEach((to, from, next) => {
//     if (to.meta.requireAuth) {
//       if (store.state.auth.isAuthenticated) {
//         next();
//       } else {
//         next({ path: '/login' });
//       }
//     }
//     next();
//   });
//   router.beforeResolve((to, from, next) => {
//     if (to.meta.requireAuth) {
//       if (store.state.auth.isAuthenticated) {
//         next();
//       } else {
//         next({ path: '/login' });
//       }
//     }
//     // console.log(to);
//     next();
//   });

export default router;