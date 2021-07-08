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
    <template v-for="menu in userMenu">
        <el-submenu v-if="menu.children &&
            menu.children.length>0 &&
            menu.children[0].menuType == 1"
            :key="menu._id"
            :index="menu.path">
            <template #title>
                <i :class="menu.icon"></i>
                <span>{{menu.menuName}}</span>
            </template>
            <tree-menu :userMenu="menu.children"/>
        </el-submenu>
        <el-menu-item
           v-else-if="menu.menuType == 1"
           :index="menu.path"
           :key="menu._id"
           >{{menu.menuName}}
        </el-menu-item>
    </template>
</template>

<script>
export default {
    name: "TreeMenu",
    props:{
        userMenu:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>

</style>
