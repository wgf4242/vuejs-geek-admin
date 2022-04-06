import axios from "axios"
import { createStore } from "vuex"
import service from "../service"

const user = {
  namespaced: true,
  actions: {
    resetToken() {
      console.log("restToken run")
      return new Promise(resolve => {
        localStorage.setItem("token", JSON.stringify("resetToken"))
        resolve(12)
      })
    },
  },
}

const store = createStore({
  modules: { user: user },
  state() {
    return {
      count: 6,
      removeRoutes: [],
    }
  },
  getters: {
    double(state) {
      return state.count * 2
    },
  },
  mutations: {
    SET_REMOVE_ROUTES(state, removeRoutes) {
      state.removeRoutes = removeRoutes
    },
    REMOVE_ROUTES(state) {
      state.removeRoutes.forEach(removeFunc => {
        removeFunc()
      })
    },
    add(state) {
      state.count++
    },
  },
  actions: {
    asyncAdd({ commit }) {
      setTimeout(() => {
        commit("add")
      }, 1000)
    },
    logout({ commit }) {
      return new Promise(resolve => {
        localStorage.removeItem("token")
        commit("REMOVE_ROUTES")
        resolve({
          code: 50008,
        })
      })
    },

    login({ commit }, form) {
      console.log(form)
      return new Promise(resolve => {
        setTimeout(() => {
          axios.get("/api/testGet", { params: { id: 1 } }).then(res => {
            console.log("testGet res is  ", res)
          })

          axios.post("/api/testPost", { user: 1, pass: 2 }).then(res => {
            console.log("testPost res is  ", res)
          })

          axios.post("/geek-admin/user/login", form).then(res => {
            console.log("login res ", res)
          })

          service.post("/geek-admin/user/login", form).then(res => {
            console.log("service /api/testGet res is  ", res)
            const token = res.data
            if (!token) {
              return
            }
            localStorage.setItem("token", JSON.stringify(token))
            resolve(res)
          })
        }, 500)
      })
    },

    addRoutes({ commit }, payload) {
      const { routes: accessRoutes, router } = payload
      // 添加动态路由，同时保存移除函数，将来如果需要重置路由可以用到它们
      const removeRoutes = []
      accessRoutes.forEach(route => {
        const removeRoute = router.addRoute(route)
        removeRoutes.push(removeRoute)
      })
      commit("SET_REMOVE_ROUTES", removeRoutes)
    },
  },
})

export default store
