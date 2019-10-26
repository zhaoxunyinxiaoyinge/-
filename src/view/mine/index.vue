<template>
    <div id="mine">
        <Header name="我的影院"/>
        <div class="login">
            <form action="">
                <p><label for="">帐号:</label><input type="text" name="username"/></p>
                <p> <label for="">密码:</label><input type="text" name="password"/></p>
                <p class="btn"><button>点击提交</button></p>
                <p class="last"><span>立即注册</span><span>找回密码</span></p>
            </form>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default {
    name:"mine",
    components:{
        Header,
        Footer
    }
}
</script>
<style scoped>
        div.login {display: flex;justify-content: center;align-items: center;}
        form {width: 90%;}
        p {display: flex;align-items: center;margin: 20px 0;}
        p label{flex:1}
        p input {border:0;border:1px solid #ccc;flex: 5;height: 32px;outline: none;padding-left: 20px;}
        p input:focus {border:1px solid rgba(64, 9, 227, 0.965); box-shadow: 0px 0px 1px rgba(64, 9, 227, 0.965);transition: border 0.2s}

        p.btn button {flex:1;line-height:32px;border:0;background-color: #FF5C2B;color:#fff}
        p.last{color:#999;justify-content: space-between;height:auto;font-size: 14px;margin-top:-20px;margin-bottom: 0;}
</style>