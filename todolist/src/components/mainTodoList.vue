<template>
    <div id="main">
        <h2>
          Vue To Do List
          Simple Todo List with adding and filter by diff status.
        </h2>
         <CreateForm/>
        <TodoList/>
        <TodoListFilter/>
    </div>
</template>

<script>
    import CreateForm from './CreateForm.vue'
    import TodoList from './TodoList.vue'
    import TodoListFilter from './TodoListFilter.vue'

    export default {
        name: 'index',
        components: {
            CreateForm,
            TodoList,
            TodoListFilter,
        },created:function(){
            this.$store.dispatch("fetchTodos"); 
        }
    }
</script>
<style scoped>
 #main{
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 40px;
 }

</style>