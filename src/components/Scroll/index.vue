<template>
     <div id="warpper" ref="warppers"> 
        <slot></slot>
    </div>   
</template>
<script>
import Bscroll from "better-scroll"
export default {
    name:"scroll",
    data(){
        return {
            scroll:null
        }
    },
    props:{
        scrollHandle:{
            type:Function,
            default:function(){}
        },
        touchHandle:{
            type:Function,
            default:function(){}
        }     
    },
    mounted(){
        this.$nextTick(()=>{
            this.scroll=new Bscroll(this.$refs.warppers,{
                tap:true,
                probeType:1
            })
            this.scroll.on("scroll",(pos)=>{
                this.scrollHandle(pos);
            })
            this.scroll.on("touchEnd",(pos)=>{
                this.touchHandle(pos);
            })
        })
    },
    methods:{
       toscrollTop(h){
            this.scroll.scrollTo(0,h)
        }
    }
}
</script>
<style scoped>
    #warpper {height:100%}
</style>

