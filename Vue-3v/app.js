/*const app = Vue.createApp({
    template:
    '<p>{{ msg + " " +  persona.nombre + "!" }}</p>'
    ,
    data(){
        return {
            msg : "Hola ",
            persona: {
                nombre: 'daniel',
                edad: 28

            }
        }
    }
}).mount('#app');*/

const app = Vue.createApp({
    template:
    `<p>Cantidad : {{ contador }}</p>
    <button v-on:click="incrementar()">Incrementar</button>
    <button v-on:click="decrementar()">Decrementar</button>
    <p v-if="contador%2 === 0 && contador !== 0"> Es par</p>
    <div v-for="num in numeros">
      <p v-if="esPar(num)">
            {{ num }}
      </p>
    </div>
    <div v-for="num in listarNumerosImpares">
                {{ num }}
    </div>
    `
    
    ,
    data(){
        return {
            contador : 0,
            numeros: [1,2,3,4,5,6,7,8,9,10]
        }
    },
    methods: {
        incrementar(){
            this.contador += 1;
        },
        decrementar(){
            this.contador -= 1;
        },
        esPar(num){
            return (num % 2 === 0);
        }
    },
    computed: {
        listarNumerosImpares(){
            return this.numeros.filter( num => {
                return !this.esPar(num);
            });
        }
    }
}).mount('#app2');