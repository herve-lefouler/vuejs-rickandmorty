<template>
  <div>
    <h1>Choose your episode</h1>
    <SaisonsMenu></SaisonsMenu>
    <h2>Or search a character</h2>
    <CharacterSearch></CharacterSearch>
    <p>
      This app is a VueJS POC listing seasons, episodes and characters from Rick and Morty animated science fiction sitcom.
      <br>
      The data came from the <a href="https://rickandmortyapi.com/" target="_blank">Rick and Morty API</a>.
    </p>
  </div>
</template>

<script>
import SaisonsMenu from '../components/SaisonsMenu'
import CharacterSearch from '../components/CharacterSearch'

export default {
  name: 'HomeView',
  components: {
    SaisonsMenu,
    CharacterSearch
  }
}
</script>

<style>
body {
  background: #000;
}
.logo {
  display: inline-block;
  margin-bottom: 40px;
}
ul {
  list-style-type: none;
}
h1,
h2 {
  color: #97ce4c;
  font-family: "Creepster", Arial;
  font-weight: normal;
  font-size: 40px;
  margin: 50px 0;
}
h3 {
  font-family: "Creepster", Arial;
  font-weight: normal;
  font-size: 30px;
}
a {
  color: #01B4C6;
  text-decoration: none;
}
a:hover,
a.router-link-active {
  color: #97ce4c;
}
label {
  font-weight: bold;
}
.field {
  margin: 10px 0;
}
p {
  line-height: 32px;
  margin: 50px 0;
}
</style>
