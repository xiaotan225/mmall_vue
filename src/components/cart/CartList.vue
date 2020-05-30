<template >
  <div>
    <CrumbList title="我的购物车"></CrumbList>
    <template>
      <List>
        <template v-slot:bb>
          <router-link to="/cart/ordernotarize" href="javascript:;">去结算</router-link>
        </template>
      </List>
    </template>
  </div>
</template>

<script>
import CrumbList from "../public/CrumbList";
import List from "@/components/public/List.vue";

export default {
  components: {
    List,
    CrumbList
  },
  data() {
    return {};
  },
  methods: {}
};
</script>