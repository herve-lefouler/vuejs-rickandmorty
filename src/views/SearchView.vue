<template>
  <div>
    <CharacterSearch @updateWordsEvent="updateWordsOnSearchBar"></CharacterSearch>
    <ul>
      <li v-for="character in characters" :key="character.id">
        <CharacterTeaser v-bind:character="character"></CharacterTeaser>
      </li>
    </ul>
  </div>
</template>

<script>
import CharacterSearch from '../components/CharacterSearch'
import CharacterTeaser from '../components/CharacterTeaser'

export default {
  name: 'SearchView',
  components: {
    CharacterSearch,
    CharacterTeaser
  },
  data() {
    return {
      characters: []
    }
  },
  props: {
    words: {
      type: String,
      required: true
    }
  },
  methods: {
    updateWordsOnSearchBar: async function(wordsValue) {
      var rawResults = await this.getResults(wordsValue)
      this.characters = rawResults.results
    },
    getWords: function() {
      return this.words
    },
    getResults: function(wordsValue) {
      return fetch('https://rickandmortyapi.com/api/character/?name=' + wordsValue, {
          'method': 'GET'
        })
          .then(response => {
            return response.json()
          })
          .catch(error => {
            console.log(error)
          })
    }
  },
  watch: {
    // Observe les modifications sur word
    async words () {
    var rawResults = await this.getResults(this.words)
    this.characters = rawResults.results
    }
  },
  async created () {
    var rawResults = await this.getResults(this.words)
    this.characters = rawResults.results
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
