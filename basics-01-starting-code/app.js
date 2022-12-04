const app = Vue.createApp({
  data() {
    return {
      description: 'Example user goal text',
      linkVue: 'https://vuejs.org/',
      goodJobMessage: 'Good job!',
      badJobMessage: 'Bad job!',
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
        return this.goodJobMessage
      }

      return this.badJobMessage
    },
  },
})

app.mount('#user-goal')
