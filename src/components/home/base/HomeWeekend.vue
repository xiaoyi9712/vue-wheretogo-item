<template>
    <div class="weekend">
        <h3>
            <span>周末去哪儿</span>
        </h3>
        <ul>
            <router-link tag='li' :to='{name:"weekLink",params:{id:item.id}}' class="item border-bottom" v-for="(item,index) in weekendList" :key="index">
                <img class='item-img' :src="item.imgUrl">
                <div class="item-info">
                    <h4>{{item.title}}</h4>
                    <p class='item-price'>{{item.desc}}</p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"HomeWeekend",
    props:["weekendList"],
}
</script>

<style scoped>
.weekend{
    padding:0 .26rem;
}
.weekend>h3{
    padding:.24rem 0;
}
.weekend>h3>span{
    font-size:.32rem;
    line-height:.44rem;
}
.title{
    margin-top: .2rem;
    line-height: .8rem;
    background: #ddd;
    text-indent: .2rem;
    font-size: .32rem;
}
.item .item-img{
    width:100%;
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
    font-size:.24rem;
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
</style>