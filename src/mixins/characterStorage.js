export default {
  created() {
    if (localStorage.getItem('characters')) {
      try {
        this.characters = JSON.parse(localStorage.getItem('characters'));
      } catch (e) {
        localStorage.removeItem('characters');
      }
    } else {
      this.characters = []
    }
  },
  methods: {
    getCharacters() {
      return this.characters
    },
    characterStored(character) {
      if (!character) {
        return;
      }
      let find = this.characters.find(object => object.id == character.id)
      return find
    },
    storeCharacter(character) {
      if (!character) {
        return;
      }
      this.characters.push(character)
      const parsed = JSON.stringify(this.characters);
      localStorage.setItem('characters', parsed);
    },
    removeCharacter(character) {
      if (!character) {
        return;
      }
      this.characters = this.characters.filter(function (value) {
        return value.id != character.id;
      });
      const parsed = JSON.stringify(this.characters);
      localStorage.setItem('characters', parsed);
    }
  }
}
