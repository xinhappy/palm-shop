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
import Message from 'src/components/message/message'
import Advice from 'src/components/advice/advice'
import Support from 'src/components/support/support'
import News from 'src/components/news/news'
import NewsDetail from 'src/components/news/detail'
import Charge from 'src/components/charge/charge'
import Balance from 'src/components/balance/balance'

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
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/advice',
      name: 'advice',
      component: Advice
    },
    {
      path: '/support',
      name: 'support',
      component: Support
    },
    {
      path: '/news',
      name: 'name',
      component: News
    },
    {
      path: '/newsDetail/:id',
      name: 'newsDetail',
      component: NewsDetail
    },
    {
      path: '/charge/:name',
      name: 'charge',
      component: Charge
    },
    {
      path: '/balance',
      name: 'balance',
      component: Balance
    }
  ]
})
