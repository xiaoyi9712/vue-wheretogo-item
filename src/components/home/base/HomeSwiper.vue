<template>
    <div class="swiper">
        <swiper :options="swiperOption" v-if="isShow">
    <!-- slides -->
            <swiper-slide v-for="(imgs,value) in swiperList" :key="value">
                <img class="swiper-img" :src="imgs.imgUrl">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:"HomeSwiper",
    props:["swiperList"],
    data(){
        return{
            swiperOption:{
                pagination: {
                    el: '.swiper-pagination',
                },
                loop:true,
                autoplay:true
            },
        }
    },
    computed:{
        isShow(){
            return this.swiperList.length>0
        }
    }
}
</script>

<style scoped>
.swiper >>> .swiper-pagination-bullet-active{
    background-color:#fff;
}
.swiper{
    height:3rem;
}
.swiper .swiper-container{
    height:100%;
}
.swiper .swiper-img{
    width:100%;
}
</style>