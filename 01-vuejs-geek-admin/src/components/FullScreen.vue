<template>
  <h1 @click="toggle">useFullscreen</h1>
</template>

<script setup>
import { useFullscreen } from "@vueuse/core"
const { isFullscreen, enter, exit, toggle } = useFullscreen()
</script>

