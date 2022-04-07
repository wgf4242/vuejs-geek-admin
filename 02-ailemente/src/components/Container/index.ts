import { App } from "vue"
import ElContainer from "./Container.vue"
import ElHeader from "./Header.vue"
import ElButton from "./Button.vue"
export default {
  install(app: App) {
    app.component(ElContainer.name, ElContainer),
      app.component(ElButton.name, ElButton),
      app.component(ElHeader.name, ElHeader)
  },
}
