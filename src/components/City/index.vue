<template>
<div class="body" ref="body">
    <div class="city">
        <h2 class="hot-city" ref="hotCity">热门城市</h2>
        <ul class="city-list">
            <li v-for="(item,index) in hotCity" :key="index"><a href="">{{item.nm}}</a></li>
        </ul>
        <dl v-for="(items,index) in list" :key="index"  ref="dl">
            <dt>{{items.index}}</dt>
            <dd v-for="(item,index) in items.lists" :key="index">{{item.nm}}</dd>
        </dl>
        <div class="order">
           <span v-for="(item,index) in list" :key="index" @touchstart="touchHandle(index)">{{item.index}}</span>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:"city",
    data(){
        return{
            list:[],
            hotCity:[]
        }
    },
    mounted(){
    this.axios.get("/api/cityList").then(res=>{
        let list=res.data.data.cities;
        this.getCitys(list)
    })
},
methods:{
        getCitys(list){
            let cityList=[];
            let hotCity=[];
            list.map((res)=>{
                if(res.isHot){
                    hotCity.push(res)
                }
            })
            this.hotCity=hotCity;
            for(let i=0;i<list.length;i++){
                let fisrtLetter=list[i].py.substring(0,1).toUpperCase();
                if(this.compare(fisrtLetter,cityList)){
                    cityList.push({index:fisrtLetter,lists:[{id:list[i].id,nm:list[i].nm}]})
                }else{
                    for(let j=0;j<cityList.length;j++){
                        if(cityList[j].index.indexOf(fisrtLetter)!=-1){
                            cityList[j].lists.push({id:list[i].id,nm:list[i].nm})
                        }
                    }   
                }
            }
            cityList.sort((n1,n2)=>{
                if(n1.index>n2.index){
                    return 1
                }else{
                    return -1
                }
            })
            this.list=cityList
        },
        compare(fisrtLetter,cityList){
            for(let i=0;i<cityList.length;i++){
                if(cityList[i].index===fisrtLetter){
                    return false
                }
               
            } 
            return true;
        },
        touchHandle(index){
            let odl=this.$refs.dl;
            this.$refs.body.scrollTop=odl[index].offsetTop-80;
        }

    }
}
</script>
<style scoped>
    div.body {height: 600px;overflow: auto;}
    h2.hot-city {line-height: 28px;font-size:16px;text-align: left;margin-left: 30px;}
    ul.city-list {display: flex;justify-content:flex-start;align-items:center;flex-wrap: wrap;}
    ul.city-list li {width: 33%;height: 28px;}
    ul.city-list li a {display: block;line-height: 28px;text-decoration: none;color: #000}
    dl {margin: 10px 0;display: flex;flex-direction: column;align-items: flex-start;margin-left: 30px;}
    dt,dd {line-height: 28px;margin-bottom: 5px}
    div.order {position: fixed;right: 0;top:50%;margin-top:-50px;display: flex;flex-direction: column;justify-content:space-around;height: 100px;width:50px;align-items: center}
</style>


