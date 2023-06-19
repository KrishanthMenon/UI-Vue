import Vue from 'vue'
import VueRouter from 'vue-router'
import UpcomingDC from '../views/UpcomingDC.vue'
import DeliveredtoDOST from '../views/DeliveredtoDOST.vue'
import DeliveredtoPARTNER from '../views/DeliveredtoPARTNER.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'upcomingdc',
    component: UpcomingDC
  },
  {
    path: '/deliveredtoDOST',
    name: 'DeliveredtoDOST',
    component: DeliveredtoDOST
  },
  {
    path: '/deliveredtoPARTNER',
    name: 'DeliveredtoPARTNER',
    component: DeliveredtoPARTNER
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
