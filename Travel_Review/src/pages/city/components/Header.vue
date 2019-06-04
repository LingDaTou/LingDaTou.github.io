<template>
	<div class="header">
          城市选择
        <router-link to="/">
            <div class="icon-back iconfont">
                &#xe624;
            </div>
        </router-link>
	</div>	
</template>

<script type="text/javascript">
	export default{
        name:"CityHeader",
        props:{
            city:String
        }
	}
</script>

<style lang="stylus" scoped>
// @import '~@/assets/styles/varibles.styl'

.header
    position :relative
    line-height 0.86rem
    height :.86rem
    background :#00bcd4
    color:#fff
    text-align :center
    font-size :.32rem
   .icon-back
       position:absolute
       top:0
       left:0
       width :.64rem
       text-align :center
       font-size :.4rem
       color :#fff
</style>