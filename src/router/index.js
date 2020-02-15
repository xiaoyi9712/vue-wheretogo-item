import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/home/Home"
import City from '@/components/city/City'
import scenicSpot from '@/components/scenery/scenicSpot'
import Week from '@/components/week/Week'
Vue.use(Router)

export default new Router({
  routes: [{
    path:"/",
    component:Home
  },
  {
    path:'/city',
    component:City
  },
  {
    path:'/scenicSpot/:id',
    name:"scenicLink",
    component:scenicSpot
  },
  {
    path:'/week/:id',
    name:"weekLink",
    component:Week
  }
]
})
