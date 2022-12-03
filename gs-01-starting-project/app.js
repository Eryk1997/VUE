Vue.createApp({
  data() {
    return {
      descriptions: [],
      description: '',
    }
  },

  methods: {
    addDescription() {
      this.descriptions.push(this.description)
      this.description = ''
    },
  },
}).mount('#app')
