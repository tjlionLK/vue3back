<template>
    <h1>this is the login page</h1>
    <Welcome msg="jack"/>
    <el-button @click="goHome">go back to the welcome page</el-button>
</template>

<script>
import Welcome from './Welcome.vue'
export default {
    name: 'login',
    components:{Welcome},
    methods: {
        goHome(){
            this.$router.push('/welcome')
        }
    }
}
</script>

<style scoped>

</style>
