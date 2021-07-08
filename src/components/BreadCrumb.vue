<!--<template>-->
<!--    <el-submenu index="1">-->
<!--        <template #title>-->
<!--            <i class="el-icon-setting"></i>-->
<!--            <span>系统管理</span>-->
<!--        </template>-->
<!--        <el-menu-item index="1-1">用户管理</el-menu-item>-->
<!--        <el-menu-item index="1-2">菜单管理</el-menu-item>-->
<!--    </el-submenu>-->
<!--    <el-submenu index="2">-->
<!--        <template #title>-->
<!--            <i class="el-icon-setting"></i>-->
<!--            <span>审批管理</span>-->
<!--        </template>-->
<!--        <el-menu-item index="2-1">休假申请</el-menu-item>-->
<!--        <el-menu-item index="2-2">待我审批</el-menu-item>-->
<!--    </el-submenu>-->
<!--</template>-->
<!--有子菜单的，并且子菜单不为空，并且子菜单不是按钮。。。渲染submenu-->
<!--没有子菜单，但不是按钮。。。渲染menu-item-->
<!--递归的tree放在那个位置，也不知道为什么-->
<!--id作为key-->
<!--path作为跳转路径-->
<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="(item,index) in breadList" :key="item.path">
          <router-link to="/welcome" v-if="index===0">{{item.meta.title}}</router-link>
          <span v-else>{{item.meta.title}}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: "BreadCrumb",
        computed:{
          breadList(){
            return this.$route.matched;
          }
        },
        mounted(){
            console.log('routes=>',this.$route)
        }
    }
</script>

<style scoped>

</style>
