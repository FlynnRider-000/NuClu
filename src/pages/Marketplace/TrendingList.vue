<template>
  <div class="trendingList">
    <div class="container-fluid">
      <div class="container">
        <MarketPlaceHeader/>
        <div class="row" style="height:16%; min-height:120px; background-size:cover; background-position:center;" :style="{backgroundImage:'url(' + require('../../assets/image/marketplace/trendingItems_banner.png') + ')'}">
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
.trendingList,
.trendingList .container-fluid {
  padding: 0px !important;
  background-color: #e5e5e5;
}
.trendingList .productContent {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
@media (max-width: 992px) {
  
}

</style>
