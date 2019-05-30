<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of page" :key="index">
                <div v-for="item of page" :key="item.id"
                class="icon">
                    <div class="icon-img">
                        <img class="icon-img-content"
                        :src="item.ImgUrl" />
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>       
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name:"HomeIcons",
    data(){
        return {
            swiperOption:{},
            iconList:[{
                id:"001",
                ImgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                desc:"景点名票"
            },{
                id:"002",
                ImgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                desc:"一日游"
            },{
                id:"003",
                ImgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                desc:"一日游"
            },{
                id:"004",
                ImgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                desc:"一日游"
            },{
                id:"005",
                ImgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                desc:"一日游"
            },{
                id:"006",
                ImgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                desc:"一日游"
            },{
                id:"007",
                ImgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                desc:"一日游"
            },{
                id:"008",
                ImgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                desc:"一日游"
            },{
                id:"009",
                ImgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                desc:"一日游"
            }]
        }
    },
    computed:{
        page () {
            const pages=[]
            this.iconList.forEach((item,index)=>{
                const page=Math.floor(index/8)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
.icons >>> .swiper-container
    overflow:hideen
    height :0
    padding-bottom :50%
.icon
    position :relative
    overflow :hidden
    float :left
    width :25%
    height :0
    padding-bottom :25%
    overflow :hidden
    .icon-img
        position :absolute
        top:0
        left :0
        right :0
        bottom :.44rem
        box-sizing :border-box
        padding:.1rem
        .icon-img-content
            display :block
            margin :0 auto
            height:100%
    .icon-desc
        position :absolute
        left :0
        right :0
        bottom :0
        line-height :.44rem
        height :.44rem
        text-align :center
        color:#333
        overflow :hidden
        white-space :nowrap
        text-overflow:ellipsis

</style>


