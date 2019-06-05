<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img"
            src="https://img1.qunarzz.com/sight/p0/1601/d4/d4f1a62140b9d93590.img.jpg_600x330_16d61609.jpg" 
            >
            <div class="banner-info">
                <div class="banner-title">牛首山文化旅游区(AAAA景区)</div>
                <div class="banner-number">
                    <span class="iconfont">&#xe674;</span>
                    15</div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </div>
</template>


<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name:"DetailBanner",
    data(){
        return {
            imgs:[
                    "http://img1.qunarzz.com/sight/p0/1601/88/887e26529b26a8c390.img.jpg_350x240_6c1a80d9.jpg",
                    "http://img1.qunarzz.com/sight/p0/1601/5e/5e76615cab0005f490.img.jpg_r_800x800_c3b473fe.jpg"
                ],
            showGallary:false
        }
    },
    components:{
        CommonGallary
    },
    methods:{
        handleBannerClick(){
            this.showGallary=true
        },
        handleGallaryClose(){
            this.showGallary=false
        }
    }
}
</script>


<style lang="stylus" scoped>
.banner
    position :relative
    overflow :hidden
    height:0
    padding-bottom:55%
    .banner-img
        width :100%
    .banner-info
        display:flex
        position:absolute
        left:0
        right:0
        bottom:0
        line-height:.6rem
        color:#fff
        background:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
        .banner-title
            flex:1
            font-size :.32rem
            padding:.2rem
        .banner-number
            margin-top:.32rem
            padding:0 .4rem
            line-height :.32rem
            height :.3rem
            border-radius :.2rem
            background :rgba(0,0,0,0.8)
            font-size:.24rem
            .banner-icon
                font-size:.24rem
</style>

