import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 

let router = new VueRouter({
    // mode: 'history',
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
        // {
        // path: '/',
        //     name: 'perfomance',
        //     pages: () =>
        //         import ('./pages/perfomance'
        //         },
    ]
});
export default router;
