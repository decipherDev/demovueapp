new Vue({
  el:'#vue-app',

  data: {
    name: "umesh",
    value: 0,
    x: 0,
    y: 0,
    dataBinding: "",
    employeeName: [
      {name : "thor"},
      {name : "captain america"},
      {name : "captain marvel"},
      {name : "iron man"}
    ]
  },

  methods: {
    print: function (keyword) {
      return "keyword";
    },

    add: function (num){
      console.log(this.value+num);
      this.value = this.value+num;
    },

    subtract: function (num){
      this.value-= num;
    },

    getCordinates: function (event) {
      console.log(event);
      this.x = event.x;
      this.y = event.y;
    }
  },

  computed: {

  }
});
