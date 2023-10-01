<template>
  <h1>vue js</h1>
  <!--importar nuevos componentes-->
  <HelloWorld_orig />
  <hr />
  <CarComposition />
  <CarOptions />
  <hr />
  <!--se envía la variable mediante props - dos puntos para decirle var-->
  <NewCar :power="power" :upPower="upPower"/><!--para enviar funcion-->
  
</template>

<script>
//importar nuevos componentes
import { ref } from 'vue';
import HelloWorld_orig from './components/HelloWorld_orig.vue';
import CarComposition from './components/CarComposition.vue';
import CarOptions from './components/CarOptions.vue';
import NewCar from './components/NewCar.vue';

export default {
  name: 'App',
  components: {
    HelloWorld_orig,
    CarComposition,
    CarOptions,
    NewCar
  },
  //se envía desde acá
  setup(){
    let power = ref(30)

    //para enviar funcion con props
    const upPower = () => {
      // console.log('aumentar power')
      power.value++
    }

    //se retorna 
    return{
      power,
      upPower //retornar funcion
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
