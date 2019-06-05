import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        city:"南京"
    },
    // actions在此部分可省略，vue component中使用this.$store.commit("changecitis",city)
    actions:{
        changeCity(ctx,city){
            // console.log(city)
            ctx.commit("changeCities",city)
        }
    },
    mutations:{
        changeCities(state,city) {
            state.city=city
        }
    }
})