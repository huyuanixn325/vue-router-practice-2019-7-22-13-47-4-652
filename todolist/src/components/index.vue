<template>
    <div>
        <button @click="back">返回</button><span>当前用户:{{username}}</span>
        <router-link :to="{name:'Main'}">todoList</router-link>
        <br>
         <router-link :to="{name:'Mine'}">我的</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
   
    export default {
        name: 'index',
        props:{username:String},
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