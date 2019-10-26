<template>
    <div class="header">
        <h1>{{name}}</h1>
    </div>
</template>
<script>
export default {
   name:"Header",
   props:{
       name:{
           type:String,
           default:""
       }
   }
}
</script>
<style scoped>
        .header {
            width: 100%;
            height: 40px;
            position:fixed;
            top: 0;
            left: 0;
            text-align: center
        }
        .header h1 {
            font-size: 16px;
            line-height: 40px;
            background: #FF5C2B;
            color :#fff;
            letter-spacing: 1px
        }
</style>

