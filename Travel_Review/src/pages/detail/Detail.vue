<template>
    <div class="detail">
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header ></detail-header>
        <div class="content">
            <detail-list :list="categoryList"></detail-list>
        </div>
    </div>
</template>


<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
    name:"Detail",
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return {
            sightName:"",
            bannerImg:"",
            gallaryImgs:[],
            categoryList:[]
        }
    },
    mounted(){
        this.getDetailInfo();
    },
    methods:{
        getDetailInfo(){
            axios.get('/api/detail.json',{
                params:{
                    id:this.$route.params.id
                }
            })
            .then(this.getDetailInfoSucc)
        },
        getDetailInfoSucc(response){
            response=response.data;
            if(response.ret && response.data){
                response=response.data
                this.sightName=response.sightName
                this.bannerImg=response.bannerImg
                this.gallaryImgs=response.gallaryImgs
                this.categoryList=response.categoryList
            }
        }
    }
}
</script>


<style lang="stylus" scoped>
.content
    height :50rem
</style>

