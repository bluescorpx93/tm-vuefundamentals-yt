import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomeComponent        from '@/components/Home'
import TestComponent1       from '@/components/TestComponent1'
import TestComponent2       from '@/components/TestComponent2'
import TestComponent3       from '@/components/TestComponent3'
import UsersComponent       from '@/components/Users'
import UserFromAPIComponent from '@/components/UsersFromAPI'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'HomeComponent',
      component: HomeComponent
    },
    {
      path : '/test1',
      name : 'TestComponent1',
      component: TestComponent1
    },
    {
      path : '/test2',
      name : 'TestComponent2',
      component: TestComponent2
    },
    {
      path : '/test3',
      name : 'TestComponent3',
      component: TestComponent3
    },
    {
      path: '/users',
      name: 'UsersComponent',
      component : UsersComponent
    },
    {
      path : '/users_api',
      name : "UserFromAPIComponent",
      component : UserFromAPIComponent
    }
  ]
})
