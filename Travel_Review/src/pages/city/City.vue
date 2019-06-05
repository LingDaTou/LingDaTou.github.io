<template>
    <div class="city">
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handleChange"></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
    name:"City",
    data(){
        return{
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    methods:{
        getCityInfo(){
            axios.get('/api/city.json')
            .then(this.handleCityInfoSucc)
        },
        handleCityInfoSucc(response){
            response=response.data;
            if(response.ret && response.data){
                const data=response.data
                this.cities=data.cities
                this.hotCities=data.hotCities
            }
        },
        handleChange(letter){
            // console.log(letter)
            this.letter=letter
        }
    },
    mounted(){
        this.getCityInfo()
    }
}
</script>


<style lang="stylus"  scoped>

</style>

