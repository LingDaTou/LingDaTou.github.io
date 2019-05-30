<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom"
            v-for="item of recommendList" :key="item.id">
                <img  class="item-img"
                    :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-title">{{item.title}}}</p>
                    <p class="item-desc">{{item.desc}}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"HomeRecommend",
    data(){
        return {
            recommendList:[
                {
                   id:"001",
                   imgUrl:"http://img1.qunarzz.com/sight/p0/1511/ea/eaf1bdc38aed9e6690.img.jpg_200x200_3032bf56.jpg",
                   title:"银杏湖乐园" ,
                   desc:"让小朋友能够体验互动的快乐"
                },{
                   id:"002",
                   imgUrl:"http://img1.qunarzz.com/sight/p0/1411/bb/538133c76765880a3d3c802e45015c57.water.jpg_200x200_169b048c.jpg",
                   title:"银杏湖乐园" ,
                   desc:"让小朋友能够体验互动的快乐"
                },{
                   id:"003",
                   imgUrl:"http://img1.qunarzz.com/sight/p0/1511/ea/eaf1bdc38aed9e6690.img.jpg_200x200_3032bf56.jpg",
                   title:"银杏湖乐园" ,
                   desc:"让小朋友能够体验互动的快乐"
                },{
                   id:"004",
                   imgUrl:"http://img1.qunarzz.com/sight/p0/1511/ea/eaf1bdc38aed9e6690.img.jpg_200x200_3032bf56.jpg",
                   title:"银杏湖乐园" ,
                   desc:"让小朋友能够体验互动的快乐"
                },{
                   id:"005",
                   imgUrl:"http://img1.qunarzz.com/sight/p0/1511/ea/eaf1bdc38aed9e6690.img.jpg_200x200_3032bf56.jpg",
                   title:"银杏湖乐园" ,
                   desc:"让小朋友能够体验互动的快乐"
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
.title
    margin-top:.2rem
    line-height :.8rem
    background :#eee
    text-indent :.2rem
.item
    overflow :hidden
    display:flex
    height :1.9rem
    .item-img
        width:1.7rem
        height :1.7rem
        padding :.1rem
    .item-info
        flex:1
        padding:.1rem
        min-width :0
        .item-title
            line-height :.54rem
            font-size :.32rem
            overflow :hidden
            white-space :nowrap
            text-overflow :ellipsis
        .item-desc
            height :.4rem
            color:#ccc
            overflow :hidden
            white-space :nowrap
            text-overflow :ellipsis
        .item-button
            background :#ff9300
            padding:0 .2rem
            border-radius :.06rem
            margin-top :.2rem
            color: #fff
</style>    


