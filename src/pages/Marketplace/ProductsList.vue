<template>
  <div class="mp_ProductList">
    <div class="container-fluid">
      <div class="container">
        <MarketPlaceHeader/>
      </div>
      <div class="marketplace_logo_panel"></div>
      <div class="container">
        <div class="row categoriesPanel">
          <div class="col-md-3" style="background-color:white">
            <div class="category_title">
              CATEGORIES
            </div>
            <div class="category_items">  
              <img :src="require('../../assets/image/marketplace/cat1.png')" width=60 height=60/>
              <img :src="require('../../assets/image/marketplace/cat2.png')" width=60 height=60/>
              <img :src="require('../../assets/image/marketplace/cat3.png')" width=60 height=60/>
              <img :src="require('../../assets/image/marketplace/cat4.png')" width=60 height=60/>
              <img :src="require('../../assets/image/marketplace/cat5.png')" width=60 height=60/>
              <img :src="require('../../assets/image/marketplace/cat6.png')" width=60 height=60/>
              <img :src="require('../../assets/image/marketplace/cat7.png')" width=60 height=60/>
              <img :src="require('../../assets/image/marketplace/cat8.png')" width=60 height=60/>
            </div>
          </div>
          <div class="col-md-9" style="background-size:cover; min-height:180px; background-position:center;" :style="{backgroundImage:'url(' + require('../../assets/image/marketplace/category_logo.png') + ')'}">
          </div>
        </div>
        <div class="row sellProductsPanel">
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="sell_product">
              <div class="sell_productlink">
                Start selling your products
              </div>
              <a class="sell_productlink_click" href="#" v-scroll-to="'#marketplace_banner'">
                Click Here
              </a>
            </div>
          </div>
        </div>
        <div class="row newSoldProductPanel">
          <div class="col-lg-7">
            <div class="row" style="height:100%; background-size:cover; background-position:right center;" :style="{backgroundImage:'url(' + require('../../assets/image/marketplace/newSoldProducts.png') + ')'}">
              <div class="col-sm-5 nspClickLink">
                <div class="sell_nsplink">
                  Catch up with the newly sold products, probably with hot sales and discounts
                </div>
                <a class="sell_nsplink_click"  href="#" v-scroll-to="'#marketplace_banner'">
                  Click Here
                </a>
              </div>
              <div class="col-sm-7 nspHeading">
                NEW<br/>SOLD<br/>PRODUCTS
              </div>
            </div>
          </div>
          <div class="col-lg-5 nspListContainer">
            <div class="nspList">
              <div>
                <img :src="require('../../assets/image/marketplace/ns1.png')" style="width:100%; height:100%; padding:5px; object-fit:cover;" />
              </div>
              <div style="">
                <img :src="require('../../assets/image/marketplace/ns4.png')" style="width:100%; height:100%; padding:5px; object-fit:cover;" />
              </div>
              <div>
                <img :src="require('../../assets/image/marketplace/ns2.png')" style="width:100%; height:100%; padding:5px; object-fit:cover;" />
              </div>
              <div>
                <img :src="require('../../assets/image/marketplace/ns3.png')" style="width:100%; height:100%; padding:5px; object-fit:cover;" />
              </div>
              <div>
                <img :src="require('../../assets/image/marketplace/ns5.png')" style="width:100%; height:100%; padding:5px; object-fit:cover;" />
              </div>
              <div>
                <img :src="require('../../assets/image/marketplace/ns6.png')" style="width:100%; height:100%; padding:5px; object-fit:cover;" />
              </div>
            </div>
          </div>
        </div>
        <div class="row trendingProductPanel">
          <div class="col-lg-5 nspListContainer">
            <div class="nspList">
              <div>
                <img :src="require('../../assets/image/marketplace/ns1.png')" style="width:100%; height:100%; padding:5px; object-fit:cover;" />
              </div>
              <div style="">
                <img :src="require('../../assets/image/marketplace/ns4.png')" style="width:100%; height:100%; padding:5px; object-fit:cover;" />
              </div>
              <div>
                <img :src="require('../../assets/image/marketplace/ns2.png')" style="width:100%; height:100%; padding:5px; object-fit:cover;" />
              </div>
              <div>
                <img :src="require('../../assets/image/marketplace/ns3.png')" style="width:100%; height:100%; padding:5px; object-fit:cover;" />
              </div>
              <div>
                <img :src="require('../../assets/image/marketplace/ns5.png')" style="width:100%; height:100%; padding:5px; object-fit:cover;" />
              </div>
              <div>
                <img :src="require('../../assets/image/marketplace/ns6.png')" style="width:100%; height:100%; padding:5px; object-fit:cover;" />
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="row" style="height:100%; background-size:cover; background-position:left center;" :style="{backgroundImage:'url(' + require('../../assets/image/marketplace/trendProducts.png') + ')'}">
              <div class="col-sm-7 tpHeading">
                TRENDING<br/>PRODUCTS
              </div>
              <div class="col-sm-5 nspClickLink">
                <div class="sell_nsplink">
                  Catch up with the newly sold products, probably with hot sales and discounts
                </div>
                <a class="sell_nsplink_click"  href="#" v-scroll-to="'#marketplace_banner'">
                  Click Here
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row" id="marketplace_banner" style="height:16%; min-height:120px; background-size:cover; background-position:center;" :style="{backgroundImage:'url(' + require('../../assets/image/marketplace/marketplace_banner.png') + ')'}">
        </div>
        <div class="productContent">
          <ProductItem v-for="(item, index) in products" :key="index" :productInfo="item"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductItem from '../../components/ProductItem/ProductItemMarket.vue'
import MarketPlaceHeader from './MarketPlaceHeader.vue'

export default {
  components: {
    ProductItem,
    MarketPlaceHeader
  },
  data (){
    return {
      products: [
        {name: 'Product1', price: 501, star: 5, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product2', price: 502, star: 4, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product3', price: 503, star: 3, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product4', price: 504, star: 5, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product5', price: 505, star: 5, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product6', price: 506, star: 1, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product7', price: 507, star: 5, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product8', price: 508, star: 2, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product9', price: 509, star: 5, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product10', price: 5010, star: 5, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product11', price: 5001, star: 5, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product12', price: 5002, star: 5, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product13', price: 5003, star: 3, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product14', price: 5040, star: 5, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product15', price: 5005, star: 4, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product16', price: 5600, star: 5, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product17', price: 5100, star: 2, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product18', price: 5200, star: 5, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product19', price: 5300, star: 3, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product20', price: 5400, star: 5, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product21', price: 5500, star: 1, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product22', price: 5600, star: 5, productImgUrl:'/assets/image/product/product.png'}
      ]
    }
  }
}
</script>

<style>
.mp_ProductList,
.mp_ProductList .container-fluid {
  padding: 0px !important;
  background-color: #e5e5e5;
}
.mp_ProductList .trendingProductPanel {
  margin-top: 30px;
  margin-bottom: 30px;
}
.mp_ProductList .newSoldProductPanel {
  margin-top: 30px;
  margin-bottom: 30px;
}
.mp_ProductList .nspListContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}
.mp_ProductList .nspList {
  display:flex;
  flex-wrap:wrap;
  max-height:250px;
  justify-content: space-around;
}
.mp_ProductList .nspList > div {
  flex: 0 1 28%;
}
.mp_ProductList .nspHeading {
  color: rgba(0,0,0,0);
  font-size: 60px;
  line-height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
  font-family: 'Barlow' !important;
  -webkit-text-stroke: 1px white;
  text-shadow: -3px -3px 1px white;
  padding: 5px;
}
.mp_ProductList .tpHeading {
  color: rgba(0,0,0,0);
  font-size: 60px;
  line-height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  text-align: left;
  font-family: 'Barlow' !important;
  -webkit-text-stroke: 1px white;
  text-shadow: -3px -3px 1px white;
  padding: 5px;
}
.mp_ProductList .nspClickLink {
  background-color:rgba(0,0,0,0.8);
  display:flex;
  flex-direction:column;
  justify-content:space-around;
}
.mp_ProductList .sell_nsplink_click {
  padding: 15px 20px;
  color: white !important;
  font-size: 27px;
  font-family: 'Barlow' !important;
  border: 2px solid lightgrey;
  margin: 10px;
  cursor: pointer;
  text-align: center;
}
.mp_ProductList .sell_nsplink_click:hover {
  text-decoration: none;
  background-color: rgba(255,255,255,0.2);
}
.mp_ProductList .sell_nsplink {
  font-size: 22px;
  line-height: 23px;
  color: white !important;
  font-family: 'Barlow' !important;
  margin: 10px;
}
.mp_ProductList .sellProductsPanel {
  background-image: url('../../assets/image/marketplace/sellProductBack.png');
  background-size: cover;
  background-position: center;
  height: 250px;
  margin-top: 30px;
  margin-bottom: 30px;
}
.mp_ProductList .category_title {
  font-size: 22px;
  font-weight: bold;
  padding-top: 8px;
  padding-bottom: 8px;
}
.mp_ProductList .sell_product {
  padding: 15px;
  margin-left: -15px;
  margin-right: -15px;
  background-color: rgba(0,0,0,0.7);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mp_ProductList .sell_productlink {
  color: white;
  font-size: 35px;
  font-family: 'Barlow';
  margin: 10px;
}
.mp_ProductList .sell_productlink_click {
  padding: 15px 20px;
  color: white !important;
  font-size: 32px;
  font-family: 'Barlow' !important;
  border: 2px solid lightgrey;
  margin: 10px;
  cursor: pointer;
}
.mp_ProductList .sell_productlink_click:hover {
  text-decoration: none;
  background-color: rgba(255,255,255,0.2);
}
.mp_ProductList .categoriesPanel {
  margin-top: 30px;
  margin-bottom: 30px;
}
.mp_ProductList .category_items {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.mp_ProductList .category_items > img{
  padding: 5px;
}
.mp_ProductList .marketplace_logo_panel {
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  background-image: url('../../assets/image/marketplace/marketplace_logo.png');
  margin-top: 10px;
  margin-bottom: 10px;
}
.mp_ProductList .productContent {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
@media (max-width: 992px) {
  .mp_ProductList .nspListContainer {
    height: fit-content;
  }
  .mp_ProductList .nspList > div {
    flex: 1 0 15%;
  }
  .mp_ProductList .nspHeading {
    color: rgba(0,0,0,0);
    font-size: 60px;
    line-height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    text-align: right;
    font-family: 'Barlow' !important;
    -webkit-text-stroke: 1px white;
    text-shadow: -3px -3px 1px white;
    padding: 5px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .mp_ProductList .tpHeading {
    color: rgba(0,0,0,0);
    font-size: 60px;
    line-height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    text-align: left;
    font-family: 'Barlow' !important;
    -webkit-text-stroke: 1px white;
    text-shadow: -3px -3px 1px white;
    padding: 5px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

</style>
