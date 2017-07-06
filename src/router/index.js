import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import reddit from '@/components/reddit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/subreddit',
      name: 'subreddit',
      component: reddit
    }
  ]
})
