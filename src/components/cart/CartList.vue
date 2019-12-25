<template v-slot:item="slotProps">
  <div>
    <CrumbList title="我的购物车"></CrumbList>
      
      <template >
     <List>

          <router-link to="/cart/ordernotarize" href="javascript:;" >去结算</router-link>
          
      </List>
  </template>
  </div>
</template>

<script>
import CrumbList from "../public/CrumbList";
import List from './List'
export default {
  components:{
    List,
    CrumbList
  },
  data () {
    return {
      isOpt:false,
    }
  },
  methods: {
   
  
  },
}
</script>