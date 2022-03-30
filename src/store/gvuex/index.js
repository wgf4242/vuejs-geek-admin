import { useStore } from "../store/gvuex"
let store = useStore()
let count = computed(() => store.state.count)

function add() {
  store.commit("add")
}
