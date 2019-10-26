<template>
    <div class="search">
        <p class="search-input"><input type="text" placeholder="搜索电影" name="" id=""/><span class="iconfont icon-chaxun"></span></p>
        <p class="search-films">电影/电视剧/综艺</p>
        <ul class="search-list">
            <li>
              <figure>
                <img src="./1.jpg" alt=""/>
                <figcaption>
                    <h1>无名之辈</h1>
                    <span class="guanzhong">观众</span>
                    <p>主演:找寻银</p>
                    <p>今天55家影院播放57场</p>
                </figcaption>
              </figure>
              <span class="score">97</span>
            </li>
            <li>
              <figure>
                <img src="./1.jpg" alt=""/>
                <figcaption>
                    <h1>无名之辈</h1>
                    <span class="guanzhong">观众</span>
                    <p>主演:找寻银</p>
                    <p>今天55家影院播放57场</p>
                </figcaption>
              </figure>
                <span class="score">97</span> 
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"search"
}
</script>
<style scoped>
        p.search-input {position: relative;width: 100%}
        p.search-input input {box-sizing:border-box;padding-left:50px;width:100%;height:32px;border:0;border:1px solid #eee;font-size: 12px}
        p.search-input span {position: absolute;left:10px;top:6px;}
        p.search-films {text-align: left;line-height:30px;height:30px;color:#999;font-size: 14px;padding-left: 20px;margin:5px 0;}

        li {display:flex;align-items: flex-start;justify-content: space-around;padding: 20px 0 0;}
        li figure{display:flex;justify-content: space-between;align-items: flex-start;} 
        li figure img {height:100px;}
        li figcaption  {margin-left:10px;display: flex;flex-direction: column;justify-content: space-around;align-items: flex-start;}
        li figcaption h1 {font-size: 16px;line-height:30px;}
        li figcaption .guanzhong {font-size: 14px;line-height: 18px}
        li figcaption .guanzhong i {font-style: normal;color:yellow;}
        li figcaption p {font-size:14px;line-height:24px;color:#999}
        li span.score {color:yellow;font-size:14px}
</style>


