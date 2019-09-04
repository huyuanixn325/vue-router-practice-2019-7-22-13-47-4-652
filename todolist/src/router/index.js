import vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/Welcome.vue'
import index from '../components/index.vue'
import Main from '../components/mainTodoList.vue'
import Mine from '../components/mine.vue'

vue.use(Router)

export default new Router({
    routes:[
        {
            path:"/",
            component:Welcome
        },
        {
            path:"/index/:username",
            component:index,
            props:true,
            children:[
                {
                    path:"Main",
                    name:"Main",
                    component:Main
                },
                {
                    path:"/index/:username/Mine/:username",
                    component:Mine,
                    props:true
                },
                {
                    path:"/",
                    redirect:'Main'
                }
            ]
        }
    ]
})