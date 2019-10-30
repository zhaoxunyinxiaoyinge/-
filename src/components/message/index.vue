<template>
    <div id="message">
        <h2>{{title}}</h2>
        <h3>{{content}}</h3>
        <p><span @touchstart="handcancle()">{{cancel}}</span><span @touchstart="handok()">{{ok}}</span></p>
    </div>
</template>
<script>
export default {
    name:"message",   
}
</script>
<style scoped>
        #message {align-items: center;background-color:#fff;position: absolute;left:50%;top:50%;width: 150px;height:120px;margin:-60px 0 0 -75px;display: flex;flex-direction: column;justify-content: space-around;font-size: 14px;}
        p {display: flex;width:100%;justify-content:space-around;font-size: 13px;}
</style>

