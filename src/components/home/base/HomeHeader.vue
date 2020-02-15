<template>
  <div class="header">
      <i class="iconfont icon-fanhui header-back"></i>
      <div class="header-input">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" placeholder="输入城市/景点/游玩主题">
      </div>
      <router-link tag="div" to='/city' class="header-right">
          <span>{{this.$store.state.city}}</span><i class="iconfont icon-jiantou"></i>
      </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="" scoped>
.header{
    display:flex;
    height:.88rem;
    line-height:.88rem;
    background-color:#00bcd4;
    color:#fff;
}
.header .header-back{
    width:.88rem;
    text-align:center;
}
.header-input{
    flex:1;
    padding-left:.1rem;
    border-radius:.1rem;
    background-color:#fff;
    line-height:.64rem;
    margin-top:.12rem;
    height:.64rem;
}
.header-input .icon-sousuo{
    color:#ccc;
    vertical-align:middle;
}
.header-input>input{
    width:80%;
    vertical-align:middle;
    font-size:.26rem;
}
.header-right{
    padding: 0 .2rem;
}
</style>