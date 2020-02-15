<template>
    <div class="week">
        <week-header></week-header>
        <week-list :weekInfo='weekInfo'></week-list>
    </div>
</template>
<script>
import {getWeek} from '@/api'
import WeekHeader from './base/WeekHeader'
import WeekList from './base/WeekList'
export default {
    name:'Week',
    components:{
        WeekHeader,
        WeekList
    },
    data(){
        return{
            weekInfo:[]
        }
    },
    activated(){
       this.getData()
    },
    methods:{
       async getData(){
           let {weekInfo} = await getWeek(this.$route.params.id)
           this.weekInfo = weekInfo
        }
    }
}
</script>

<style>

</style>