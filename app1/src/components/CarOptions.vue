<template>
  <div>
    <h2>Car Options-API</h2>
    <p>marca: {{ brand }}</p> <!--definir variables-->
    <p>modelo: {{ model }}</p>
    <p>potencia: {{ power }}</p>
     <button @click="upPower(50)">aumentar 1</button>
     <button @click="downPower">disminuir 1</button>
  </div>
  <br>
  </template>

<script>
export default {

  data(){ 
    return {
      brand: 'mercedez benz',
      model: 'amarillo', 
      power: 50
      }
    },
    methods: { //funciones que se pueden ejecutar en el return
      upPower(newPower){
        // console.log('+1 potencia:')
        // //console.log(this.power)
        // this.power = this.power + 1
        //this.power++
        this.power = this.power + newPower
      },
      downPower(){
        // console.log('-1 potencia')
        this.power--
      }
    }
  }

</script>

<!-- Add attribute to limit CSS to this component only -->
<style>

</style>
