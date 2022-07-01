<template>
  <div id="app">
    <ul class="header-menu">
      <li>
        <router-link :to="{ name: 'My collection'}">
          My Collection
        </router-link>
      </li>
    </ul>
    <a href="/"><img class="logo" src="@/assets/logo.png" /></a>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    document.title = "Rick and Morty";
  }
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

input {
  padding: 20px;
  color: #01B4C6;
  font-size: 18px;
  width: 50%;
}
.header-menu {
      position: fixed;
    right: 10%;
}
</style>
