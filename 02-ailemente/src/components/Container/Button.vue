<template>
  <button class="el-button" :size="size" :class="[size ? `el-button--${size}` : '',]">
    <slot />
  </button>
</template>
<script lang="ts">
export default {
  name: "ElButton",
};
</script>
<script setup lang="ts">
import { withDefaults,computed, toRefs } from "vue";
import { useGlobalConfig } from '../../util';

interface Props {
  size?:""|'small'|'medium'|'large',
  type?:""|'primary'|'success'|'danger'
}
const props = withDefaults(defineProps<Props>(),{
  size:"",
  type:""
})
const globalConfig = useGlobalConfig()
const buttonSize = computed(()=>{
  return props.size||globalConfig.size
})
const {size} = toRefs(props)

const useClasses = ({ size}) => {
  return computed(() => {
    return [
      size.value ? `el-button--${size.value}` : '',
    ]
  })
}


const classes = useClasses({ size, })

</script>
<style lang="scss">
@import "../../styles/mixin.scss";
@import "../../styles/mixins/_button.scss";
@import "../../styles/mixins/mixins.scss";
@import "../../styles/common/var";
@include b(button){
  display: inline-block;
  cursor: pointer;
  background: $--button-default-background-color;
  color: $--button-default-font-color;
  @include button-size(
    $--button-padding-vertical,
    $--button-padding-horizontal,
    $--button-font-size,
    $--button-border-radius
  );
  @include m(small) {
    @include button-size(
      $--button-medium-padding-vertical,
      $--button-medium-padding-horizontal,
      $--button-medium-font-size,
      $--button-medium-border-radius
    );
  }
  @include m(large) {
    @include button-size(
      $--button-large-padding-vertical,
      $--button-large-padding-horizontal,
      $--button-large-font-size,
      $--button-large-border-radius
    );
  }
}

</style>
