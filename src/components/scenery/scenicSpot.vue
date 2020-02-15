<template>
    <div class="spot">
        <scenery-banner
         :bannerImg='bannerImg'
         :sightName='sightName'
         :gallaryImgs='gallaryImgs'
         ></scenery-banner>
         <nav-header></nav-header>
         <scenery-card :cardInfo='cardInfo'></scenery-card>
         <scenery-recommend :recommendInfo='recommendInfo'>
             <h3 class='border-bottom'>去哪儿推荐</h3>
         </scenery-recommend>
         <scenery-calendar :calendarInfo='calendarInfo'></scenery-calendar>
         <scenery-comments :commentInfo='commentInfo'></scenery-comments>
    </div>
</template>

<script>
import SceneryBanner from "./base/Banner"
import {getScenery} from '@/api'
import NavHeader from './base/Header'
import SceneryCard from './base/Card'
import SceneryRecommend from './base/Recommend'
import SceneryCalendar from './base/Calendar'
import SceneryComments from './base/Comments'
export default {
    name:'scenicSpot',
    data(){
        return{
            sightName:'',
            bannerImg:'',
            gallaryImgs:[],
            cardInfo:{},
            recommendInfo:[],
            calendarInfo:[],
            commentInfo:[]
        }
    },
    components:{
        SceneryBanner,
        NavHeader,
        SceneryCard,
        SceneryRecommend,
        SceneryCalendar,
        SceneryComments
    },
     activated(){
        this.getData()
    },
    methods:{
        async getData(){
            let {sightName,bannerImg,gallaryImgs,cardInfo,recommendInfo,calendarInfo,commentInfo} = await getScenery(this.$route.params.id)
            this.sightName=sightName
            this.bannerImg=bannerImg
            this.gallaryImgs=gallaryImgs
            this.cardInfo=cardInfo
            this.recommendInfo=recommendInfo
            this.calendarInfo=calendarInfo
            this.commentInfo=commentInfo
        }
    }
}
</script>

<style lang='stylus' scoped>
.spot
    height:40rem
</style>