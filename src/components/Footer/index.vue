<template>
    <div class="footers">
        <ul>
            <router-link tag="li" to="/cinema">
                <i class="iconfont icon-yingyuan"></i>
                <span>电影</span>
            </router-link>
            <router-link tag="li" to="/movie">
                <i class="iconfont icon-huaban"></i>
                <span>影院</span>    
            </router-link>
            <router-link tag="li" to="/mine">
                <i class="iconfont icon-iconfont-user"></i>
                <span>我的</span>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
  name: "footers"
};
</script>
<style scoped>
.footers {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  border-top:1px solid #eee;
  background: #fff;
}
.footers ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.footers li {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
}
.footers li.router-link-active {
  color :red
}
.footers li i {
  font-style: normal;
}
.footers li span {
  font-size: 12px;
}
</style>


