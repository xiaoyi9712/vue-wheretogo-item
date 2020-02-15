import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        letter:'',
        city:localStorage.getItem('city')||"重庆"
    },
    mutations:{
        changeLetter(state,value){
            this.state.letter=value
        },
        changeCity(state,value){
            this.state.city=value
            localStorage.setItem('city',value)
        },
    }
})