import Vue from 'vue';
import VueRouter from 'vue-router';
import VueCookies from 'vue-cookies';





Vue.use(VueRouter);
Vue.use(VueCookies);

// 

let router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Landing',
            component: () =>
                import ('./components/Lander')
        },
        {
            path: '/',
            name: 'Login',
            component: () =>
                import ('./components/login')
        },


    ]
});
export default router;