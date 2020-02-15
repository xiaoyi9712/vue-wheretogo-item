<template>
    <div class="search">
        <input 
        type="text" 
        placeholder="请输入城市名或拼音" 
        class='header-input'
        v-model="keyword">
        <div class="search-content" v-show="keyword" ref="box" v-if ="keyword">
            <ul>
                <li class='search-item border-bottom'
                     v-for="(city,index) in filterCities"
                      @click="handleClick(city.name)"
                      :key='index'>
                      {{city.name}}
                </li>
                <li v-if="isShow" class='search-item border-bottom'>未匹配到数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:"CitySearch",
    props:['cities'],
    data(){
        return{
            keyword:""
        }
    },
    updated(){
        this.scroll = new BScroll(this.$refs.box,{
            click:true
        })
    },
    computed:{
        filterCities(){
            const result = []
            for(let key in this.cities){//key 就是cities对象里面的每一个A或者B
                this.cities[key].forEach((city,index)=>{//遍历每一个A数组或者B数组
                    if(city.name.includes(this.keyword)||city.spell.includes(this.keyword)){
                        //如果城市的名字包含了 输入的关键词或者输入的拼音

                        //那么 result数组就加上city
                        result.push(city)
                    }
                })
            }
            return result
        },
        isShow(){
            return !this.filterCities.length
        }
    },
    methods:{
        handleClick(city){
            this.$store.commit('changeCity',city)
            this.$router.push("/")
        }
    }
}
</script>

<style scoped>
.search{
    position:relative;
    height:.72rem;
    padding:.1rem;
    background-color:#00bcd4;
}
.border-bottom::before{
  border-color:#aaa;
}
.search>.header-input{
    width:100%;
    height:100%;
    border-radius:.1rem;
    text-align:center;
}
.search>.search-content{
    position:fixed;
    z-index:20;
    overflow:hidden;
    top:1.78rem;
    left:0;
    right:0;
    bottom:0;
    background-color:#ccc;
}
.search>.search-content .search-item{
    line-height:.8rem;
    padding-left:.2rem;
    background-color:#fff;
}
</style>