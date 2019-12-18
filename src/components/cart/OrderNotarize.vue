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
          <li  v-for="(item, index) in list" :key="index" :class="item.pitch?'pitch':''">
            <p class="top">
              <span>北京</span>&nbsp;
              <span>北京</span>&nbsp;
              <span>(Rosen 收)</span>
            </p>
            <p class="bottom">{{item.ddas}}&nbsp;<span>{{item.tel}}</span></p>
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
    <List :isShowDel="isShowDel" ></List>
  </div>
</template>

<script>
import CrumbList from "../public/CrumbList";
import AddSite from './AddSite'
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
      isShowAddSite:false,
      list:[
        {
          ddas:'中关村',
          tel:'15506624783',
          pitch:false 
        },
          {
          ddas:'中关村',
          tel:'15506624783',
          pitch:true
        },
          {
          ddas:'小吃',
          tel:'15522624783',
          pitch:false
        }
      ]
    };
  },
  methods: {
    showAddSite(){
      this.isShowAddSite = true
    },
    close(data){
      this.isShowAddSite = data
    }
  }
};
</script>

<style lang="css" scoped>

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
  border:0 !important; 
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
  display: flex;
  flex-wrap: wrap;
margin-left: 40px;
}
.site-list .body ul li p + p {
  border-top: 1px solid #ccc;
  padding: 10px 0;
}
.site-list .body ul li:hover{
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

.pitch{
  border: 1px dashed #c60023 !important; 

}
</style>