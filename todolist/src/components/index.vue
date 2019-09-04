<template>
    <div>
        <button @click="back">返回</button><span>当前用户:{{username}}</span>
       <Main></Main>
    </div>
</template>

<script>
    import Main from './mainTodoList.vue'
    export default {
        name: 'index',
        props:{username:String},
        components: {
            Main
        },
        methods:{
            back:function(){
                if(confirm("确认返回?")){
                    this.$router.push("/");
                }else{

                }
            }
        }
    }
</script>
<style scoped>
    button{
      height: 20px;
       float:"left";  
    }
    span{
        display: block;
        margin-top: 0px;
        float:"right";
    }
   
</style>