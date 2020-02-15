<template>
  <div class="home">
      <home-header></home-header>
        <div ref="wrapper" class="content">
            <div>
                <home-swiper :swiperList="swiperList"></home-swiper>
                <home-nav :imgsList="iconList"></home-nav>
                <home-faviorite :favList="recommendList"></home-faviorite>
                <home-weekend :weekendList="weekendList"></home-weekend>
            </div>
        </div>    
  </div>
</template>

<script>
import {getHome} from "@/api"
import HomeHeader from "./base/HomeHeader"
import HomeSwiper from "./base/HomeSwiper"
import HomeNav from "./base/HomeNav"
import Bscroll from 'better-scroll'
import HomeFaviorite from "./base/HomeFaviorite"
import HomeWeekend from "./base/HomeWeekend"
export default {
    name:"Home",
    data(){
        return{
            iconList:[],
            recommendList:[],
            swiperList:[],
            weekendList:[]
        }
    },
    components:{
        HomeHeader,
        HomeSwiper,
        HomeNav,
        HomeFaviorite,
        HomeWeekend
    },
    created(){
        this.getData()
    },
    methods:{
       async getData(){
           let{iconList,recommendList,swiperList,weekendList} = await getHome()
           this.iconList=iconList
           this.recommendList=recommendList
           this.swiperList=swiperList
           this.weekendList=weekendList
        }
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.wrapper,{
            click:true
        })
    },
    activated(){//当组件被展示时触发,前提是要在keep-alive组件中
        this.getData()
    },
    deactivated(){//当组件没有被展示时触发,前提是要在keep-alive组件中

    }
}
</script>

<style scoped>
.content{
    position:fixed;
    top:.88rem;
    left:0;
    bottom:0;
    right:0;
    overflow:hidden;
}
</style>