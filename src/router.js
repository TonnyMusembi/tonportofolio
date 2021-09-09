import Vue from 'vue';
import VueRouter from 'vue-router';
import VueCookies from 'vue-cookies';


import Verify from "./views/Verify";
import Forgotpassword from '@/views/Forgotpassword'
import footer from '@/views/footer'

Vue.use(VueRouter);
Vue.use(VueCookies);

// 

let router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Lander',
            component: () =>
                import ('./components/Lander')
        },

        {
            path: '/',
            name: 'Login',
            component: () =>
                import ('./components/login')
        },

        { path: '/verify', name: 'verify-account', component: Verify },

        {
            path: '/Forgotpassword',
            name: 'Forgotpassword',
            components: Forgotpassword
        },
        {
            path: '/footer',
            name: 'footer',
            components: footer
        },
    ]
});
export default router;