import Vue from 'vue'
import Router from 'vue-router'
import Main from 'src/components/main/main'
import Server from 'src/components/server/server'
import Home from 'src/components/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'main',
      component: Main
    },
    {
      path: '/server',
      name: 'server',
      component: Server
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
