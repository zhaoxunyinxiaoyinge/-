<template>
    <div id="movie">
        <Header name="电影详情"/>
        <div class="router-link">
        <router-link  to="/movie/place">全城<span class="select"></span></router-link>
        <router-link to="/movie/pinpai">品牌<span class="select"></span></router-link>
        <router-link to="/movie/teshe">特色<span class="select"></span></router-link>
      </div>
      <keep-alive>
        <router-view :datas="detailList"></router-view>
      </keep-alive>   
        <Footer/>
    </div>
</template>
<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default {
    name:"movie",
        data(){
        return {
            detailList:[],
            prevId:-1
        } 
    },
   mounted(){
        let id=this.$store.state.id;
        if(this.prevId==id){return ;}
        this.axios.get("/api/cinemaList?cityId="+id).then(res=>{
            let msg=res.data.msg;
                if(msg==="ok"){
                  this.detailList=res.data.data.cinemas;
                }
        })
    },
    components:{
        Header,
        Footer
    }
}
</script>
<style>
    div.router-link {display: flex;justify-content: space-around;height: 35px;text-align: center}
    div.router-link a {text-decoration: none;font-size:14px;color:#000;position: relative;flex:1;height:34px;line-height: 35px}
    div.router-link  span.select {position:absolute;height:0;width:0;border:5px solid transparent;border-top-color: #000;top:14px;}
    div.router-link .router-link-active {color: red;border-bottom:2px solid #FF5C2B;}
</style>



