<template>
    <div id="cinema">
      <Header name="非凡电影"/>
      <div class="router-link">
        <router-link  to="/cinema/city">城市<span class="select"></span></router-link>
        <router-link to="/cinema/nowplay">正在热映</router-link>
        <router-link to="/cinema/comsoon">不久上映</router-link>
        <router-link to="/cinema/search"><span class="iconfont icon-chaxun"></span></router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>   
      <Footer/>   
    </div>
</template>
<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default {
    name:"cinema",
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