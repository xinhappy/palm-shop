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
import Myaccount from 'src/components/myaccount/myaccount'
import Telephone from 'src/components/myaccount/children/telephone'
import Broadband from 'src/components/myaccount/children/broadband'
import Tv from 'src/components/myaccount/children/tv'
import Booked from 'src/components/booked/booked'
import TelephoneB from 'src/components/booked/children/telephone'
import BroadbandB from 'src/components/booked/children/broadband'
import TvB from 'src/components/booked/children/tv'
import Due from 'src/components/due/due'
import TelephoneD from 'src/components/due/children/telephone'
import BroadbandD from 'src/components/due/children/broadband'
import TvD from 'src/components/due/children/tv'
import Reply from 'src/components/reply/reply'
import TelephoneR from 'src/components/reply/children/telephone'
import BroadbandR from 'src/components/reply/children/broadband'
import TvR from 'src/components/reply/children/tv'
import Downtime from 'src/components/downtime/downtime'
import TelephoneDt from 'src/components/downtime/children/telephone'
import BroadbandDt from 'src/components/downtime/children/broadband'
import TvDt from 'src/components/downtime/children/tv'
import Install from 'src/components/install/install'
import TelephoneI from 'src/components/install/children/telephone'
import BroadbandI from 'src/components/install/children/broadband'
import TvI from 'src/components/install/children/tv'
import Notice from 'src/components/notice/notice'
import TelephoneN from 'src/components/notice/children/telephone'
import BroadbandN from 'src/components/notice/children/broadband'
import TvN from 'src/components/notice/children/tv'
import Phone from 'src/components/phone/phone'
import Call from 'src/components/call/call'

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
    },
    {
      path: '/myaccount',
      name: 'myaccount',
      component: Myaccount,
      children:[
        {
          path: '/',
          name: 'telephone',
          component: Telephone
        },
        {
          path: 'broadband',
          name: 'broadband',
          component: Broadband
        },
        {
          path: 'tv',
          name: 'tv',
          component: Tv
        }
      ]
    },
    {
      path: '/booked',
      name: 'booked',
      component: Booked,
      children:[
        {
          path: '/',
          name: 'telephone-b',
          component: TelephoneB
        },
        {
          path: 'broadband-b',
          name: 'broadband-b',
          component: BroadbandB
        },
        {
          path: 'tv-b',
          name: 'tv-b',
          component: TvB
        }
      ]
    },
    {
      path: '/due',
      name: 'due',
      component: Due,
      children:[
        {
          path: '/',
          name: 'telephone-d',
          component: TelephoneD
        },
        {
          path: 'broadband-d',
          name: 'broadband-d',
          component: BroadbandD
        },
        {
          path: 'tv-d',
          name: 'tv-d',
          component: TvD
        }
      ]
    },
    {
      path: '/downtime',
      name: 'downtime',
      component: Downtime,
      children:[
        {
          path: '/',
          name: 'telephone-dt',
          component: TelephoneDt
        },
        {
          path: 'broadband-dt',
          name: 'broadband-dt',
          component: BroadbandDt
        },
        {
          path: 'tv-dt',
          name: 'tv-dt',
          component: TvDt
        }
      ]
    },
    {
      path: '/reply',
      name: 'reply',
      component: Reply,
      children:[
        {
          path: '/',
          name: 'telephone-r',
          component: TelephoneR
        },
        {
          path: 'broadband-r',
          name: 'broadband-r',
          component: BroadbandR
        },
        {
          path: 'tv-r',
          name: 'tv-r',
          component: TvR
        }
      ]
    },
    {
      path: '/install',
      name: 'install',
      component: Install,
      children:[
        {
          path: '/',
          name: 'telephone-i',
          component: TelephoneI
        },
        {
          path: 'broadband-i',
          name: 'broadband-i',
          component: BroadbandI
        },
        {
          path: 'tv-i',
          name: 'tv-i',
          component: TvI
        }
      ]
    },
    {
      path: '/notice',
      name: 'notice',
      component: Notice,
      children:[
        {
          path: '/',
          name: 'telephone-n',
          component: TelephoneN
        },
        {
          path: 'broadband-n',
          name: 'broadband-n',
          component: BroadbandN
        },
        {
          path: 'tv-n',
          name: 'tv-n',
          component: TvN
        }
      ]
    },
    {
      path: '/phone',
      name: 'phone',
      component: Phone
    },
    {
      path: '/call',
      name: 'call',
      component: Call
    }
  ]
})
