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
        <a href="#" @click="updateCollection">
          <template v-if="characterIsFavorite()">
            Remove from my collection
          </template>
          <template v-else>
            Add to my collection
          </template>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import SaisonsMenu from '../components/SaisonsMenu'
  import characterStorage from '../mixins/characterStorage.js'

  export default {
    name: 'CharacterDetail',
    components: {
      SaisonsMenu
    },
    mixins: [characterStorage],
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
      // Appelle le WS character
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
      // Appelle le WS location
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
      },
      // Détermine si le personnage est déjà ajouté
      characterIsFavorite: function() {
        return this.characterStored(this.character)
      },
      // Ajout ou suppression des favoris
      updateCollection: function() {
        if (this.characterStored(this.character)) {
          this.removeCharacter(this.character)
        } else {
          this.storeCharacter(this.character)
        }
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
      // Set HTML Title
      document.title = 'Rick and Morty | ' + this.character.name;
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
