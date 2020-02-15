<template>
    <div class="gallary" @click="fn">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for='(item,index) in gallaryImgs' :key='index'>
                <img class='swiper-img' :src="item">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name:'CommonGallary',
    props:['gallaryImgs'],
    data(){
        return{
            swiperOption:{
                pagination: {
                    el: '.swiper-pagination',
                    type:'fraction'
                },
                observeParents:true,
                observer:true
            }
        }
    },
    methods:{
        fn(){
            this.$emit('close')
        }
    }

}
</script>

<style lang='stylus' scoped>
  .wrapper >>> .swiper-container
    overflow:inherit
  .gallary
    position:fixed
    z-index:10
    left:0
    right:0
    top:0
    bottom:0
    background:#000
    .wrapper
      position:absolute
      top:0
      bottom:0
      margin:auto
      height:0
      width:100%
      padding-bottom:62.5%
      background:#fff
    .swiper-img
      width:100%
    .swiper-pagination
      bottom:-1rem
      color:#fff
</style>