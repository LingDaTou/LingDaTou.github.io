<template>
	<div class="home">
		<home-header :city="city"></home-header>
		<home-swiper :swiperList="swiperList"></home-swiper>
		<home-icons :iconList="iconList"></home-icons>
		<home-recommend :recommendList="recommendList"></home-recommend>
		<home-weekend :weekendList="weekendList"></home-weekend>
	</div>	
</template>

<script>
import HomeHeader from './component/Header'
import HomeSwiper from './component/Swiper'
import HomeIcons from './component/Icons'
import HomeRecommend from './component/Recommend'
import HomeWeekend from './component/Weekend'
import axios from 'axios'

	export default{
		name:"Home",
		components:{
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		},
		data(){
			return {
				city:"",
				swiperList:[],
				iconList:[],
				recommendList:[],
				weekendList:[]
			}
		},
		methods:{
			getHomeInfo(){
				axios.get('/api/index.json')
				.then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc(response){
				response=response.data
				if(response.ret && response.data){
					response=response.data
					this.city=response.city
					this.swiperList=response.swiperList
					this.iconList=response.iconList
					this.recommendList=response.recommendList
					this.weekendList=response.weekendList

				}
			}
		},
		mounted(){
			this.getHomeInfo()
		}
	}
</script>

<style scoped>

</style>