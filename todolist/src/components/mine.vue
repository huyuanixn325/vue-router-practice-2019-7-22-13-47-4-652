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
            username:'gaoyang',
            telephone:'18339920955'
        }
    }
}
</script>

<style scoped>
img{
    height: 40px;
    width: 40px;
}
</style>