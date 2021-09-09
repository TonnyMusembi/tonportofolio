import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VModal from 'vue-js-modal'

//import "@/assets/layout.scss"


Vue.config.productionTip = false


Vue.use(VModal, { dynamic: true })

new Vue({
    render: h => h(App),
    router,
    store,

}).$mount('#app')