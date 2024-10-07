import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/BlogView.vue'
import manager from '../components/Blogs.vue'
import tag from '../components/TagManager.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/manager', component: manager },
  { path: '/tags', component: tag }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router