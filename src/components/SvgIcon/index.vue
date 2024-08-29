<template>
  <svg :width="width" :height="height">
    <use :xlink:href="`#icon-${name}`" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  color: {
    type: String,
    default: 'red',
  },
  width: {
    type: String,
    default: '50',
  },
  height: {
    type: String,
    default: '50',
  },
})
</script>
