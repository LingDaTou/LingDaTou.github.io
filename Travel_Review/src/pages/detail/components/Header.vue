<template>
    <div>
        <router-link tag="div" class="header-abs" to="/" v-show="showAbs">
            <span class="iconfont back-icon">&#xe624;
            </span>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            景点详情
            <div class="header-fixed-icon iconfont">&#xe624;</div>
        </div>
    </div>
</template>


<script>
export default {
    name:"DetailHeader",
    data(){
        return {
            showAbs:true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    methods:{
        handleScroll(){
            const top=document.documentElement.scrollTop
            if(top > 60) {
                let opacity=top/140
                opacity=opacity > 1 ? 1: opacity
                this.opacityStyle={
                    opacity:opacity
                }
                this.showAbs=false
            }else{
                this.showAbs=true
            }
        }  
    },
    activated(){
        window.addEventListener("scroll",this.handleScroll)
    },
    deactivated(){
        window.removeEventListener("scroll",this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
.header-abs
    position :absolute
    left 0.2rem
    top:.2rem
    width:.8rem
    height :.8rem
    border-radius :.4rem
    background :rgba(0,0,0,0.8)
    text-align :center
    .back-icon
        color :#fff
        font-size :.4rem
        line-height :.8rem
.header-fixed
    position :fixed
    top:0
    left:0
    right:0
    line-height 0.86rem
    height :.86rem
    background :#00bcd4
    color:#fff
    text-align :center
    font-size :.32rem
    z-index:2
    .header-fixed-icon
       position:absolute
       top:0
       left:0
       width :.64rem
       text-align :center
       font-size :.4rem
       color :#fff
</style>
