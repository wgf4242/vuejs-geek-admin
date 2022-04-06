<template>
  <div @click="asyncAdd">1s delay: {{ count }} * 2 = {{ double }}</div>
</template>

<script setup>
import { ref,computed } from "vue";
import { useStore } from "vuex";

function asyncAdd(){
    store.dispatch("asyncAdd")
}

const store = useStore()
const count = computed(() => store.state.count)
const double = computed(() => store.getters.double)

</script>