// inserimento variabili nel todo
const app = new Vue ({
  el: "#app",
  data: {
    indexItem: 0,
    items: ['fare i compiti', 'fare la spesa', 'fare il bucato'],
    newItem: ''
  },

  methods:{

    addItem() {
      this.items.push(this.newItem);
      this.newItem ='';
    },
    removeEl(index) {
      this.items.splice(index, 1);
    },
    submit() {
      this.items.push(this.newItem);
      this.newItem ='';
    }
  }
});
