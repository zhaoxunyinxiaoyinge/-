import Vue from "vue"
import vueRouter from "vue-router"
import VueRouter from "vue-router";
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect:"/cinema"
    },
    {
        path: "/cinema",
        component:() => import("./../view/cinema"),
        children:[
            {
               path:"/cinema",
               redirect:"/cinema/city",
            },
            {
              path:"/cinema/city",
              component:()=>import("./../components/City"),
              name:"city"  
            },{
                path:"/cinema/nowplay",
                component:()=>import("./../components/Nowplaying"),
                name:"nowplay"
            },{
                path:"/cinema/comsoon",
                component:()=>import("./../components/Comsoon"),
                name:"comsoon"
            },{
                path:"/cinema/search",
                component:()=>import("./../components/Search"),
                name:"search"
            }

        ]
    },
    {
        path: "/movie",
        component: () => import("@/view/movie"),
        children:[
            {
                path:"/movie",
                redirect:"/movie/place",
             },
             {
               path:"/movie/place",
               component:()=>import("./../components/Place"),
               name:"place"  
             },{
                 path:"/movie/pinpai",
                 component:()=>import("./../components/Pinpai"),
                 name:"pinpai"
             },{
                 path:"/movie/teshe",
                 component:()=>import("./../components/Teshe"),
                 name:"teshe"
             }
        ]
    },
    {
        path: "/mine",
        component: () => import("@/view/mine"),
        name: "mine"
    }
]
const router = new vueRouter({
    mode: 'history',
    routes
})
export default router