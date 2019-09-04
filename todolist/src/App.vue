<template>
  <div id="app">
        <router-view></router-view>  
  </div>
</template>


<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .items {
        list-style: none;
        text-align: left;
        line-height: 30px;
    }

    .items li.completed {
        text-decoration: line-through;
    }

    .filter a {
        margin: 0 10px;
        line-height: 30px;
    }

    .filter a.active {
        color: #f60;
        border: 1px solid #ccc;
        border-radius: 2px;
        padding: 3px;
        cursor: pointer;
    }
</style>

