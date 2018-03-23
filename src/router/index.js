import Vue from 'vue'
import Router from 'vue-router'
const Main = () => import(/* webpackChunkname: "main" */'@/components/main')
const ProjectList = () => import(/* webpackChunkname: "projectlist" */'@/components/projectList')
const ProjectItem = () => import(/* webpackChunkname: "projectitem" */'@/components/projectItem')

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Main },
    { path: '/projects', component: ProjectList, name: 'project' },
    { path: '/projects/:name', component: ProjectItem, name: 'projectlist' },
    { path: '*', redirect: '/' }
  ],
  // Name of class for active state
  linkActiveClass: 'active',
  mode: 'history',
  // Scroll to top on each new route
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})