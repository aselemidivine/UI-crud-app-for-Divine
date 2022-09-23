// This is a simple path for all the routes
// import { createApp } from 'vue';
// import {createRouter} from 'vue-router';

const routes = [
    {path: '/home', component:home},
    {path: '/employee', component:employee},
    {path: '/department', component:department}

]

// creating an instance of a new vueRouter object and pass the routes array
// const router = VueRouter({
//     routes
// })

// const app = new Vue({
//     router
// }).$mount('#app')

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
  })
  const app = Vue.createApp({})
  app.use(router)
  app.mount('#app')

//   This route is the javascript code. instead we can use it in the vuejs app