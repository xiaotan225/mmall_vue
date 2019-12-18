<template>
  <div>
    <CrumbList title="我的购物车"></CrumbList>

      <List>
            <input type="checkbox" id="all" slot="checkboxAll"/>
              <input type="checkbox" id="all"  slot="All"/>
            <label for="all" slot="quanxuan">全选</label>
      </List>
  </div>
</template>

<script>
import CrumbList from "../public/CrumbList";
import List from './List'
export default {
  components:{
    List,
    CrumbList
  }
}
</script>