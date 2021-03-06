import { createRouter, createWebHashHistory } from "vue-router"
import NProgress from "nprogress" // progress bar

import Home from "../pages/home.vue"
// import About from "../pages/about.vue"
import Rate from "../pages/rateView.vue"
import TmpAnimate from "../pages/TmpAnimate.vue"
import vuexView from "../pages/vuexView.vue"

import Login from "../components/Login.vue"
import { getToken } from "@/utils/auth"

const routes = [
  { path: "/", name: "Home", component: Home, meta: { requiresAuth: true } },
  // { path: "/about", name: "About", component: About },
  { path: "/rate", name: "Rate", component: Rate },
  { path: "/tmp_animate", name: "TmpAnimate", component: TmpAnimate },
  { path: "/vuexView", name: "vuexView", component: vuexView },
  { path: "/login", component: Login, hidden: true },
  { path: "/DirectiveView", name: "DirectiveView", component: () => import("@/pages/DirectiveView.vue") },
  // { path: "/EChartView", name: "EChartView", component: () => import("@/pages/EChartView.vue") },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()
  let token = getToken()
  if (to.meta.requiresAuth && !token) {
    // !auth.isLoggedIn()
    return next("/login")
  }
  return next()
})

router.afterEach(() => {
  // finish progress bar
  setTimeout(() => {
    NProgress.done()
  }, 500)
})

export default router
