<template>
<div class="comsoon-body" ref="comsoon">
  <Scroll>
    <div class="comsoon">
          <ul class="movie">
            <Loading v-if="comingList.length===0"/>
            <li v-for="item in comingList" :key="item.id">
              <figure>
                <img :src="item.img| makeImage" alt=""/>
                <figcaption>
                    <h1>{{item.nm}}</h1>
                    <span class="guanzhong"><i>{{item.wish}}</i>人想看</span>
                    <p>主演:{{item.star}}</p>
                    <p><time>{{item.rt}}日上映</time></p>
                </figcaption>
              </figure>
              <button>预售</button>  
            </li>
        </ul> 
    </div>
  </Scroll>
</div>
</template>
<script>
import Bscroll from "better-scroll"
export default {
    name:"comsoon",
    data(){
      return {
        comingList:[],
        prevId:-1
      }
    },
   activated(){
    let id=this.$store.state.id 
    if(this.prevId===id){return ;}
      this.axios.get("/api/movieComingList?cityId="+id).then(res=>{
        this.comingList=res.data.data.comingList;
        this.prevId=id;
      })
    },
     filters:{
    makeImage:function(url){
     return url.replace(/(w\.h)/,'100.80')
    },
    mounts:function(value){
      return Math.floor(value/100)/10+"k人"
    }
  }
}
</script>
<style scoped>
    div.comsoon-body {height:600px;overflow:hidden;}
    li {display:flex;align-items: center;justify-content: space-around;padding: 20px 0 0;}
    li figure{display:flex;justify-content: space-between;align-items: flex-start;} 
    li figure img {height:100px;}
    li figcaption  {text-align:left;margin-left:10px;display: flex;flex-direction: column;justify-content: space-around;align-items: flex-start;}
    li figcaption h1 {font-size: 16px;line-height:30px;}
    li figcaption .guanzhong {font-size: 14px;line-height: 18px}
    li figcaption .guanzhong i {font-style: normal;color:yellow;}
    li figcaption p {font-size:14px;line-height:24px;color:#999;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;width: 150px;}
    li button {width: 80px;height: 28px;border:0;background-color:#00EEFF;color:#fff;font-size:14px}  
</style>

