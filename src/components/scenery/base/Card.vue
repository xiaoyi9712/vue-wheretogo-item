<template>
    <div class="card">
        <div class="card-desc border-bottom">
            <div class="card-left card-item">
                <h3>
                {{cardInfo.score}}分 <span>{{cardInfo.desc}}</span>
                </h3>
                <p>
                <span>{{cardInfo.comment}}条评论</span>
                <span>{{cardInfo.walkthrough}}条攻略</span>
                </p>
                <i class='iconfont icon-jiantouyou'></i>
            </div>
            <div class="card-right card-item">
                <h4>景点简介</h4>
                <p>开放时间、贴士</p>
                <i class='iconfont icon-jiantouyou'></i>
            </div>
        </div>
        <p class="card-address ">
      {{cardInfo.address}} <i class='iconfont icon-jiantouyou'></i>
        </p>
    </div>
</template>

<script>
export default {
    name:'Card',
    props:['cardInfo']
}
</script>

<style lang='stylus' scoped>
  @import '~style/mixins.styl';
  .border-bottom
    &::before
      border-color:#ccc
  .card
    padding:.2rem .2rem 0
    border-bottom:.2rem solid #f5f5f5
    .card-desc
      display:flex
      .card-item
        position:relative
        width:50%
        h3
          color:#ff8300
          line-height:.4rem
          font-size:.32rem
          span
            font-size:.28rem
            margin-left:.1rem
        p
          color:#9e9e9e
          font-size:.24rem
          line-height:.5rem
          span
            margin-right:.1rem
        .icon-jiantouyou
          loaction()
    .card-address
      position:relative
      line-height:.8rem
      .icon-jiantouyou
        line-height:1
        loaction()

</style>