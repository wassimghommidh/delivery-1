<template>
  <div id="nav">
    
  </div>
  <router-view/>
</template>

<script>
import AdminMenu from "./components/AdminMenu.vue";

// import {Cardrestaurant} from "./components/Cardrestaurant"

export default {
  name: "App",
  components: {
    AdminMenu,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

body {
  background-image: url("../public/img1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
