import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Timetable from '../components/Timetable.vue'

const routes = [
  { path: '/CoursePage_of_ChinesePainting', redirect: '/CoursePage_of_ChinesePainting/home' },
  { path: '/CoursePage_of_ChinesePainting/home', name: 'Home', component: Home },
  { path: '/CoursePage_of_ChinesePainting/timetable', name: 'Timetable', component: Timetable },
]

const router = createRouter({
  history: createWebHistory('/CoursePage_of_ChinesePainting/'),
  routes,
})

export default router
