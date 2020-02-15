<template>
<div class="list" ref="wrapper">
    <div>
        <div class="list-current">
            <h3 class='list-title border-topbottom'>当前城市</h3>
            <div class="city">
                <span>重庆</span>
            </div>
        </div>

        <div class="list-hot">
            <h3 class='list-title border-topbottom'>热门城市</h3>
            <div class="city">
                <span 
                    v-for='(item,index) in hotCities'
                    :key='index' @click='handleClick(item.name)'>
                    {{item.name}}
                </span>
            </div>
      </div>

      <div class="list-item" v-for='(city,key) in cities' :key='key'>
        <h3 class='list-title border-topbottom' :ref="key">{{key}}</h3>
        <ul>
          <li class='city-item border-bottom'
              v-for='(item,index) in city'
              @click='handleClick(item.name)' :key='index'>{{item.name}}</li>
        </ul>
      </div>
    </div>  
</div>
</template>

<script>
//使用像刷新一样的那种拉的效果插件
import BScroll from "better-scroll"
export default {
    name:'CityList',
    props:['hotCities','cities'],
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true
        })//必须是里面的一个盒子比父级该盒子高
    },
    computed:{
        letter(){
            return this.$store.state.letter
        }
    },
    watch:{
        letter(value){
            // console.log(this.$refs[value][0])
            //跳到指定的dom元素节点
            this.scroll.scrollToElement(this.$refs[value][0])
        }
    },
    methods:{
        handleClick(city){
            //向仓库存我点击的哪个li的城市的名字,并且跳转到根路由
            this.$store.commit('changeCity',city)
            this.$router.push("/")
        }
    }
}
</script>

<style scoped>
.border-bottom:before{
    border-color:#aaa;
}
.list{
    position:fixed;
    overflow: hidden;
    top: 1.78rem;
    left: 0;
    right: 0;
    bottom: 0;
}
.list .list-title{
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
}
.list .city{
    padding-left:.15rem;
}
.list .city span{
      display:inline-block;
      width:28%;
      padding:.15rem .2rem;
      margin:.1rem;
      border:.01rem solid #ccc;
      text-align:center;
      box-sizing:border-box;
      border-radius:.05rem;
}
.list .city-item{
    line-height:.8rem;
    padding-left:.2rem;
}
</style>