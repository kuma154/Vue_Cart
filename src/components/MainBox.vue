<template>
  <div class="main">
    <a-row class="header">
      <a-col :span="12">
        <span style="color:red;padding:0 5px">JD</span>京东自营
      </a-col>
      <a-col class="header-msg" :span="12">{{item.shopDesc}}</a-col>
    </a-row>
    <a-row type="flex" justify="space-between" align="top" class="content">
      <a-col :span="2">
        <!-- <a-checkbox   @change="onChange($event,item.shopId)"></a-checkbox> -->
        <input
          type="checkbox"
          @click="setcurrect(item.checked,item.shopId)"
          :checked="item.checked"
          name
 
        />
      </a-col>
      <a-col class="imgs" :span="8">
        <img :src="item.shopImg" alt />
      </a-col>
      <a-col class="content-msg" :span="14">
        <div class="cart-box">
          <p>{{item.shopName}}</p>
          <div class="cart-price">
            <p>
              <span>￥</span>
              {{item.shopPrice}}
            </p>
            <p style="color:#e74c3c">
              <span>￥</span>
              {{setTotal}}
            </p>
          </div>
          <div class="cart-total">
            <a-input-number
              id="xxx"
              v-model="item.shopNumber"
              :min="1"
              :max="10"
              @change="onChange1($event,item.shopId)"
            />
            <a-icon type="delete" />
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["item"],
  data() {
    return {
      totals: 0,
      value: 3,
    };
  },
  methods: {
    ...mapMutations(["setNewFlag", "setItemTotal", "setsTotal"]),
    setcurrect(flag, id) {
      console.log(flag, id);
      this.setNewFlag({flag:flag, id });
      console.log(flag, id);
        this.setsTotal();
    },
    onChange1(value, id) {
      console.log("changed", value, id);
      this.setItemTotal({ value, id });
      console.log("changed", this.item.shopNumber, id);
      this.setsTotal();
    },
  },
  computed: {
    setTotal() {
      return this.item.shopNumber * this.item.shopPrice;
    },
  },
};
</script>

<style scoped>
div {
  background-color: #fff;
}
.main {
  margin-bottom: 1.25rem;
}
.header {
  border-top: 1px solid #ddd;
  padding: 10px 10px;
  border-bottom: 1px solid #ddd;
}
.header-msg {
  color: red;
  text-align: right;
}
.content {
  padding: 10px 10px;
  border-bottom: 1px solid #ddd;
}
.content .imgs img {
  width: 100%;
  background: no-repeat center center/cover;
}
.content-msg {
  padding-left: 5px;
}
.cart-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
}
.cart-price p {
  height: 1.875rem;
  line-height: 1.875rem;
}
.cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>