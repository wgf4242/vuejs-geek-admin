import { createApp } from "vue"

import ElComponents from "./components/Container"
import App from "./App.vue"
const app = createApp(App)

app.config.globalProperties.$AILEMENTE = { size: "large" }

app.use(ElComponents).mount("#app")
// app.use(ElContainer).use(ElButton).mount("#app")
