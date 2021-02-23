let app = new Vue({
    el:'#lista',
    data:{
        header: "Listado de utiles",
        newUtil: "",
        utiles: [
            //'10 cuadernos',
            //'15 lapices',
            //'5 cajas colores'
            ]
    },
    methods: {
        agregarElemento(){
            this.utiles.push(this.newUtil);
            this.newUtil = "";
        },

    },
});