// inserimento variabili nel todo
const app = new Vue ({
  el: "#app",
  data: {
    items: ['fare i compiti', 'fare la spesa', 'fare il bucato']
  },

  methods:{

    addItem() {
      this.items.push(this.newItem);
      this.newItem ='';
    }
  }
});
