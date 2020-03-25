<template>
  <div>
    
    <AddSite v-if="isShowAddSite" @close="close"></AddSite>

    <CrumbList title="订单确认"></CrumbList>
    <div class="site-list w">
      <div class="title">
        <h3>收货地址</h3>
      </div>
      <div class="body">
        <ul>
          <li
            v-for="(item, index) in list"
            :key="index"
            :class="item.checked?'pitch':''"
            @click="setSite(item._id)"
          >
            <p class="top">
              <span>{{item.value}}</span>&nbsp;
              <span>({{item.name}}&nbsp;收)</span>
            </p>
            <p class="bottom">
              {{item.detailSite}}&nbsp;
              <span>{{item.mobile}}</span>
            </p>
            <p class="del" @click="del(item)">删除</p>
          </li>

          <li class="add-site" @click="showAddSite">
            <p class="add-icon">+</p>
            <p>使用新地址</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="inventory w">
      <h3>商品清单</h3>
    </div>
    <List :isShowDel="isShowDel">
      <!-- <router-link to="/cart/ordernotarize" href="javascript:;" >去结算</router-link> -->
      <a href="javascript:;" @click="addOrder">确认订单</a>
    </List>

  </div>
</template>

<script>
import CrumbList from "../public/CrumbList";
import AddSite from "./AddSite";
import List from "./List";
export default {
  components: {
    List,
    CrumbList,
    AddSite
  },
  data() {
    return {
      isShowDel: true,
      isShowTitle: false,
      isShowAddSite: false,
      checked: "",
      list: [],
      goodsData: [],
      siteData:{}
    };
  },
  methods: {
    /* 删除地址 */
    del(item){
      var userName = localStorage.getItem("userName");
      this.$axios.post('/site/del',{
        id:item._id,
        userName:userName
      }).then(res=>{
        var code = res.data.code
        if(code === 1){
          alert('删除成功')
        }

      }).catch(err=>{
        alert('删除地址失败')
      })
    },
    /* 添加订单 */
    addOrder() {
       if(this.list.length == 0 ){
        alert('地址不能为空')
        return
      }
      if(this.goodsData.length == 0){
        alert('商品不能为空')
        return
      }
      this.list.forEach(item => {
        if(item.checked){
          this.siteData = item
        }
      });
      var userName = localStorage.getItem("userName");
      this.$axios.post("/cart/addOrder", {
        userName: userName,
        goodsData: this.goodsData,
        siteData: this.siteData,
        total: window.total

      })
      .then(res=>{
        var code = res.data.code

        if(code === 1){
          this.$router.push('/successOrder')

        }else if(code == -2){
          alert('请选择地址')
        }else{
          alert('订单添加失败')

        }
      })
    },
    showAddSite() {
      this.isShowAddSite = true;
    },
    close(data) {
      this.isShowAddSite = data;
      this.getSiteList();
    },
    /* 获取地址列表 */
    getSiteList() {
      var userName = localStorage.getItem("userName");
      this.$axios
        .get("/site/getSiteList", {
          params: {
            userName: userName
          }
        })
        .then(result => {
          var code = result.data.code;
          if (code === 1) {
            this.list = result.data.result;
          } else {
            alert("获取地址列表失败");
          }
        })
        .catch(err => {});
    },
    /* 设置用户地址状态 */
    setSite(id) {
      var userName = localStorage.getItem("userName");
      this.$axios
        .post("/site/setSite", {
          userName: userName,
          id: id
        })
        .then(res => {
          var code = res.data.code;
          if (code == 1) {
            this.getSiteList();
          } else {
            alert("地址信息设置失败");
          }
        });
    },
    /* 获取购物车 */
    getCartData() {
      var userName = localStorage.getItem("userName");
      this.$axios
        .get("/cart/cartData", {
          params: {
            userName: userName
          }
        })
        .then(result => {
          var code = result.data.code;
          if (code === 1) {
            let goodsList = result.data.result;
            for (let i = 0; i < goodsList.length; i++) {
              if (goodsList[i].isOpt) {
                this.goodsData.push(goodsList[i]);
              }
            }
          } else {
            alert("获取购物车数据失败");
          }
        })
        .catch(err => {
          alert("获取购物车数据失败");
        });
    }
  },
  created() {
    
    this.getSiteList();
    this.getCartData()
  }
};
</script>

<style lang="css" scoped>
.del{
  text-align:right;
  cursor: pointer;
}
.guanbi-icon {
}
.site-list .add-site {
  font-size: 20px;
  color: #ccc;
  text-align: center;
  cursor: pointer;
  display: inline-block;
}
.site-list .add-site p {
  padding: 0 !important;
  margin: 0;
  border: 0 !important;
}
.site-list .add-site .add-icon {
  font-size: 55px;
}
.inventory {
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}
.site-list {
  margin-bottom: 20px;
}
.site-list .title {
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}
.site-list .body ul {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-left: 40px;
}
.site-list .body ul li p + p {
  border-top: 1px solid #ccc;
  padding: 10px 0;
}
.site-list .body ul li::after {
}
.site-list .body ul li:hover {
  border: 1px dashed #c60023 !important;
}
.site-list .body ul li,
.site-list .add-site {
  padding: 0 10px;
  width: 300px;
  height: 130px;
  margin-bottom: 10px;
  border: 1px dashed #ccc;
  margin-right: 20px;
}

.pitch {
  border: 1px dashed #c60023 !important;
}
</style>