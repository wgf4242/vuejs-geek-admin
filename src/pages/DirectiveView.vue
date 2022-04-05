<template>
  <h1>DirectiveView</h1>
    <p> <input v-focus /> </p>
</template>

<script setup>
import {focus as vFocus} from '@/directive/focus'
// const vFocus = { mounted: (el) => el.focus() }

</script>

<style lang="scss" scoped>
</style>