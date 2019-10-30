import Message from "./index.vue"
import Vue from "vue"
const messages=(function(){
     let Default={
        title:"",
        content:"",
        cancel:"",
        ok:"",
        handcancle:null,
        handok:null
    } 
     let newMessage=Vue.extend(Message);
    return function (options) {
        for(var i in Default){
            Default[i]=options[i]
        }
        let vm=new newMessage({
            el:document.createElement("div"),
            data(){
               return {
                   title:Default.title,
                   content:Default.content,
                   cancel:Default.cancel,
                   ok:Default.ok,
               }
            },
            methods:{
                handcancle(){
                    Default.handcancle && Default.handcancle().call(this)
                    document.body.removeChild(vm.$el);
                },
                handok(){
                   Default.handok && Default.handok()
                   document.body.removeChild(vm.$el);
                }
            }
        })
        document.body.appendChild(vm.$el);
    }
    
})()
export default messages