<template>
  <div>
    <SaisonsMenu>
    </SaisonsMenu>
    <h1>Choose your season</h1>
  </div>
</template>

<script>
import SaisonsMenu from '../components/SaisonsMenu'

export default {
  name: 'HomeView',
  components: {
    SaisonsMenu
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
</style>
