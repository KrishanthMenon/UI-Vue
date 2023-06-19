import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import MySalesEarnings from '../views/MySalesEarnings'
import Commission from '../views/Commission'
import Ledger from '../views/Ledger'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/MySalesEarnings/Ledger',
    name: 'Ledger',
    component: Ledger
  },
  {
    path: '/MySalesEarnings',
    name: 'MySales&Earnings',
    component: MySalesEarnings
  },
  {
    path: '/MySalesEarnings/Commission',
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
