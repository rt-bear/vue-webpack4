import Vue from 'vue'
import Router from 'vue-router'
import {
    $import
} from '@/utils';
import Layout from '@/layout/Layout'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home',
            name: 'Layout',
            component: Layout,
            children: [{
                path: '/home',
                component: $import('home/index')
            }]
        }
    ]
})
