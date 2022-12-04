const app = Vue.createApp({
  data() {
    return {
      description: 'Example user goal text',
      linkVue: 'https://vuejs.org/',
    }
  },

  methods: {
    getRandomText() {
      const number = this.getRandomNumber()

      return this.generateRandomTextByNumber(number)
    },

    getRandomNumber() {
      return Math.random()
    },

    generateRandomTextByNumber(number) {
      if (number > 0.5) {
        return 'Good job!'
      }

      return 'Bad job!'
    },
  },
})

app.mount('#user-goal')
