import { App } from "vue"
import ElContainer from "./Container.vue"
import ElHeader from "./Header.vue"
export default {
  install(app: App) {
    app.component(ElContainer.name, ElContainer), app.component(ElHeader.name, ElHeader)
  },
}
