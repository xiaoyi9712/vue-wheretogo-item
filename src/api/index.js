import axios from "axios"

axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data.data;
  });
//请求home组件的数据接口
export let getHome = ()=>{
    return axios.get("/static/mock/index.json")
}
//获取city组件的数据
export let getCity = ()=>{
  return axios.get("/static/mock/city.json")
}
//获取scenery组建的数据
export let getScenery=(id)=>{
  return axios.get('/static/mock/scenery/'+id+'.json')
}
//获取week组建的数据
export let getWeek=(id)=>{
  return axios.get('/static/mock/week/'+id+'.json')
}