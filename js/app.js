var app = new Vue({
    el: "#app",
    data: {
     a: 0,
    },
    
    methods: {
    restarUno(){
        this.a--;
    },
    sumarUno(){
        this.a++;
    },
    restaurar(){
         this.a = 0;
    }
    }
  });