<template>
  <div>
    <!-- <p class="nav">
      <span><router-link to="/login">login</router-link></span>
      <span><router-link to="/home">home</router-link></span>
      <span><router-link to="/test">test</router-link></span>
      <span><router-link to="/404">404</router-link></span>
    </p> -->

    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  padding: 10px;

  span:not(:last-child) {
    display: inline-block;
    padding-right: 10px;
    margin-right: 10px;
    border-right: 1px solid #aaa;
  }
}
</style>
