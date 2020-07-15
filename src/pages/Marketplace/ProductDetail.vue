<template>
  <div class="content ProductDetail">
    <div class="container">
      <MarketPlaceHeader/>
      <div class="productImgPreviewContainer">
        <div class="productImgList">
          <div class="productImgListContainer">
            <div v-for="(item,index) in productImageUrls" :key="index" @click="onImgClick(index)" :class="{actived:curClickedPrvImgId === index}">
              <img :src="item" style="object-fit:contain; width:100%; height:100%"/>
            </div>
          </div>
        </div>
        <div class="productImgPreview" >
          <div>
            <carousel :per-page="1" @page-change="onCarouselPageChange" :navigateTo="curClickedPrvImgId" :navigationEnabled="true" :paginationEnabled="false" navigationNextLabel="<i style='' class='fa fa-chevron-right'></i>" navigationPrevLabel="<i style='font-size:26px;width:26px;' class='fa fa-chevron-left'></i>">
              <slide
                  v-for="(item,index) in productImageUrls"
                  :key="index"
                  :data-index="index"
                  :data-name="'MySlideName' + index"
                  @slideclick="handleSlideClick(index)">
                <div style="width:100%; height:100%">
                  <img :src="item" style="object-fit:contain; width:100%; height:100%"/>
                </div>
              </slide>
            </carousel>
          </div>
        </div>
        <div class="productPanel">
          <div class="productInfo">
            <div class="product-name">{{productInfo.name}}</div>
            <div class="product-price">$ {{productInfo.price}}</div>
            <div class="product-rating">
              <div class="ratingStars">
                <img v-for="index in productInfo.star" :key="index" :src="require('../../assets/image/viewprofile/star.png')" width=20 height=20/>
                <img v-for="index in (5 - productInfo.star)" :key="5 + index" :src="require('../../assets/image/viewprofile/star_inactive.png')" width=20 height=20/>
              </div>
              <div class="rates">
                {{rateString}}
              </div>
            </div>
          </div>
          <div class="purchasePanel">
            <div>
              <span style="font-size: 20px;">
                Quantity:
              </span>
              <input type="text" style="width:50px; font-size:20px; background-color:lightgrey; border:none; text-align:center; padding: 5px;" :value="1">
            </div>
            <div>
              <div class="blue-btn"> Add to Cart </div>
              <div class="blue-btn"> Buy </div>
            </div>
          </div>
          <div class="moreInfo">
            <img :src="require('../../assets/image/marketplace/addToCart.png')" width=35 height=75 style="position:absolute; top:0px; right: 25px;"/>
            <div>
              <a href="#detail"> View Product Detail/Summanry </a>
            </div>
            <div style="padding-top:10px; padding-bottom:10px;">
              <div style="display:flex;align-items:center;">
                <span style="font-size:16px;margin: 5px;">Sold by: </span>
                <div style="display:inline-block; margin-left:10px; margin-right:10px; min-width:50px; min-height:50px; border-radius:50%; border: 3px solid #0f0; background-size:cover;" :style="{backgroundImage:'url(' + require('../../assets/image/marketplace/profile.png') + ')'}">
                </div>
                <span style="font-size:16px; margin-left:10px; margin-right:20px;">
                  Froline Sy
                </span>
                <img :src="require('../../assets/image/marketplace/bxs-comment.png')" width="25px" height="25px"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="productInfoSection">
        <div class="sectionTitle"> Related Products </div>
        <div class="sectionContent">
          <div class="relatedProductPanel">
            <ProductItem v-for="(item, index) in relatedProducts" :key="'pro' + index" :productInfo="item"/>
            <div class="emptyProduct" v-for="index in 10" :key="index"> </div>
          </div>
        </div>
      </div>
      <div class="productInfoSection">
        <div class="sectionTitle"> Product Details </div>
        <div class="sectionContent" style="background-color:white;">
          <div style="width:80%; margin-left:min(10%,calc(50% - 150px)); min-width:300px; display:flex; justify-content:center; align-items:center; flex-direction:column">
            <div style="width:100%; font-size: 22px; font-weight:bold; text-transform:uppercase; text-align:center; padding-top:30px; padding-bottom:30px;">{{productInfo.name}}</div>
            <div style="width:100%; padding-top:min(100%, 600px); position:relative; max-width:600px;">
              <div style="position:absolute; top:0; left:0; right:0; bottom:0; width:100%; height:100%; background-size:contain;" :style="{backgroundImage: 'url(' + productInfo.productImg + ')'}"></div>
            </div>
            <div style="width:100%; max-width:600px; padding-top:20px; padding-bottom: 30px; font-size: 17px; text-align:justify; line-height:25px;">
              This burger is so sick and delicious, wow really? you might want to order 100 more again.
              This burger is so sick and delicious, wow really? you might want to order 100 more again.
              This burger is so sick and delicious, wow really? you might want to order 100 more again.
              This burger is so sick and delicious, wow really? you might want to order 100 more again.
              This burger is so sick and delicious, wow really? you might want to order 100 more again.
            </div>
          </div>
        </div>
      </div>
      <div class="productInfoSection">
        <div class="sectionTitle"> Product Rating & Review </div>
        <div class="sectionContent" style="background-color:white;padding:20px;">
          <div class="ratingStars" style="font-size:30px; display:flex; align-items:center; flex-wrap:wrap;">
            <img v-for="index in productInfo.star" :key="index" :src="require('../../assets/image/viewprofile/star.png')" width=50 height=50/>
            <img v-for="index in (5 - productInfo.star)" :key="5 + index" :src="require('../../assets/image/viewprofile/star_inactive.png')" width=50 height=50/>
            <span style="margin:5px;">
              {{productInfo.star}} / 5
            </span>
          </div>
          <div>
            <div style="display:flex;align-items:center; margin-top:20px; margin-bottom:20px; flex-wrap: wrap;">
              <div style="display:inline-block; margin-left:10px; margin-right:10px; min-width:50px; min-height:50px; border-radius:50%; border: 3px solid #3EB9E8; background-size:cover;" :style="{backgroundImage:'url(' + require('../../assets/image/marketplace/profile.png') + ')'}">
              </div>
              <span style="font-size:16px; margin-left:10px; margin-right:20px;">
                Froline Sy
              </span>
              <div class="ratingStars" style="font-size:30px; display:flex; align-items:center; flex-wrap:wrap;">
                <img v-for="index in productInfo.star" :key="index" :src="require('../../assets/image/viewprofile/star.png')" width=20 height=20/>
                <img v-for="index in (5 - productInfo.star)" :key="5 + index" :src="require('../../assets/image/viewprofile/star_inactive.png')" width=20 height=20/>
              </div>
              <img :src="require('../../assets/image/marketplace/subway_like.png')" width="25px" height="25px" style="margin-left:50px;"/>
              <img :src="require('../../assets/image/marketplace/bxs-comment.png')" width="25px" height="25px" style="margin-left:20px;"/>
              <img :src="require('../../assets/image/marketplace/more.png')" width="25px" height="25px" style="margin-left:20px;"/>
            </div>
            <div style="display:flex;align-items:center; margin-top:20px; margin-bottom:20px; flex-wrap: wrap;">
              <div style="display:inline-block; margin-left:10px; margin-right:10px; min-width:50px; min-height:50px; border-radius:50%; border: 3px solid #3EB9E8; background-size:cover;" :style="{backgroundImage:'url(' + require('../../assets/image/marketplace/profile.png') + ')'}">
              </div>
              <span style="font-size:16px; margin-left:10px; margin-right:20px;">
                Froline Sy
              </span>
              <div class="ratingStars" style="font-size:30px; display:flex; align-items:center; flex-wrap:wrap;">
                <img v-for="index in productInfo.star" :key="index" :src="require('../../assets/image/viewprofile/star.png')" width=20 height=20/>
                <img v-for="index in (5 - productInfo.star)" :key="5 + index" :src="require('../../assets/image/viewprofile/star_inactive.png')" width=20 height=20/>
              </div>
              <img :src="require('../../assets/image/marketplace/subway_like.png')" width="25px" height="25px" style="margin-left:50px;"/>
              <img :src="require('../../assets/image/marketplace/bxs-comment.png')" width="25px" height="25px" style="margin-left:20px;"/>
              <img :src="require('../../assets/image/marketplace/more.png')" width="25px" height="25px" style="margin-left:20px;"/>
            </div>
          </div>
        </div>
      </div>
      <div class="productInfoSection">
        <div class="sectionTitle"> More Products</div>
        <div class="sectionContent">
          <div class="moreProductPanel">
            <ProductItem v-for="(item, index) in moreProducts" :key="'pro' + index" :productInfo="item"/>
            <div class="emptyProduct" v-for="index in 10" :key="index"> </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader.vue'
import ProductItem from '../../components/ProductItem/ProductItem.vue'
import MarketPlaceHeader from './MarketPlaceHeader.vue'
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    ProfileHeader,
    Carousel,
    Slide,
    ProductItem,
    MarketPlaceHeader
  },
  computed: {
    rateString () {
      return this.productInfo.star + ' star' + (this.productInfo.star > 1 ? 's' : '');
    }
  },
  data() {
    return {
      curClickedPrvImgId: 0,
      productInfo: {
        name: 'product1',
        price: 200,
        star: 4,
        productImg: '/assets/image/product/product.png'
      },
      productImageUrls: [
        "/assets/image/product/product5.png",
        "/assets/image/product/product1.png",
        "/assets/image/product/product2.png",
        "/assets/image/product/product3.png",
        "/assets/image/product/product4.png",
        "/assets/image/product/product6.png",
      ],
      relatedProducts:[
        {name: 'Product1', price: 501, star: 5, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product2', price: 502, star: 4, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product3', price: 503, star: 3, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product4', price: 504, star: 5, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product5', price: 505, star: 5, productImgUrl:'/assets/image/product/product.png'}
      ],
      moreProducts:[
        {name: 'Product1', price: 501, star: 5, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product2', price: 502, star: 4, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product3', price: 503, star: 3, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product4', price: 504, star: 5, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product5', price: 505, star: 5, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product1', price: 501, star: 5, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product2', price: 502, star: 4, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product3', price: 503, star: 3, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product4', price: 504, star: 5, productImgUrl:'/assets/image/product/product.png'},
        {name: 'Product5', price: 505, star: 5, productImgUrl:'/assets/image/product/product.png'}
      ]
    }
  },
  methods :{
    handleSlideClick () {
      //alert(1);
    },
    onCarouselPageChange (index) {
      this.curClickedPrvImgId = index;
    },
    onImgClick (index) {
      this.curClickedPrvImgId = index;
    }
  }
}
</script>
<style>
.example-slide {
  align-items: center;
  background-color: #666;
  color: #999;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  min-height: 10rem;
}
.ProductDetail .emptyProduct {
  width: 175px;
  height: 0px;
  margin: 3px;
}
.ProductDetail {
  background-color: #e5e5e5;
}
.ProductDetail .relatedProductPanel,
.ProductDetail .moreProductPanel {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.ProductDetail .relatedProductPanel .productItem,
.ProductDetail .moreProductPanel .productItem{
  margin: 3px !important;
}
.ProductDetail .productInfoSection {
  margin-top: 50px;
  margin-bottom: 20px;
}
.ProductDetail .sectionTitle {
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: 500;
}
.ProductDetail .sectionContent {
  margin-top: 5px;
  margin-bottom: 5px;
}
.ProductDetail .purchasePanel {
  display: inline-block;
}
.ProductDetail .purchasePanel > div{
  margin: 5px;
  display: inline-block;
}
.ProductDetail .blue-btn {
  
  background-color: #19C1E9;
  color: white;
  font-size: 20px;
  padding: 8px 17px;
  display: inline-block;
  margin: 5px;
}
.ProductDetail .productPanel {
  padding: 20px;
  width: 37.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: white;
  position: relative;
}
.ProductDetail .productPanel > div{
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
.ProductDetail .productPanel .product-name {
  font-size: 30px;
  text-transform: uppercase;
  padding-bottom: 20px;
  font-weight: bold;
}
.ProductDetail .productPanel .product-price {
  font-size: 24px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.ProductDetail .productPanel .ratingStars {
  float: left;
}
.ProductDetail .productPanel .rates {
  font-size: 20px;
  float: left;
  margin-left: 50px;
}
.VueCarousel-navigation-prev:focus,
.VueCarousel-navigation-next:focus {
  outline: none !important;
}
.VueCarousel-navigation-prev,
.VueCarousel-navigation-next  {
  transform: translateY(-50%) !important;
  width: 36px;
  height: 36px;
  margin: 2px;
  padding: 4px !important;
}
.VueCarousel-navigation-prev > i,
.VueCarousel-navigation-next > i {
  font-size:26px;
  width:26px;
  color: #C4C4C4;
}

.ProductDetail .productImgList {
  width: 12.5%;
  padding-top: 50%;
  position: relative;
}
.ProductDetail .productImgListContainer:hover {
  overflow-y: scroll !important;
}
.ProductDetail .productImgListContainer::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
  background-color: rgba(0,0,0,0.1);
  border-radius: 6px;
}
.ProductDetail .productImgListContainer::-webkit-scrollbar {
	width: 6px;
  background-color: rgba(0,0,0,0.1);
}
.ProductDetail .productImgListContainer::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.4);
  border-radius: 6px;
}
.ProductDetail .productImgListContainer > div{
  margin-right: 8px;
  width: calc(100% - 8px);
  margin-top: 5px;
  margin-bottom: 5px;
  opacity: 0.5;
  cursor: pointer;
}
.ProductDetail .productImgListContainer > .actived{
  opacity: 1;
}
.ProductDetail .productImgListContainer > div:hover{
  opacity: 1;
}
.ProductDetail .productImgListContainer:hover > div{
  margin-right: 2px;
  width: calc(100% - 2px);
}
.ProductDetail .productImgListContainer > div:first-child{
  margin-top: 0px !important;
}
.ProductDetail .productImgListContainer > div:last-child{
  margin-bottom: 0px !important;
}
.ProductDetail .productImgListContainer {
  width:100%; 
  height:100%;
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:8;
  overflow: hidden;
}
.ProductDetail .productImgPreviewContainer {
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.ProductDetail .productImgPreview {
  width: 50%;
  padding-top: 50%;
  position: relative;
}
.ProductDetail .productImgPreview > div{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
@media (max-width: 1145px) {
  .ProductDetail .productImgList {
    width: 20%;
    padding-top: 80%;
    position: relative;
  }
  .ProductDetail .productImgPreview {
    width: 80%;
    padding-top: 80%;
    position: relative;
  }
  .ProductDetail .productPanel {
    width: 100%;
    display: block;
  }
}
</style>
