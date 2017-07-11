
import Vue from 'vue'
window.VueRouter = require('vue-router');

Vue.use(VueRouter)

import Main from './main.vue'
const ProjectList = () => import('./projectList.vue')
const ProjectItem = () => import('./projectItem.vue')

const routes = [
    { path: '/', component: Main },
    { path: '/projects', component: ProjectList},
    { path: '/projects/:name', component: ProjectItem },
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    router,
    template: '<router-view></router-view>'
})