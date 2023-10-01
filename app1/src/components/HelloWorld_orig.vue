<template>
  <div>
    <h2>auto original</h2>
    <p>marca: {{ brand }}</p> <!--definir variables-->
    <p>modelo: </p>
      <!-- <span v-for='(model, index) in models' :key="index"> gregar key para parámetro dinamico
        {{ index }}: {{ model }} - index id - para construir listas y tablas
      </span> -->
      <ul>
        <li v-for="(model, index) in models" :key="index">
          {{ index }}: {{ model }} -
        </li>
      </ul>
    
    <p>{{ an }}</p> <br>
    <a> {{ mensaje.title }} - {{ mensaje.text }} </a>
    <p>potencia</p>
    <ul>
      <!-- <li v-for="(power,index) in powers" :key="index">
        <template v-if="power < 30"> asi se maneja if else en vue
           {{ power }} 
        </template> template v-if para no renderizar todo sino tiene contenido 
      </li> -->

      <template v-for="(power,index) in powers" :key="index">
        <li v-if="power < 30">menor {{ power }}</li>
        <li v-else-if="power === 30">igual {{ power }}</li>
        <li v-else>mayor {{ power }}</li>

      </template>
      </ul>
    <ul>
      <!-- <li v-for="(power,index) in powers" :key="index">
        <template v-if="power < 30"> asi se maneja if else en vue
           {{ power }} 
        </template> template v-if para no renderizar todo sino tiene contenido 
      </li> -->
      </ul>
     
  </div>
  </template>

<script>
export default {

  /*data(){ 
    return {
      brand: 'audi',
      model: ["verde","azul","3"],
      an: 2001,
      mensaje: {
        title: "hola",
        text: "adios"
      }
    }
  },

  name: 'HelloWorld',
  props: {
  } 
  
  1ra forma habitual de hacerlo 
  porque se crea un objeto
  2da - mejor declarar variables y reutilizarlas
  no es necesario declarar variables con vue
  */

  setup(){
    const brand = 'audi' /*otra forma de hacerlo */
    const models = ['verde','azul','morado']
    const an = 2001
    const powers = [10,20,30,40,50]
    const mensaje =  {
      title: 'hola 2',
      text: 'texto 2'
    }
    return {
      brand, models, an, mensaje, powers
    }
  }
}
</script>

<!-- Add attribute to limit CSS to this component only -->
<style>

</style>
