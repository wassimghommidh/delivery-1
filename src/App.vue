<template>
  <div id="nav">
  </div>
  <!-- <router-view/> -->
</template>
<script>
import AdminMenu from "./components/AdminMenu.vue"

// import {Cardrestaurant} from "./components/Cardrestaurant"

export default {
  name: "App",
  components: {
    AdminMenu,
    
    
  }
}
</script>
<style>
 body {
    margin: 0;
    padding: 0;
  }

#app {
  font-family: Tahoma;
    font-size: 1.6rem;
    color: #222;
    background-color: #092525;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
