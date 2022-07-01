<template>
  <div>
    <ul>
      <li v-for="character in characters" :key="character.id">
        <CharacterTeaser v-bind:character="character"></CharacterTeaser>
      </li>
    </ul>
  </div>
</template>

<script>
  import characterStorage from '../mixins/characterStorage.js'
  import CharacterTeaser from '../components/CharacterTeaser'

  export default {
    name: 'CharacterCollection',
    components: {
      CharacterTeaser
    },
    mixins: [characterStorage],
    data() {
      return {
        characters: []
      }
    },
    created() {
      this.characters = this.getCharacters()
    }
  }
</script>

<style scoped>
  ul {
     display: flex;
     justify-content: center;
     flex-wrap: wrap;
  }
  li {
    margin: 20px 3%;
  }
  h2 {
    font-size: 60px;
  }
</style>
