<template>
    <swiper :options="swiperOption">
    <!-- slides -->
        <swiper-slide v-for="(imgs,i) in filterImgs" :key="i">
            <div class="nav" :key="i">
                <div class="item" v-for="(item,i) in imgs" :key="i">
                    <img class="item-img" :src="item.imgUrl">
                    <span>{{item.desc}}</span>
                </div>
            </div>
        </swiper-slide>
    <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

    
</template>

<script>
export default {
    name:"HomeNav",
    props:["imgsList"],
    data(){
        return{
           swiperOption:{
                pagination: {
                    el: '.swiper-pagination',
                }
            },
        }
    },
    computed:{
        filterImgs(){//搞二维数组
            let imgs = []
            this.imgsList.forEach((item,i)=>{
                let page=~~(i/8)//取整
                if(!imgs[page]){//imgs的前8项都是假的 条件为真
                    imgs[page]=[]//imgs为空数组
                }
                imgs[page].push(item)//imgs的数组加上前八项作为一个数组
            })
            return imgs
        }
    }
}
</script>

<style>
.nav{
    flex-wrap:wrap;
    display:flex;
    height:3.7rem;
}
.nav>.item{
    display:flex;
    flex-direction:column;
    align-items:center;
    width:25%;
    height:50%;
}
.nav>.item>.item-img{
    margin-top:.2rem;
    width:1.1rem;
}
</style>