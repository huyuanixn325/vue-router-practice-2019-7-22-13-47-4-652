<template>
    <div id="mine">
        <img src="../assets/img.jpg">
        <br>
        <span>{{username}}</span>
        <br>
        <span>{{telephone}}</span>
    </div>
</template>
<script>
export default {
    name:'mine',
    data:function(){
        return {
            telephone:'18339920955'
        }
    },
    props:{
        username:String
    }
}
</script>

<style scoped>
#mine{
    text-align: center;
    margin-top: 30px;
}
img{
    height: 40px;
    width: 40px;
}
</style>