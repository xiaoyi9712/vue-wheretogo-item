<template>
    <div class="header">
        <router-link tag='i' to='/' class="iconfont icon-fanhui header-back"></router-link>
        <h3>城市选择</h3>
    </div>
</template>

<script>
export default {
    name:'CityHeader'
}
</script>

<style  scoped>
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
.header>h3{
    margin-left:35%;
}
</style>