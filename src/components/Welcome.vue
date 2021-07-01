<template>
  <h1>weclome to main page{{msg}}</h1>
  <router-link to="/login">go to login</router-link>
</template>

<script>
export default {
  name: 'login',
  props:['msg']
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
