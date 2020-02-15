<template>
    <div class="faviorite">
        <h3>
            <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
            <span>猜你喜欢</span>
        </h3>
        <ul>
            <router-link class="item border-bottom" v-for="(item,index) in favList" :key="index" tag="li" :to="{name:'scenicLink',params:{id:item.id}}">
                <img class='item-img' :src="item.imgUrl">
                <div class="item-info">
                    <h4>{{item.title}}</h4>
                    <div class='item-fav-info clearfix'>
                        <p class='item-fav-text'>
                            <i v-for='i in 5' class='iconfont icon-star' :key='i'></i>
                            <span class='item-fav-star' :style="item.score|star">
                                <i v-for='i in 5' class='iconfont icon-star' :key='i'></i>
                            </span>
                        </p>
                        <p class='item-text-right'>
                            <span>{{item.comment}}条评论</span>
                        </p>
                    </div>
                    <p class='item-price'>{{item.price|price}}</p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"HomeFaviorite",
    props:['favList'],
    filters:{
        star(score){
            return{
                width:score*100/5+'%'
            }
        },
        price(pri){
            return '¥'+pri+'起'
        }
    },
}
</script>

<style scoped>
.faviorite{
    padding:0 .26rem;
}
.faviorite>h3{
    padding:.24rem 0;
}
.faviorite>h3>img{
    width:.3rem;
    height:.3rem;
    margin-left:.2rem;
    vertical-align:top;
}
.faviorite>h3>span{
    font-size:.32rem;
    line-height:.44rem;
}
.border-bottom::before{
    border-color:#777;
}
.item{
     display:flex;
    height: 2.2rem;
    padding:.2rem;
}
.item .item-img{
    width:2rem;
    height:2rem;
}
.item .item-info{
    flex:1;
    padding: .1rem;
    margin-left:.1rem;
    min-width: 0rem;;
}
.item .item-info h4{
    line-height:.6rem;
    font-size:.3rem;
}
.item .item-info .item-price{
    color:#ff8300;
    font-size:.3rem;
    line-height:.4rem;
}
.item .item-info .item-fav-info{
    line-height:.6rem;
}
.item .item-info .item-fav-info .item-fav-text{
    position:relative;
    display:inline-block;
    float:left;
    color:#ccc;
    margin-right:.5rem;
}
.item .item-info .item-fav-info .item-fav-text .item-fav-star{
    overflow:hidden;
    position:absolute;
    left:0;
    top:0;
    color:#ffb436;
}
.item .item-info .item-fav-info .item-text-right{
    float:left;
}
</style>