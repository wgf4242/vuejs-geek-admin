import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Rate from '../pages/rateView.vue'
import TmpAnimate from "../pages/TmpAnimate.vue"

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/rate", name: "Rate", component: Rate },
  { path: "/tmp_animate", name: "TmpAnimate", component: TmpAnimate },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router