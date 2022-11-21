import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../components/About.vue'
import Home from '../components/Home.vue'
import News from '../components/News.vue'
import Message from '../components/Message.vue'
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news',
          name: 'news',
          component: News,
          beforeEnter: (to, from, next) => {
            // ...
          }
        },
        {
          // :id和:title 都是属于占位符，路由params传参的时候需要
          path: 'message/:id/:title',
          name: 'message',
          component: Message,
          /* props的第一种写法，值为对象，该对象中所有的key-value都会以props的形式传入到Message组件
           props: {
            a: 1,
            b: 2
           }
          */
          /*
            props的第二种写法, 值为布尔值.
            若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式给Message组件
            props: true
           */

          /*
           props的第三种写法，函数写法  
           props值为函数，该函数返回的对象中每一组key-value都会通过props传给Message组件
          */
          props(route) {
            // 这里的route就是组件中的this.$route
            return {
              id: route.query.id,
              title: route.query.title
            }
          }
        }
      ]
    }
  ]
})
