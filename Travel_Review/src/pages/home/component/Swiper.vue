<template>
  <div class="wrapper">
      <swiper :options="swiperOptions" v-if="showSwiper">
    <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="swiper-img" 
          :src="item.imgUrl"/>
        </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>


<script>
export default {
    name:"HomeSwiper",
    props:{
      swiperList:Array
    },
    data(){
        return {
            swiperOptions:{
              pagination:'.swiper-pagination',
              loop:true
            }
        }
    },
    computed:{
      showSwiper(){
        return this.swiperList.length
      }
    }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active 
  background :#fff
.wrapper
  overflow :hidden
  height :0
  width :100%
  padding-bottom:25%
  background :#ccc
  .swiper-img
    width :100%
  
</style>


