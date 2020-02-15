<template>
    <div>
        <div>
            <div class='banner' @click="fn">
                <img class='banner-img' :src='bannerImg'>
                <div class="banner-info">
                    <span class='banner-title'>{{sightName}}</span>
                    <p class='banner-number'>
                    <i class="iconfont icon-tupian"></i>
                    <span>{{gallaryImgs.length}}</span>
                    </p>
                </div>
            </div>
            <fade-animation>
              <common-gallary @close='handleClick' v-show='isShow' :gallaryImgs='gallaryImgs'></common-gallary>
            </fade-animation>
        </div>
    </div>
</template>

<script>
import CommonGallary from '@/common/Gallary.vue'
import FadeAnimation from '@/common/FadeAnimation'
export default {
    name:"Banner",
    props:['bannerImg','sightName','gallaryImgs'],
    data(){
        return{
          isShow:false
        }
    },
    components:{
      CommonGallary,
      FadeAnimation
    },
    methods:{
      fn(){
        return this.isShow = true;
      },
      handleClick(){
        return this.isShow=false;
      }
    }
}
</script>

<style lang='stylus' scoped>
  .banner
    position:relative
    height:0;
    padding-bottom:55%
    .banner-img
      width:100%
    .banner-info
      position:absolute
      left:0
      right:0
      bottom:0
      color:#fff
      background-image:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1))
      line-height:.6rem
      .banner-title
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        position:absolute
        right:0
        top:0
        height: .36rem
        line-height: .36rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
</style>