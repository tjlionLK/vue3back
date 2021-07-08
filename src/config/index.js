const env = import.meta.env.MODE || 'prod';
const EnvConfig={
    development:{
        baseApi:'/api',
        mockApi:'https://www.fastmock.site/mock/fbf663dfcc36f0324e2804a1ea5abfe8/api'
    },
    test:{
        baseApi:'/test.futurefe.com/api',
        mockApi:'https://www.fastmock.site/mock/fbf663dfcc36f0324e2804a1ea5abfe8/api'
    },
    prod:{
        baseApi:'/futurefe.com/api',
        mockApi:'https://www.fastmock.site/mock/fbf663dfcc36f0324e2804a1ea5abfe8/api'
    }

}

export default {
    env: 'dev',
    mock: true,
    namespace:'manager',
    ...EnvConfig[env]
    //baseApi: 'www.baidu.com/api' //test-www.baidu.com/api
}
