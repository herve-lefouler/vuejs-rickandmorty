<template>
  <form @submit.prevent="submit">
    <input type="search" v-model="words" @keyup.enter="submit" @input="updateWords" placeholder="Search a character" />
  </form>
</template>

<script>
  export default {
    /* Route data from router.js */
    data(){
      return {
        words : null
      }
    },
    methods: {
      submit(){
        this.$router.push("/search/" + this.words);
      },
      updateWords(event){
        this.$emit('updateWordsEvent', event.currentTarget.value)
      }
    }
  }
</script>

<style scoped>
  input[type="search"] {
    display: inline-block;
  }
</style>
