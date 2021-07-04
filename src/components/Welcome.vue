<template>
  <div class="welcome">
    <h1>weclome to main page{{msg}}</h1>
    <router-link to="/login">go to login</router-link>
  </div>
</template>

<script>
export default {
  name: 'login',
  props:['msg']
}
</script>

<style scoped>
.welcome{
  background: #fff;
  height:100%;
}
</style>
