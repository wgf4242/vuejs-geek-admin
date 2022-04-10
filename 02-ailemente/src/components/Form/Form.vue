<template>
</template>

<script lang="ts">
export default {
  name: 'ElForm'
}
</script>

<script lang="ts" setup>
import { inject, ref } from 'vue';
import { key, FormItem } from './type';
import { emitter } from "../../emitter"

interface Props {
  label?: string
  prop?: string
}
const props = withDefaults(defineProps<Props>(), {
  label: "",
  prop: ""
})

const items = ref<FormItem[]>([])
emitter.on("addFormItem", (item) => {
  items.value.push(item)
})

function validate(cb: (isValid: boolean) => void) {
  const tasks = items.value.map((item) => item.validate())
  Promise.all(tasks)
    .then(() => { cb(true) })
    .catch(() => { cb(false) })
}


// import Schema from "async-validator"
// function validate() {
//   if (formData?.rules === undefined) {
//     return Promise.resolve({ result: true })
//   }
//   const rules = formData.rules[props.prop]
//   const value = formData.model[props.prop]
//   const schema = new Schema({ [props.prop]: rules })
//   return schema.validate({ [props.prop]: value }, (errors) => {
//     if (errors) {
//       error.value = errors[0].message || "校验错误"
//     } else {
//       error.value = ""
//     }
//   })
// }
</script>