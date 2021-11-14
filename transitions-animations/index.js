const app = {
  data() {
      return {
        visible: true,
        opacity: true,
        anime: 1,
        value: '',
        fruits: ['fruit 1', 'fruit 2', 'fruit 3'],
        animate: false
      }
  },
  methods: {
    ajouter() {
      this.fruits.push(this.value);
      this.value = '';
    },
    supprimer() {
      this.fruits.shift();
    }
  }
};

Vue.createApp(app).mount("#app");