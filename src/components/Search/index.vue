<template>
<div class="search-body">
    <div class="search">
        <p class="search-input"><input type="text" v-model="args" placeholder="搜索电影" name="" id=""/><span class="iconfont icon-chaxun"></span></p>
        <p class="search-films">电影/电视剧/综艺</p>
        <ul class="search-list">
            <li v-for="item in movieList" :key="item.id">
              <figure>
                <img :src="item.img|makeImage" alt=""/>
                <figcaption>
                    <h1>{{item.nm}}</h1>
                    <span class="guanzhong">{{item.wish}}人看过</span>
                    <p>主演:{{item.star}}</p>
                    <p>{{item.showInfo}}</p>
                </figcaption>
              </figure>
              <span class="score">97</span>
            </li>
        </ul>
    </div>
</div> 
</template>
<script>
export default {
  name: "search",
  data() {
    return {
      movieList: [],
      args: ""
    };
  },
  methods:{
      requestcancl(){
          if(typeof this.source ==='function'){
                this.source('终止请求')
            }
      }
  },
  watch: {
    args(newValue){
        var that=this;
       this.requestcancl();
      this.axios
        .get("/api/searchList?cityId=10&kw=" + newValue, {
          cancelToken: new this.axios.CancelToken(function executor(c){
            that.source=c;
          })
        })
        .then(res => {
          this.movieList = res.data.data.movies.list;
        })
        .catch(function(thrown) {
          if (that.axios.isCancel(thrown)) {
            console.log("Request canceled", thrown.message);
          } else {
            // handle error
          }
        })
        
    }
  },
  filters: {
    makeImage: function(url) {
      return url.replace(/(w\.h)/, "100.80");
    }
  }
};
</script>
<style scoped>
div.search-body {
  overflow: auto;
  height: 600px;
}
p.search-input {
  position: relative;
  width: 100%;
}
p.search-input input {
  box-sizing: border-box;
  padding-left: 50px;
  width: 100%;
  height: 32px;
  border: 0;
  border: 1px solid #eee;
  font-size: 12px;
}
p.search-input span {
  position: absolute;
  left: 10px;
  top: 6px;
}
p.search-films {
  text-align: left;
  line-height: 30px;
  height: 30px;
  color: #999;
  font-size: 14px;
  padding-left: 20px;
  margin: 5px 0;
}

li {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding: 20px 0 0;
}
li figure {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
li figure img {
  height: 100px;
}
li figcaption {
  text-align: left;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}
li figcaption h1 {
  font-size: 16px;
  line-height: 30px;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
li figcaption .guanzhong {
  font-size: 14px;
  line-height: 18px;
}
li figcaption .guanzhong i {
  font-style: normal;
  color: yellow;
}
li figcaption p {
  font-size: 14px;
  line-height: 24px;
  color: rgb(24, 11, 11);
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
li span.score {
  color: yellow;
  font-size: 14px;
}
</style>


