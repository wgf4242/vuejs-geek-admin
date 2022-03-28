<template>
<Rate :value="score" @update-rate="update"></Rate>
<Rate :value="3" ></Rate>
<Rate :value="4" theme="red"></Rate>
<Rate :value="1" theme="green"></Rate>
</template>
<script setup>
import {ref} from 'vue'
import Rate from '../components/Rate.vue'
let score = ref(3)
function update(num){
    score.value = num
}
</script>