<template>
    <div>
        
        <div><button @click="back">返回</button><span>当前用户:{{username}}</span></div>
        <div>
        <div class="left">
        <router-link :to="{name:'Main'}">todoList</router-link>
        <br>
         <router-link :to="'/index/'+username+'/Mine/'+username">我的</router-link>
        </div>
        <div class="right">
      <router-view></router-view>
        </div>
        </div>
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
       position:abslote;
       top:0px;
       left:0px;
    }
    span{
        float: right;
        margin-top: 0px;
    }
   .left{
       text-align-last: center;
       width:200px;
       display:inline-block;
   }
   .right{
       height: 800px;
       display:inline-block;
       text-align: center;
   }
</style>