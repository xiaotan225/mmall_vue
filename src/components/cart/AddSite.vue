<template>
  <div class="add-site">
    <!-- <manyAreaSelect :selectedData.sync="manyAreaValue"></manyAreaSelect> -->
    <div class="add-box">
      <div class="title">
        <h3>使用新地址</h3>
        <i @click="guanbu">×</i>
      </div>
      <div class="body">
        <ul>
          <li>
            <label for>收件人姓名：</label>
            <input type="text" placeholder="请输入收件人姓名" v-model="options.name" />
          </li>
          <li>
            <label for>所在城市：</label>
            <VDistpicker @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea"></VDistpicker>
          </li>
          <li>
            <label for>详细地址：</label>
            <input type="text" placeholder="请输入详细地址" v-model="options.detailSite" />
          </li>
          <li>
            <label for>收件人手机号：</label>
            <!-- <input type="tel" placeholder="请输入11位手机号"  v-model="options.mobile"/> -->
            <input
              id="username"
              class="weui-input"
              type="text"
              v-model="options.mobile"
              placeholder="请输入手机号"
              maxlength="11"
              onpaste="return false;"
              @keyup="displayResult"
            />
          </li>

          <li>
            <a href="javascript:;" class="save" @click="addSite">保存收货地址</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import VDistpicker from "v-distpicker";
export default {
  props: ["close"],
  components: { VDistpicker },
  data() {
    return {
      cityList: [],
      site: {
        province: "",
        city: "",
        district: ""
      },
      options: {
        name: "",
        value: "",
        detailSite: "",
        mobile: ""
      }
    };
  },
  computed: {
    newSite() {
      let { province, city, district } = this.site;
      if(!province || !city || !district){
        return ''
      }
      return province + " " + city + " " + district;
    }
  },
  methods: {
    displayResult() {
      var name = this.options.mobile;
      var nameValue = name.replace(/\D/g, "");
      this.options.mobile = nameValue;
    },
    onChangeProvince(data) {
      this.site.province = data.value;
    },
    onChangeCity(data) {
      this.site.city = data.value;
    },
    onChangeArea(data) {
      this.site.district = data.value;
    },
    addSite() {
      if (!this.options.name) {
        alert("请填写名称");
        return;
      }
      if (!this.newSite) {
        alert("请选择地址");
        return;
      }

      if (this.options.mobile.length == 11) {
        var userName = localStorage.getItem("userName");
        this.$axios
          .post("/site/addSite", {
            userName: userName,
            name: this.options.name,
            value: this.newSite,
            detailSite: this.options.detailSite,
            mobile: this.options.mobile,
            checked: true
          })
          .then(res => {
            var code = res.data.code;
            if (code == 1) {
              this.guanbu();
            } else {
              alert("地址添加失败");
            }
          });
      } else {
        alert("请输入正确的手机号");
        return;
      }
    },
    guanbu() {
      this.$emit("close", false);
    },
    getCityList() {
      this.$axios
        .get("/cart/cityList")
        .then(result => {
          this.cityList = result.data.result.data.cities;
        })
        .catch(err => {});
    }
  },
  created() {
    this.getCityList();
  }
};
</script>
<style lang="css" scoped>

.save {
  display: inline-block;
  width: 100px;
  height: 30px;
  background-color: red;
  text-align: center;
  line-height: 30px;
  color: #fff;
  margin-left: 70px;
}
.add-box .body select + select {
  margin-left: 10px;
}
.add-site {
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
.add-site .add-box {
  width: 700px;
  background-color: #fff;
  height: 350px;
  border-radius: 2px;
}
.add-site .add-box .title h3 {
  margin-left: 5px;
}
.add-site .add-box .title i {
  position: absolute;
  right: 12px;
  top: 0;
  font-size: 15px;
  width: 10px;
  font-weight: bold;
  height: 10px;
  cursor: pointer;
}
.add-site .add-box .title {
  position: relative;
  border-bottom: 1px solid #ccc;
}
.add-site .add-box .body ul li {
  display: flex;
  padding: 10px 10px;
}
label {
  width: 100px;
  text-align-last: center;
}
</style>