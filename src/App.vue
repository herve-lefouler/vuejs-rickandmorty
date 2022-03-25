<template>
  <div id="app">
    <a href="/"><img class="logo" src="@/assets/logo.png" /></a>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFF;
  margin-top: 60px;
}
@font-face {
  font-family: "Creepster";
  src: local("Creepster"),
   url(./fonts/Creepster/creepster.ttf) format("truetype");
}
</style>
