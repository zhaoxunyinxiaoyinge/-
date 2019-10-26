<template>
    <div class="footer">
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
  name: "footer"
};
</script>
<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  border-top:1px solid #eee;
  background: #fff;
}
.footer ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.footer li {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
}
.footer li.router-link-active {
  color :red
}
.footer li i {
  font-style: normal;
}
.footer li span {
  font-size: 12px;
}
</style>


