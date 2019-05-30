<template>
  <div class="wrapper">
      <swiper :options="swiperOption">
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
    data(){
        return {
            swiperOption:{
              pagination:'.swiper-pagination',
              loop:true
            },
            swiperList:[{
              id:"001",
              imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/09ffcaeda816db4afd9314869afc0651.jpg_750x200_db25c091.jpg"
            },{
              id:"002",
              imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg"
            }]
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


