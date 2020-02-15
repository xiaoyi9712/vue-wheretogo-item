<template>
  <div class='calendar'>
    <ul class='calendar-title border-bottom'>
      <li @click="handleTicket">门票</li>
      <li  @click="handleTourist">一日游</li>
    </ul>
    <div  class='calendar-item' v-for='(item,index) in calendarInfo' :key='index'>
      <h3 class='border-bottom' ref="heaven">{{item.calendarInfo.title}}</h3>
      <div class="calendar-info border-bottom"  @click='handleClick(result)' v-for='(result,index) in item.calendarInfo.result' :key='index' >
        <div class="calendar-left">
          <h4 class="calendar-title">{{result.subtitle}}</h4>
        </div>
        <div class="calendar-right">
          <span>¥{{result.price}}<i class='iconfont icon-jiantouxiangxia' :style="result.styleObj"></i></span>
        </div>
        <scenery-recommend v-show='result.isShow' :recommendInfo="result.recommendInfo"></scenery-recommend>
      </div>
    </div>
  </div>
</template>
<script>

  import SceneryRecommend from './Recommend'
  export default {
    name:'SceneryCalendar',
    props:['calendarInfo'],
    components:{
      SceneryRecommend
    },
    methods:{
      handleClick(result){
        result.isShow = !result.isShow

        result.styleObj.transform = 'rotate('+result.isShow*180+'deg)'
      },
      handleTicket(){
        document.documentElement.scrollTop = this.$refs.heaven[0].offsetTop-85
      },
      handleTourist(){
        document.documentElement.scrollTop = this.$refs.heaven[2].offsetTop-43
      }
    }

  }
</script>

<style lang='stylus' scoped>
  .calendar .recommend>>> .recommend
    width:100%
  .calendar .recommend>>> .recommend-title
    line-height:.4rem
  .border-bottom
    &::before
      border-color:#ccc
  .calendar
    .recommend
      background-color:#f5f5f5
    .calendar-item
      padding:0 .2rem
      border-bottom:.2rem solid #f5f5f5
    .calendar-title
      display:flex
      li
        width:50%
        height:1rem
        line-height:1rem
        text-align:center
        font-size:.3rem
    h3
      line-height:1rem
      font-size:.32rem
    .calendar-info
      display:flex
      flex-wrap: wrap
      justify-content:space-between
      padding: .1rem 0
      .calendar-left
        width:6rem
        color:#616161
        h4
          display: -webkit-box
          overflow:hidden
          line-height:.6rem
          font-size:.28rem
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
        p
          line-height:.5rem
          font-size:.28rem
        span
          color:#00afc7
          font-size:.24rem
      .calendar-right
        display:flex
        flex-direction:column
        justify-content:center
        width:1.8rem
        text-align:center
        span
          color:#ff9852
          font-size:.35rem
          font-weight:400
          &::first-letter
            font-size:.24rem
          i
            position:absolute
            font-size:.24rem
            color:#bbb
</style>
