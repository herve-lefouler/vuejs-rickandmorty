<template>
  <div>
    <router-link :to="{ name: 'Character', params: {characterId: character.id}}">
      <h3>{{ character.name }}</h3>
      <img :src="character.image" :alt="character.name" :title="character.name" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  h3 {
    color: #01B4C6;
  }
</style>
