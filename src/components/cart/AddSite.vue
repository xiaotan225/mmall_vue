<template>
    <div class="add-site">
        <div class="add-box">
            <div class="title">
                <h3>使用新地址</h3>
                <i @click="guanbu">×</i>
            </div>
            <div class="body">
                <ul>
                    <li>
                        <label for="">收件人姓名：</label>
                        <input type="text" placeholder="请输入收件人姓名">
                    </li>
                    <li>
                        <label for="">所在城市：</label>
                        <select >
                            <option>北京</option>
                            <option>上海</option>
                            <option>北京</option>
                        </select>
                        <select >
                            <option>北京</option>
                            <option>上海</option>
                            <option>北京</option>
                        </select>
                    </li>
                    <li>
                        <label for="">详细地址：</label>
                        <input type="text" placeholder="请输入详细地址">
                    </li>
                      <li>
                        <label for="">收件人手机号：</label>
                        <input type="text" placeholder="请输入11位手机号">
                    </li>
                     <li>
                        <label for="">邮政编号：</label>
                        <input type="text" placeholder="如：1000">
                    </li>
                    <li>
                        <a href="javascript:;" class="save">保存收货地址</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['close'],
    methods: {
        guanbu(){
            this.$emit('close',false)
        }
    }
}
</script>
<style lang="css" scoped>
.save{
    display: inline-block;
    width: 100px;
    height: 30px;
    background-color: red;
    text-align: center;
    line-height: 30px;
    color: #fff;
    margin-left: 70px;
}
.add-box .body select + select{
    margin-left: 10px;
}
.add-site{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 200;
       display: flex;
    justify-content: center;
    align-items: center;
}
.add-site .add-box{
    width: 700px;
    background-color: #fff;
    height: 350px;
    border-radius: 2px;
}
.add-site .add-box .title h3{
    margin-left: 5px;
}
.add-site .add-box .title i{
 position: absolute;
    right: 12px;
    top: 0;
    font-size: 15px;
    width: 10px;
    font-weight: bold;
    height: 10px;
    cursor: pointer;
}
.add-site .add-box .title{
    position: relative;
    border-bottom: 1px solid #ccc;
}
.add-site .add-box .body ul li{
    display: flex;
    padding: 10px 10px;
}
label{
    width: 100px;
       text-align-last:center;
}
</style>