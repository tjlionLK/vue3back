<template>
    <h1>login</h1>
    <router-link to="/welcome">go to welcome</router-link>
</template>

<script>
export default {
    name: 'login',
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

        this.$request.get('/login',{name:'jack'},{mock:true,loading:true}).then((res)=>{
            console.log(res);
        })

         */
    }
}
</script>

<style scoped>

</style>
