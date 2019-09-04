<template>
    <div>
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
        props:['username'],
        components: {
            CreateForm,
            TodoList,
            TodoListFilter,
        },created:function(){
            this.$store.dispatch("fetchTodos"); 
        }
    }
</script>
