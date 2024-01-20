import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from '@/views/Home/default/index.vue'
import Notes from '@/views/Home/default/index.vue'
import Detail from '@/components/@logic/Detail/default/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/notes',
    name: 'Home1',
    meta: {
      layout: 'DefaultLayout'
    },
    component: Notes,
    children: [
      {
        name: 'Note',
        path: ':id',
        component: Detail,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
