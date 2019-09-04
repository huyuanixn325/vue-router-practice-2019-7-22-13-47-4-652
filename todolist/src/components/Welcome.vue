<template>
    <div>
        <h1>欢迎使用TODOList</h1>
          <br>
        <input type="text" v-model="inputtingText">
        <button @click="handleInput">开始使用</button>
    </div>
</template>
<script>
export default {
    name:'welcome',
    data:function(){
        return{
           inputtingText:'' 
        }
    },
    methods:{
        handleInput:function(){
            this.$router.push('/index/'+this.inputtingText);
        }
    }
}
</script>