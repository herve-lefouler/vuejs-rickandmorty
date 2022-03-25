<template>
  <div>
    <SaisonsMenu></SaisonsMenu>
    <h1>{{ character.name }}</h1>
    <div class="columns">
      <div class="col">
        <img :src="character.image" :alt="character.name" :title="character.name" />
      </div>
      <div class="col">
        <img :src="getStatusUrl" />
        <img :src="getGenderUrl" />
        <div v-if="character.species" class="field">
          <label>Species : </label>
          <span>{{ character.species }}</span>
        </div>
        <div v-if="character.type" class="field">
          <label>Type : </label>
          <span>{{ character.type }}</span>
        </div>
        <div v-if="character.origin" class="field">
          <label>Origin : </label>
          <span>{{ character.origin.name }}</span>
        </div>
        <div v-if="character.location" class="field">
          <label>Actual location : </label>
          <span>{{ character.location.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SaisonsMenu from '../components/SaisonsMenu'

  export default {
    name: 'CharacterDetail',
    components: {
      SaisonsMenu
    },
    data() {
      return {
        characterId: null,
        character: [],
      }
    },
    computed: {
      getGenderUrl: function () {
        return `/${this.character.gender}.svg`
      },
      getStatusUrl: function () {
        return `/${this.character.status}.svg`
      }
    },
    methods: {
      getCharacter: function() {
      return fetch(`https://rickandmortyapi.com/api/character/${this.characterId}`, {
        'method': 'GET'
      })
        .then(response => {
          return response.json()
        })
        .catch(error => {
          console.log(error)
        })
      },
      getLocation: function(locationUrl) {
      return fetch(locationUrl, {
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
    async created () {
      this.characterId = this.$route.params.characterId;
      this.character = await this.getCharacter()
      if (this.character.origin) {
        this.character.origin = await this.getLocation(this.character.origin.url)
      }
      if (this.character.location) {
        this.character.location = await this.getLocation(this.character.location.url)
      }
    }
  }
</script>


<style scoped>
.columns {
  display: flex;
  justify-content: center;
}
.col:first-child {
  margin-right: 20px;
}
</style>
