<template>
    <div class="city">
        <h2 class="hot-city">热门城市</h2>
        <ul class="city-list">
            <li><a href="">上海</a></li>
            <li><a href="">北京</a></li>
            <li><a href="">上海</a></li>
            <li><a href="">北京</a></li>
            <li><a href="">上海</a></li>
            <li><a href="">北京</a></li>
            <li><a href="">上海</a></li>
            <li><a href="">北京</a></li>
        </ul>
        <dl>
            <dt>A</dt>
            <dd>北京</dd>
            <dd>北京</dd>
            <dd>北京</dd>
            <dd>北京</dd>
        </dl>
        <dl>
            <dt>B</dt>
            <dd>北京</dd>
            <dd>北京</dd>
            <dd>北京</dd>
            <dd>北京</dd>
        </dl>
        <dl>
            <dt>C</dt>
            <dd>北京</dd>
            <dd>北京</dd>
            <dd>北京</dd>
            <dd>北京</dd>
        </dl>
        <dl>
            <dt>D</dt>
            <dd>北京</dd>
            <dd>北京</dd>
            <dd>北京</dd>
            <dd>北京</dd>
        </dl>
        <dl>
            <dt>E</dt>
            <dd>北京</dd>
            <dd>北京</dd>
            <dd>北京</dd>
            <dd>北京</dd>
        </dl>
        <div class="order">
           <span>A</span>
           <span>B</span> 
           <span>C</span> 
           <span>D</span>
           <span>E</span>    
        </div>
    </div>
</template>
<script>
export default {

};
</script>
<style scoped>
    h2.hot-city {line-height: 28px;font-size:16px;text-align: left;margin-left: 30px;}
    ul.city-list {display: flex;justify-content:flex-start;align-items:center;flex-wrap: wrap;}
    ul.city-list li {width: 33%;height: 40px;}
    ul.city-list li a {display: block;line-height: 40px;text-decoration: none;color: #000}
    dl {margin: 10px 0;display: flex;flex-direction: column;align-items: flex-start;margin-left: 30px;}
    dt,dd {line-height: 28px;margin-bottom: 5px}
    div.order {position: fixed;right: 0;top:50%;margin-top:-50px;display: flex;flex-direction: column;justify-content:space-around;height: 100px;width:50px;align-items: center}
</style>


