import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: require('../pages/Container').default,
      redirect:'/home',
      children: [
        {
          path: 'home',
          name:'home',
          component:require('../pages/Home').default,
        }
      ]
    },
  ]
})
