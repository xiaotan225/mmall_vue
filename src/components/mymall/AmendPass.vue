<template>
  <div class="AmendPass">
    <div class="raw-password">
      <span>原密码</span>
      <input type="password" v-model="rawPassword"/>
    </div>
    <div class="new-password">
      <span>新密码</span>
      <input type="password" v-model="newPassword"/>
    </div>
    <div class="verify">
      <a href="javascript:;" @click="verify">确认</a>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
        rawPassword:'',
        newPassword:''
    };
  },
  methods: {
    verify() {
        var userName = localStorage.getItem('userName')
        this.$axios.post('/users/amend',{
            userName:userName,
            rawPassword:this.rawPassword,
            newPassword:this.newPassword
        })
        .then((result) => {
           var code = result.data.code
           if(code == 1){
               alert('密码修改成功')
               this.rawPassword = ''
                this.newPassword = ''
           } else{
               alert('密码修改失败')
           }
        }).catch((err) => {
            
        });
    }
  }
};
</script>


<style lang="css" scoped>
.AmendPass div + div {
  margin: 10px 0;
}
.AmendPass div span {
  margin: 0 10px 0 0;
}
.verify {
  display: flex;
  width: 287px;
  justify-content: flex-end;
}
.verify a {
  display: inline-block;
  width: 50px;
  height: 30px;
  background-color: #c60023;
  color: #fff;
  text-align: center;
  line-height: 30px;
  border-radius: 2px;
}
input {
  width: 240px;
  height: 25px;
  line-height: 25px;
  font-size: 15px;
  color: #333;
  border: none;
  outline: none;
  border: 1px solid #cccccc;
}
</style>