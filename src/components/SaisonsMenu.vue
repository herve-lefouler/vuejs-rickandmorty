<template>
  <ul class="saisons">
    <li v-for="saison in episodesPerSeasons" :key="saison.saisonName">
      <EpisodesMenu v-bind:saison="saison" @saisonActivated="disableOtherSeasons"></EpisodesMenu>
    </li>
  </ul>
</template>

<script>
import EpisodesMenu from '../components/EpisodesMenu'

export default {
  name: 'SaisonsMenu',
  components: {
    EpisodesMenu
  },
  data: function () {
    return {
      rawEpisodesResult: [],
      episodesPerSeasons: []
    }
  },
  methods: {
    disableOtherSeasons (activatedSaison) {
      Object.entries(this.episodesPerSeasons).forEach(([key, value]) => {
        if (key !== activatedSaison.saisonName) {
          value.isActive = false
        }
      })
    },
    // Récupère les données sur les saisons
    // Renvoi les données brutes du WS
    // Parcours toutes les pages de résultats
    // @see https://rickandmortyapi.com/documentation/#get-all-episodes
    getRawSaisons: function (url = 'https://rickandmortyapi.com/api/episode') {
      return fetch(url, {
        'method': 'GET'
      })
        .then(response => {
          return response.json()
        })
        .then(episodes => {
          this.rawEpisodesResult = this.rawEpisodesResult.concat(episodes.results)
          if (episodes.info.next != null) {
            return this.getRawSaisons(episodes.info.next)
          } else {
            return this.rawEpisodesResult
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  // Hook : executé avant l'ajout au DOM du composant
  async created () {
    const episodes = await this.getRawSaisons()
    var episodesPerSeasons = {}
    episodes.forEach(episode => {
      const episodeSaison = episode.episode.split('E')
      var saisonIndex = episodeSaison[0]
      if (episodesPerSeasons[saisonIndex] === undefined) {
        episodesPerSeasons[saisonIndex] = {
          saisonName: saisonIndex,
          episodes: [],
          isActive: false // (saisonIndex === 'S01')
        }
      }
      // On concatène au tableau l'épisode
      episodesPerSeasons[saisonIndex].episodes = episodesPerSeasons[saisonIndex].episodes.concat(episode)
    })
    this.episodesPerSeasons = episodesPerSeasons
  }
}
</script>

<style scoped>
.saisons {
  display: flex;
  justify-content: center;
}
.episodes {
  display: flex;
}
li {
  margin: 0 20px;
}
</style>
