<template>
  <div>
    <SaisonsMenu></SaisonsMenu>
    <h1>{{ episode.name }}</h1>
    {{ episode.air_date }}
    <ul>
      <li v-for="character in characters" :key="character.id">
          <CharacterTeaser v-bind:character="character"></CharacterTeaser>
      </li>
    </ul>
  </div>
</template>

<script>
import SaisonsMenu from '../components/SaisonsMenu'
import CharacterTeaser from '../components/CharacterTeaser'

export default {
  name: 'EpisodeDetail',
  components: {
    SaisonsMenu,
    CharacterTeaser
  },
  data() {
    return {
      episode: {},
      characters: []
    }
  },
  props: {
    episodeId: {
      type: String,
      required: true
    }
  },
  // Propriétés calculées
  // Synchrone
  computed: {

  },
  methods: {
    // Récupère les données sur un épisode
    // Renvoie les données brutes du WS
    // @see https://rickandmortyapi.com/documentation/#get-a-single-episode
    getRawEpisode: function (url = 'https://rickandmortyapi.com/api/episode/' + this.episodeId) {
      return fetch(url, {
        'method': 'GET'
      })
        .then(response => {
          return response.json()
        })
        .catch(error => {
          console.log(error)
        })
    },
    getCharactersDetails: function() {
      var charactersIds = []
      this.episode.characters.forEach(character => {
        const regex  = /^https:\/\/rickandmortyapi.com\/api\/character\/(?<characterId>[0-9]+)/u
        // On récupère l'identifiant du personnage
        const { groups: { characterId } } = regex.exec(character)
        charactersIds.push(characterId)
      });
      return fetch('https://rickandmortyapi.com/api/character/' + charactersIds, {
        'method': 'GET'
      })
        .then(response => {
          return response.json()
        })
        .catch(error => {
          console.log(error)
        })
    },
    setHtmlTitle: function() {
      document.title = 'Rick and Morty | ' + this.episode.episode;
    }
  },
  // watch
  // Permet des appels asynchrones
  watch: {
    // Observe les modifications sur episodeId
    async episodeId () {
      this.episode = await this.getRawEpisode()
      this.characters = await this.getCharactersDetails()
      // Update HTML title
      this.setHtmlTitle();
    }
  },
  async created () {
    this.episode = await this.getRawEpisode()
    this.characters = await this.getCharactersDetails()
    // Set initial HTML title
    this.setHtmlTitle();
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
