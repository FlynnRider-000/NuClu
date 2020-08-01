<template>
  <div class="content Products">
    <div class="container-fluid">
      <ProfileHeader :activeLink="'products'">
      </ProfileHeader>
      <div class="container productsContent">
        <div class="productHeader">
          <div style="width: 30%;min-width: 250px;display:flex">
            <input type="text"  style="border:none; width:calc(100% - 30px); padding: 5px;">
            <div class="search-btn" style="cursor: pointer">
              <img :src="require('../../assets/image/viewprofile/search-icon.png')" width=30 height=30>
            </div>
          </div>
          <div class="product-header-item item-UPPER">
            Sidney ondap's account
          </div>
          <div class="product-header-item item-UPPER">
            customer services
          </div>
          <div class="product-header-item">
            <i class="fa fa-th"/>
            Categories
          </div>
          <div class="product-header-item">
            <i class="fa fa-caret-down"/>
            Filter
          </div>
        </div>
        <div class="productContent">
          <ProductItem v-for="(item, index) in products" :key="index" :productInfo="item"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader.vue'
import ProductItem from '../../components/ProductItem/ProductItemMarket.vue'

export default {
  components: {
    ProfileHeader,
    ProductItem
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
.Products,
.Products .container-fluid {
  padding: 0px !important;
  background-color: #dedede;
}
.Products .productHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.Products .productHeader > div{
    padding: 5px;
}
.Products .productsContent {
  background-color: #ededed;
}
.Products .product-header-item {
  color: #808080;
}
.Products .item-UPPER {
  text-transform: uppercase;
}
.Products .productContent {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
