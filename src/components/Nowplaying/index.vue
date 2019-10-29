<template>
  <div class="playing-body">
    <div id="nowplay">
        <ul class="movie">
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
  </div>
</template>
<script>
export default {
  name:"nowplaying",
  data(){
    return {
      movieList:[]
    }
  },
  mounted(){
    this.axios.get("/api/movieOnInfoList?cityId=10").then((res)=>{
      this.movieList=res.data.data.movieList;
    })
  },
 filters:{
    makeImage:function(url,arg){
     return url.replace(/(w\.h)/,'100.80')
    },
    mounts:function(value){
      return Math.floor(value/100)/10+"k人"
    }
  }

}
</script>
<style scoped>
    div.playing-body {overflow:auto;height: 600px;}
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
