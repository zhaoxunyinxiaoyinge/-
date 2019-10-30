<template>
  <div class="playing-body" ref="playing">
    <Scroll :touchHandle="touchHandle" :scrollHandle="scrollHandle">
    <div id="nowplay">
        <ul class="movie">
          <Loading v-if="movieList.length==0"/>
            <li class="message">{{message}}</li>
            <li v-for="item in movieList" :key="item.id">
              <figure>
                <img :src="item.img | makeImage" alt=""/>
                <figcaption>
                    <h1>{{item.nm}}<b v-show="item.version">{{item.version}}</b></h1>
                    <span class="guanzhong">观众:<i>{{item.wish |mounts}}</i></span>
                    <p>主演:{{item.star}}</p>
                    <p>{{item.showInfo}}}</p>
                </figcaption>
              </figure>
              <button>购票</button>  
            </li>
        </ul>
    </div>
    </Scroll>
  </div>
</template>
<script>
import Bscroll  from "better-scroll"
import message from "./../message/index.js"
export default {
  name:"nowplaying",
  data(){
    return {
      movieList:[],
      message:"",
      prevId:-1
    }
  },
   mounted(){
        this.axios.get("/api/getLocation").then(res=>{
            if(res.data.msg==="ok"){
            let ids=res.data.data.id;
            let nms=res.data.data.nm;
            if(window.localStorage.getItem("id")==ids){return;}
                setTimeout(()=>{
                message({
                title:"定位",
                content:res.data.data.nm,
                cancel:"取消",
                ok:"切换定位",
                handok:function(){
                  window.localStorage.setItem("id",ids);
                  window.localStorage.setItem("nm",nms);
                  window.location.reload()
                }
            })
                },2000)
            }else{
                throw console.error("错误了!");  
            }
        })


    },
  // 这里的生命周期函数会在组件在激活时触发，而mounted不会渲染；
  activated(){
    let id=this.$store.state.id 
    if(this.prevId===id){return ;}
    this.axios.get("/api/movieOnInfoList?cityId="+id).then((res)=>{
      this.movieList=res.data.data.movieList;
      this.prevId=id;
    })
  },
 filters:{
    makeImage:function(url,arg){
     return url.replace(/(w\.h)/,'100.80')
    },
    mounts:function(value){
      return Math.floor(value/100)/10+"k人"
    }
  },
  methods:{
      scrollHandle(pos){
        if(pos.y>30){
          this.message="comming....!"
        }
      },
      touchHandle(pos){
        if(pos.y>30){
        this.message="complete update!"
        this.axios.get("/api/movieOnInfoList?cityId="+this.prevId).then((res)=>{
        this.movieList=res.data.data.movieList;
        this.message=""
    }) 
      }}
  }

}
</script>
<style scoped>
    div.playing-body {overflow:hidden;height: 600px;}

    li.message {height :auto;width:100%;text-align: center;padding:0}

    li {display:flex;align-items: center;justify-content: space-around;padding: 20px 0 0;}
    li figure{display:flex;justify-content: space-between;align-items: flex-start;} 
    li figure img {height:100px;}
    li figcaption  {margin-left:10px;display: flex;flex-direction: column;justify-content: space-around;align-items: flex-start;}
    li figcaption h1 {font-size: 16px;line-height:30px;display: flex;align-items: center;justify-content: space-between;width: 180px;}
    li figcaption h1 b {background:orange;font-size: 12px;color:#fff;padding:3px;height: 16px;line-height: 16px}
    li figcaption .guanzhong {font-size: 14px;line-height: 18px}
    li figcaption .guanzhong i {font-style: normal;color:rgba(188, 106, 11, 0.696);}
    li figcaption p {text-align: left;width:150px;font-size:14px;line-height:24px;color:#999;white-space: nowrap;overflow: hidden;text-overflow: ellipsis}

    li button {width: 80px;height: 28px;border:0;background-color:#FF5C2B;color:#fff;font-size:14px}
</style>
