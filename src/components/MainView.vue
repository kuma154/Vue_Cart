<template>
  <div class="main-view">
    <div class="header">
      <div>
        <a-icon type="left" />
      </div>
      <div>购物车</div>
      <div>
        <a-icon type="align-right" />
      </div>
    </div>
    <div class="msg">
      <a-icon type="smile" />您正在安全购物中，请放心购物
    </div>
    <!-- 设置循环遍历购物车 -->
    <main-box v-for="(item,index) in allShops.shopList" :key="index" :item="item"></main-box>
    <a-row type="flex" justify="space-between" class="content footer">
      <a-col :span="4" style="padding-left:10px">
        <input
          type="checkbox"
          :checked="ischeckedAll"
          @click="setchange($event,ischeckedAll)"
          name
          id
        />全选
      </a-col>
      <a-col :span="14">合计：{{allShops.totalMoney}}</a-col>
      <a-col :span="6">
        <span class="totals">去结算</span>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import MainBox from "./MainBox.vue";
import { mapState, mapMutations } from "vuex";
export default {
  components: { MainBox },
  computed: {
    ...mapState(["allShops"]),
  },
  data() {
    return {
      totals: 0,
      ischeckedAll: false,
    };
  },
  created() {
    this.setsTotal();
    this.setItemHasChecked();
  },
  beforeMount() {
    this.setsTotal();
  },
  methods: {
    ...mapMutations(["setSelectAll", "setsTotal",'setItemHasChecked']),
    setchange(e, flag) {
      this.ischeckedAll = !flag;
      console.log(`checked = ${this.ischeckedAll}`);
      this.setSelectAll(!flag);
      this.setsTotal();
    },
  },
};
</script>

<style scoped>
.main-view {
  position: relative;
  padding-bottom: 40px;
}
.header {
  background-color: #ddd;
  height: 3.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
}
.header div {
  padding: 0 1rem;
}
.msg {
  background-color: #fff;
  padding: 0.625rem 0;
  font-size: 16px;
  text-align: center;
}
.msg i {
  color: #27ae60;
  padding: 0 0.3125rem;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: #fff;
  line-height: 40px;
  margin-top: 40px;
}
.totals {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  color: #fff;
  display: block;
  text-align: center;
  background-color: #e74c3c;
}
</style>