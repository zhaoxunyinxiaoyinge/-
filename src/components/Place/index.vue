<template>
    <div class="place">
        <Scroll>
            <ul>
                <li v-for="item in datas" :key="item.id">
                <p class="price">{{item.nm}}<strong>&nbsp;{{item.sellPrice}}元起</strong></p> 
                <p class="address"><a href="#">{{item.addr}}</a><span>{{item.distance}}</span></p>
                <p class="list"><span :class="key|setClass" v-for="(num,key) in item.tag" :key="key" v-if="num===1">{{key | check}}</span></p>
                </li>
            </ul>
        </Scroll>
    </div>
</template>
<script>
export default {
    name:"place",
    props:{
        datas:{
            type:Array,
            default(){
                return []
            }
        }
    },
    filters:{
        check(key){
            let card=[
                {key:"allowRefund",value:"改签"},
                {key:"endorse",value:"退"},
                {key:"sell",value:"折扣卡"},
                {key:"snack",value:"小吃"}
            ]
            for(var i=0;i<card.length;i++){
                if(key===card[i].key){
                    return card[i].value
                }
            }
            return ""
        },
        setClass(key){
                let card=[
                {key:"allowRefund",value:"or"},
                {key:"endorse",value:"or"},
                {key:"sell",value:"eat"},
                {key:"snack",value:"eat"}
            ]
            for(var i=0;i<card.length;i++){
                if(key===card[i].key){
                    return card[i].value
                }
            }
            return ""
        }
    }
}
</script>
<style scoped>
    div.place {overflow:hidden;height: 600px;}

    li {margin:20px 0; padding: 0 30px;}

    p.price {height: 30px;line-height: 30px;color:#000;font-size: 14px;text-align: left}
    p.price strong {color:#FFC5B9;}

    p.address {position: relative;text-align: left;line-height: 22px;}
    p.address a {font-size:14px;color:#ccc;margin-right: 100px;text-overflow: ellipsis;overflow: hidden;text-decoration: none;}
    p.address span {position: absolute;right:0px;color:#ABACAB;line-height: 22px;}
    
    p.list {text-align: left;line-height: 26px;}
    p.list span {padding:5px 10px;font-size:14px;border:1px solid yellow;color:sandybrown}
    p.list span.or {color:blue}
    p.list span.eat {color:red}
</style>