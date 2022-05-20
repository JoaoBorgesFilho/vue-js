const MyNameApp = {
    data() {
      return {
        name: "João",
        age: 29,
        input_name: ""
      }
    },
    methods: {
      submitForm(e) {

        e.preventDefault();

        console.log("Caiu aqui!")

      }
    }
  }
  
  Vue.createApp(MyNameApp).mount('#app')