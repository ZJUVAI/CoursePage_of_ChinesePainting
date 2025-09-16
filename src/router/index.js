import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Timetable from '../components/Timetable.vue'

const routes = [
  { path: '/home', name: 'Home', component: Home },
  { path: '/timetable', name: 'Timetable', component: Timetable },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
