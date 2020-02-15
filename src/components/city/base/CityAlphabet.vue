<template>
    <div class="alphabet">
        <ul>
            <li v-for="(city,key) in cities" 
            :key=key
            @click="handleClick(key)"
            >{{key}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"CityAlphabet",
    props:['cities'],
    methods:{
        handleClick(letter){
            this.$store.commit('changeLetter',letter)
        }
    }
}
</script>

<style scoped>
.alphabet{
    position:fixed;
    display:flex;
    flex-direction:column;
    justify-content:center;
    right:0;
    top:.9rem;
    bottom:0;
    width:.4rem;
}
.alphabet li{
      line-height: .5rem;
      text-align: center;
      color: red;
      font-weight:600;
}
</style>