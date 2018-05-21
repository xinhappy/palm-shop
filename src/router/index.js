import Vue from 'vue'
import Router from 'vue-router'
import Main from 'src/components/main/main'
import Server from 'src/components/server/server'
import Home from 'src/components/home/home'
import Query from 'src/components/query/query'
import Hand from 'src/components/handling/handling'
import Declare from 'src/components/declare/declare'
import Tracking from 'src/components/tracking/tracking'
import More from 'src/components/more/more'

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
    },
    {
      path: '/query',
      name: 'query',
      component: Query
    },
    {
      path: '/handling',
      name: 'handling',
      component: Hand
    },
    {
      path: '/declare',
      name: 'declare',
      component: Declare
    },
    {
      path: '/tracking',
      name: 'tracking',
      component: Tracking
    },
    {
      path: '/more',
      name: 'more',
      component: More
    }
  ]
})
