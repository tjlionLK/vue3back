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
    mounted(){
        /*
        this.$request({
            method: 'get',
            url: '/login',
            data:{
                name: 'jack'
            }
        }).then((res)=>{
            console.log(res)
        })
        */
        this.$request.get('/login',{name:'jack'},{mock:true,loading:true}).then((res)=>{
            console.log(res);
        })
    },
    methods: {
        goHome(){
            this.$router.push('/welcome')
        }
    }
}
</script>

<style scoped>

</style>
