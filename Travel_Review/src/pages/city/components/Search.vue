<template>
    <div>
        <div class="search">
            <input type="text" placeholder="请输入城市名或拼音" class="search-input" v-model="keyword">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" 
                v-for="item of list" :key="item.id"
                @click="handleBtnClick(item.name)"
                >
                {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNodata">没有找到匹配数据</li>
            </ul>
         </div>
    </div>
</template>


<script>
import Bscroll from 'better-scroll'

export default {
    name:"CitySearch",
    props:{
        cities:Object
    },
    data(){
        return{
            keyword:'',
            list:[],
            timer:null
        }
    },
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list=[]
                return
            }
            this.timer=setTimeout(()=>{
                const result=[];
                for(let i in this.cities){
                    this.cities[i].forEach((ele)=>{
                        if(ele.spell.indexOf(this.keyword) > -1 || ele.name.indexOf(this.keyword)>-1){
                            result.push(ele)
                        }
                    })
                }
                this.list=result
            },100)
        }
    },
    methods:{
        handleBtnClick(city){
            this.$store.dispatch("changeCity",city)
            this.$router.push('/')
        }
    },  
    mounted(){
        this.scroll=new Bscroll(this.$refs.search)
    },
    computed:{
        hasNodata(){
            return !this.list.length
        }
    }
}
</script>

<style lang="stylus" scoped>
.search
    background :#00bcd4
    height :.72rem
    padding : 0 .1rem
    .search-input
        box-sizing :border-box
        height :.62rem
        line-height :.62rem
        width :100%
        text-align :center
        border-radius :.06rem
        color :#666
        padding:0 .1rem
.search-content
    position :absolute
    overflow :hidden
    top:1.58rem
    left:0
    right :0
    bottom:0
    background :#eee
    z-index :1
    .search-item
        line-height :.62rem
        padding-left :.2rem
        color:#666
        background :#fff

</style>

