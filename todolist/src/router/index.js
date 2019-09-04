import vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/Welcome.vue'
import index from '../components/index.vue'
vue.use(Router)

export default new Router({
    routes:[
        {
            path:"/",
            component:Welcome
        },
        {
            path:"/index:username",
            component:index,
            props:true
        }
    ]
})