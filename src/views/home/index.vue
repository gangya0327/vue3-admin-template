<template>
  <div> home {{ userStore.username }}</div>
</template>

<script setup lang="ts">
import useUserStore from '@/store/modules/user.ts';

const userStore = useUserStore();
</script>

<style lang="scss" scoped></style>
