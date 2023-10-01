<template>
  <div>
    <h2>New Car Composition-API</h2>
    <p>marca: {{ brand }}</p> <!--definir variables-->
    <p>modelo: {{ model }}</p>
    <p>potencia: {{ power }}</p> <!--aqui se muestra la var
    no hace falta retornarlo, ya que llega directo-->
    <!-- antiguo
      <button @click="testPower">aumentar 3</button> 
      pasar directo-->
      <button @click="upPower">aumentar 3</button>
  </div>
  <br>
  </template>

<script>

export default {
 //componentes props
 props: {
  power: {
    type: Number,
    default: 50 //si no llega el valor por default es este
  },
  upPower: Function //recibe funcion 
 },
  setup() { //se recibe props - para pasar directamente se elimina props**
    const brand = 'chevrolet'
    const model = 'azul'

    // console.log(props)

    //para utilizar funcion
    //si solo se quiere pasar la función se puede enviar directamente 
    //y no llamandola de esta forma
    //se elimina tambien return
    // const testPower = () => {
    //   props.upPower()
    // }
  
    return {
      brand, model //, testPower
      }
    }
  }
</script>

<!-- Add attribute to limit CSS to this component only -->
<style>

</style>
