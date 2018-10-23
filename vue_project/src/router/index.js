import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Prof from '@/pages/Prof'
import Skill from '@/pages/Skill'
import Development from '@/pages/Development'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/prof',
      name: 'Prof',
      component: Prof
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/development',
      name: 'Development',
      component: Development
    }
  ]
})
