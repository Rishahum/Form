<template>
  <div class="whole"> 
    <Nav class="nav"/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <RouterView></RouterView>
  </div>
  <!-- <RouterView></RouterView> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/nav.vue'

export default {
  name: 'App',
  components: {
    Nav,
    // HelloWorld
  }
}
</script>

<style>
.whole{
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav{
  margin-bottom: 50px;
}
.nav {
  width: 100%;
  height: 100px;
  padding: 33px 50px; 
}
body{
  background-image: url("@/assets/background.jpg");
  background: cover;
  background-size: cover;
}
</style>
