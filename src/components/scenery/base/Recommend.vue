<template>
    <div class="recommend">
        <slot></slot>
    <div class="recommend-info border-bottom" v-for='(item,index) of recommendInfo' :key='index'>
      <div class="recommend-left">
        <h4 class="recommend-title">{{item.title}}</h4>
        <p>{{item.time}}</p>
        <span class='border'>随时退</span>
      </div>
      <div class="recommend-right">
        <span >¥{{item.price}}</span>
        <div class='recommend-button'>{{item.type}}</div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
    name:'Recommend',
    props:['recommendInfo']
}
</script>

<style lang='stylus' scoped>
  .border
    &::before
      border-color:#a5e4ec
  .border-bottom
    &::before
      border-color:#ddd
  .recommend
    padding:0 .2rem
    border-bottom:.2rem solid #f5f5f5
  h3
    line-height:1rem
    font-size:.32rem
  .recommend-info
    display:flex
    justify-content:space-between
    padding:.2rem 0
    .recommend-left
      width:5.72rem
      color:#616161
      h4
        display: -webkit-box
        overflow:hidden
        line-height:.6rem
        font-size:.3rem
        -webkit-line-clamp: 2
        -webkit-box-orient: vertical
      p
        line-height:.5rem
        font-size:.28rem
      span
        color:#00afc7
        font-size:.24rem
    .recommend-right
      display:flex
      flex-direction:column
      justify-content:center
      width:1.8rem
      text-align:center
      span
        color:#ff9852
        font-size:.35rem
        font-weight:400
      .recommend-button
        height:.6rem
        color:#fff
        background-image: linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%)
        line-height:.6rem
        border-radius:.1rem

</style>