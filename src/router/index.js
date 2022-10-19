import { createRouter, createWebHistory } from 'vue-router'
import Home from './../views/Home.vue'
import JobList from './../views/JobList.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      meta: {
        requiresGuest: true
      },
      meta:{
        requiresAuth: false
      },
      component: Home
    },
    {
      path: '/jobs',
      name: 'JobList',
      meta:{
        requiresAuth: true
      },
      component: JobList,
      props: true
    }
  ]
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })

  export default router