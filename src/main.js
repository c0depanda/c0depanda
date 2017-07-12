
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Main from './main.vue'
const ProjectList = () => import('./projectList.vue')
const ProjectItem = () => import('./projectItem.vue')

const routes = [
    { path: '/', component: Main },
    { path: '/projects', component: ProjectList, name: 'project'},
    { path: '/projects/:name', component: ProjectItem, name: 'projectlist' },
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    router,
    template: '<router-view></router-view>'
})