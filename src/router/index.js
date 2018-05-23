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
import Bill from 'src/components/bill/bill'
import ModifyPhone from 'src/components/modify-phone/modify-phone'
import CurrentPhone from 'src/components/modify-phone/current-phone'
import Verification from 'src/components/modify-phone/verification'
import Userinfo from 'src/components/userinfo/userinfo'
import Setting from 'src/components/setting/setting'
import Myorder from 'src/components/myorder/myorder'

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
    },
    {
      path: '/bill',
      name: 'bill',
      component: Bill
    },
    {
      path: '/modify-phone',
      name: 'modify-phone',
      component: ModifyPhone
    },
    {
      path: '/current-phone',
      name: 'current-phone',
      component: CurrentPhone
    },
    {
      path: '/verification',
      name: 'verification',
      component: Verification
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: Userinfo
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: Myorder
    }
  ]
})
