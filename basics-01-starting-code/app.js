const app = Vue.createApp({
  data() {
    return {
      description: 'Example user goal text',
      linkVue: 'https://vuejs.org/',
    }
  },
})

app.mount('#user-goal')
