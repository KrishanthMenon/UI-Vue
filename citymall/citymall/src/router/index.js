import Vue from 'vue'
import VueRouter from 'vue-router'
import CustomerSection from '../views/CustomerSection'
import MrA from '../views/MrA.vue'
import MrsB from '../views/MrsB.vue'
import MsC from '../views/MsC.vue'
import MrD from '../views/MrD.vue'
import Dashboard from '../views/Dashboard'
import OrderForCustomer from '../views/OrderForCustomer.vue'
import Home from '../views/Home'
import UpcomingDC from '../views/UpcomingDC.vue'
import DeliveredtoDOST from '../views/DeliveredtoDOST.vue'
import DeliveredtoPARTNER from '../views/DeliveredtoPARTNER.vue'
import MySalesEarnings from '../views/MySalesEarnings'
import Commission from '../views/Commission'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/CustomerSection/mr.A',
    name: 'Mr.A',
    component: MrA
  },
  {
    path: '/CustomerSection/mrs.B',
    name: 'Mrs.B',
    component: MrsB
  },
  {
    path: '/CustomerSection/ms.C',
    name: 'Ms.C',
    component: MsC
  },
  {
    path: '/CustomerSection/mr.D',
    name: 'Mr.D',
    component: MrD
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/OrderforCustomer',
    name: 'Order For Customer',
    component: OrderForCustomer
  },
  {
    path: '/CustomerSection',
    name: 'Customer',
    component: CustomerSection
  },
  {
    path: '/PartnerOrderList',
    name: 'upcomingdc',
    component: UpcomingDC
  },
  {
    path: '/PartnerOrderList/deliveredtoDOST',
    name: 'DeliveredtoDOST',
    component: DeliveredtoDOST
  },
  {
    path: '/PartnerOrderList/deliveredtoPARTNER',
    name: 'DeliveredtoPARTNER',
    component: DeliveredtoPARTNER
  },
  {
    path: '/MySalesEarnings',
    name: 'MySales&Earnings',
    component: MySalesEarnings
  },
  {
    path: '/Commission',
    name: 'Commission',
    component: Commission
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
