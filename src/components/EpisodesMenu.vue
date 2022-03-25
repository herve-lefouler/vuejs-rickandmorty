<template>
  <div>
    <a href="#" v-on:click="toggleEpisodes(saison)">{{ saison.saisonName }}</a>
    <ul class="episodes" v-if="saison.isActive">
      <li v-for="episode in saison.episodes" :key="episode.episode">
        <router-link :to="{ name: 'Episode', params: {episodeId: episode.id}}">
            {{ episode.episode }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [
    'saison'
  ],
  methods: {
    toggleEpisodes: function (saison) {
      saison.isActive = (!(saison.isActive))
      this.$emit('saisonActivated', saison)
    }
  }
}
</script>

<style scoped>
.episodes {
  display: flex;
  margin: 10px 0;
}
li {
  margin: 0 10px;
}
</style>
