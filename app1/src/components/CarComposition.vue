<template>
  <div>
    <h2>Car Composition-API</h2>
    <p>marca: {{ brand }}</p> <!--definir variables-->
    <p>modelo: {{ model }}</p>
    <p>potencia: {{ power }}</p>
     <button @click="upPower(20)">aumentar 2</button>
     <button @click="downPower">disminuir 2</button>
  </div>
  <br>
  </template>

<script>
import { ref } from 'vue' //para ocupar con la variable

export default {
 //se ocupa más la de composición 
 //binding valor que cambia al instante
  setup() {
    const brand = 'chevrolet'
    const model = 'azul'
    let power = ref(40) //el valor de las constantes no varía - debe ser let

    const upPower = (newPower) => {
      // console.log('aumentar 2 :')
      // console.log(power);
      // power.value++
      power.value = power.value + newPower

    } 
    const downPower = () => {
     // console.log('disminuir 2 :' + newPower)
     power.value--
    }
  
    return {
      brand, model, power,
      upPower,
      downPower
      }
    }
  }
</script>

<!-- Add attribute to limit CSS to this component only -->
<style>

</style>
