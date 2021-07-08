import request from './../utils/request'
export default {
    login(params){
        return request({
            url:'/users/login',
            method:'post',
            data:params,
        })
    },
    noticeCount(params){
        return request({
            url:'/leave/count',
            method:'get',
            data:{},
            mock:true
        })
    },
    getMenuList(){
        return request({
            url:'/menu/list',
            method:'get',
            data:{},
            mock:true
        })
    },
    getUserList(){
        debugger
        return request({
            url:'/users/list',
            method:'get',
            data: {},
            mock:true
        })
    }
}
