import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    'allShops':{
       'totalMoney':0,
       'shopList':[{
         'shopId':1001,
         'shopDesc':'抢升十代I5 起步8G内存',
         'shopName':'【新品上市】联想拯救者R9000X 2021',
         'shopPrice':8499.00,
         'shopNumber':1,
     
         'shopImg':'https://img.alicdn.com/bao/uploaded/i1/126446588/O1CN015WCPaK1yXLvSxDbBx-126446588.jpg'
       },
       
       {
        'shopId':1002,
        'shopDesc':'十代处理器，5GHz新时代',
        'shopName':'宁美国度电脑主机十代酷睿i3 10100办公电脑',
        'shopPrice':2199.00,
        'shopNumber':1,
     
        'shopImg':'https://img.alicdn.com/bao/uploaded/i2/595397331/O1CN014QpkA6241eCgpwuMY_!!595397331.png'
      },
      {
        'shopId':1003,
        'shopDesc':'下单送无线鼠标',
        'shopName':'Lenovo/联想 拯救者Y7000P 2020英特尔酷睿i7游戏本',
        'shopPrice':9099.00,
        'shopNumber':1,
       
        'shopImg':'https://img.alicdn.com/bao/uploaded/i3/459462135/O1CN01sufjAh1RdsFJXTBXS_!!459462135.jpg'
      },{
        'shopId':1004,
        'shopDesc':'锐龙六核R5/八核R7 GTX独显4G',
        'shopName':'【天猫券后3799/4049起】戴尔/DELL 灵越5493',
        'shopPrice':4599.00,
        'shopNumber':1,
        
        'shopImg':'https://img.alicdn.com/bao/uploaded/i4/379092568/O1CN01Uuxd9o1UqBiBRiyUU_!!379092568.jpg'
      },
      {
        'shopId':1005,
        'shopDesc':'升酷睿i7性能怪兽 流畅大型',
        'shopName':'intel酷睿i7/八核十六线程/6G独显台式电脑主机',
        'shopPrice':1099.00,
        'shopNumber':1,
       
        'shopImg':'https://img.alicdn.com/bao/uploaded/i1/2206722632063/O1CN010HquMN1R6tjEyIYuK_!!2206722632063.jpg'
      },
    ]
    }
  },
  mutations: {
    // 选择全部
    setSelectAll(state,flag){
      state.allShops.shopList.forEach((item)=>{
        // 如果item.checked不存在给item添加checked属性
        if(typeof item.checked==='undefined'){
          // vue 添加属性
          Vue.set(item, 'checked', false)
        }else{
          item.checked=flag
        }
      })
    },
    // 设置itemchecked值
    setNewFlag(state,{flag,id}){
      state.allShops.shopList.forEach((item)=>{
        if(item.shopId===id){
          item.checked=!flag
        }
      })
    },
    // 设置item 数量
    setItemTotal(state,{value,id}){
      state.allShops.shopList.forEach((item)=>{
        if(item.shopId===id){
          item.shopNumber=value
         
        }
      })
    },
    // 设置总钱数
    setsTotal(state){
        state.allShops.totalMoney=0
        state.allShops.shopList.forEach((item)=>{
          // 当选中item时进行添加钱数
          if(item.checked===true){
             state.allShops.totalMoney+=item.shopNumber*item.shopPrice
          }
        })
    },
    setItemHasChecked(state){
      state.allShops.shopList.forEach((item)=>{
        if(typeof item.checked ==='undefined'){
          Vue.set(item,'checked',false)
        }
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
