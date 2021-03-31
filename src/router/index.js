import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            redirect:{
                name: "Page1"
            }
        },
        {
            path: '/Page1',
            name: 'Page1',
            component: Page1
        },
        {
            path: '/Page2',
            name: 'Page2',
            component: Page2
        }
    ]
})
