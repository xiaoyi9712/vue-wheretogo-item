<template>
    <div class="city">
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :hotCities="hotCities" :cities='cities'></city-list>
        <city-alphabet :cities='cities'></city-alphabet>
    </div>
</template>

<script>
import {getCity} from '@/api'
import CitySearch from './base/CitySearch'
import CityHeader from './base/CityHeader'
import CityList from './base/CityList'
import CityAlphabet from './base/CityAlphabet'
export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
        return{
            hotCities:[],
            cities:[]
        }
    },
    created(){
        this.getData
    },
    computed:{
       async getData(){
           let {hotCities,cities} = await getCity()
                this.hotCities = hotCities
                this.cities = cities
        }
    }
}
</script>

<style>

</style>