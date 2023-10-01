//aqui ya ocupa vue
const app = Vue.createApp({
    setup() {
        const title = 'titulo desde js'
        const variable = 80
        
        return{
            title, variable
        }
    }
})