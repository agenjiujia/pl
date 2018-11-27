<template>
<div class='login-wrap'>
    <el-form label-position="top" label-width="80px" :model="formdata" class='login-form'>
        <h2>用户登录</h2>
        <el-form-item label="名称">
            <el-input v-model="formdata.username"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
            <el-input v-model="formdata.password"></el-input>
        </el-form-item>
        <el-button type="primary" class='login-btn' @click.prevent='subdata'>主要按钮</el-button>
    </el-form>
</div>
</template>

<script>
export default {
    data() {
        return {
            formdata: {
                username: '',
                password: '',
            }
        };
    },
    methods:{
        subdata(){
            this.$http.post('/login',this.formdata).then((res)=>{
                console.log(res);
            })
        }
    }
}
</script>

<style>
    .login-wrap{
        height: 100%;
        background-color: #324152;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login-wrap .login-form{
        width: 400px;
        background-color: #fff;
        padding:25px;
        border-radius: 5px;
    }
    .login-wrap h2{
        margin-top: 0;
        padding-top: 0;
    }
    .login-wrap .login-btn{
        width: 100%;
    }
</style>
