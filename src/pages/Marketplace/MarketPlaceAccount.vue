<template>
  <div class="content productAccount">
    <div class="container">
      <MarketPlaceHeader/>

      <div class="row activateSellerAccount" :style="{backgroundImage:'url(' + require('../../assets/image/marketplace/account_back.png')}">
        <div class="asHeading"> Activate seller account now</div>
        <div class="asLink"> Click here </div>
      </div>

      <div class="row">
        <div class="col-md-3" style="display:flex; justify-content:center; align-items:center; margin-top:20px; margin-bottom:20px;">
          <img :src="require('../../assets/image/marketplace/ns4.png')" style="width:100%; max-width:250px;"/>
        </div>
        <div class="col-md-6 personInfo">
          <div style="display:flex; flex-direction:column;">            
            <div>
              <div> Name: </div> <div> Sidney Ondap </div>
            </div>
            <div>
              <div> Address: </div> <div> Los Angeles </div>
            </div>
            <div>
              <div> Billing Address: </div> <div> Los Angeles </div>
            </div>
            <div>
              <div> Contact No: </div> <div> 090556565633 </div>
            </div>
            <div>
              <div> Email Address: </div> <div> ondapsidzs@gmail.com </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 paymentMethod">
          Preferred Payment Method:
        </div>
      </div>

      <div class="row accountInfo">
        <div class="accInfoItemHeading">
          Sold Products
        </div>
        <div class="productList">
          <ProductItem v-for="(item, index) in products" :key="index" :productInfo="item" :modifyProduct="()=>{}" :deleteProduct="()=>confirmDeleteProduct = true"/>
          <AddProduct/>
        </div>
      </div>

      <div class="row accountInfo">
        <div class="accInfoItemHeading">
          Orders
        </div>
        <div class="accInfoItemList">
          None
        </div>
      </div>

      <div class="row accountInfo">
        <div class="accInfoItemHeading">
          Reviews
        </div>
        <div class="accInfoItemList">
          None
        </div>
      </div>

      <div class="row accountInfo">
        <div class="accInfoItemHeading">
          Saved Products
        </div>
        <div class="accInfoItemList">
          None
        </div>
      </div>

    </div>
    <MarketPlaceFooter/>
    
    <md-dialog-confirm
      :md-active.sync="confirmDeleteProduct"
      md-title="Are you sure?"
      md-content="<span>Do you want to delete this job?</span>"
      md-confirm-text="Yes"
      md-cancel-text="No"
      @md-cancel="confirmDeleteProduct = false"
      @md-confirm="confirmDeleteProduct = false"
      class="md-custom-theme-light"
    />
  </div>
</template>
<script>
import MarketPlaceHeader from './MarketPlaceHeader.vue'
import MarketPlaceFooter from './MarketPlaceFooter.vue'
import ProductItem from '../../components/ProductItem/ProductItem.vue'
import AddProduct from '../../components/ProductItem/AddProductItem.vue'

export default {
  components: {
    MarketPlaceHeader,
    MarketPlaceFooter,
    ProductItem,
    AddProduct
  },
  data (){
    return {
      products: [
        {name: 'Product1', price: 501, star: 5, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product2', price: 502, star: 4, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product3', price: 503, star: 3, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product4', price: 504, star: 5, productImgUrl:'/assets/image/product/product.png'}
      ],
      confirmDeleteProduct: false
    }
  }
}
</script>
<style>
.productAccount {
  background-color: #e5e5e5;
}
.productAccount .productList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}
.productAccount .accInfoItemHeading {
  padding: 10px;
  text-align: center;
  color: white;
  font-size: 21px;
  background-color: #3EB9E7;
}
.productAccount .accountInfo {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
}
.productAccount .accInfoItemList {
  font-size: 15px;
  color: #FF7A00;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.productAccount .personInfo {
  font-size: 15px;
  font-weight: 500;
  margin-top:20px;
  margin-bottom:20px;
}
.productAccount .personInfo > div > div{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 5px;
}
.productAccount .personInfo > div > div{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 5px;
}
.productAccount .paymentMethod {
  font-size: 15px;
  font-weight: 500;
  margin-top:20px;
  margin-bottom:20px;
}
.productAccount .asHeading {
  font-family: 'Barlow' !important;
  font-size: 44px !important;
  line-height: 40px;
  width: fit-content;
  color: white;
}
.productAccount .asLink {
  font-family: 'Barlow' !important;
  font-size: 34px !important;
  line-height: 30px;
  width: fit-content;
  padding: 10px 30px;
  color: white;
  border: 1px solid white;
}
.productAccount .activateSellerAccount {
  height:200px;
  background-size:cover;
  background-position:center;
  display:flex;
  padding-left:8%;
  flex-direction:column;
  justify-content:space-around;
}
@media (min-width: 768px) {
  .productAccount .personInfo > div > div > div{
    flex: 1 0 50%;
    justify-content: flex-start;
  }
}
</style>
