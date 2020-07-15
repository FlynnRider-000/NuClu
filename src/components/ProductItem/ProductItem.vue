<template>
  <div class="productItem">
    <div>
      <div class="productImg" :style="{backgroundImage:'url(' + productInfo.productImgUrl + ')'}" @click="onProductView">
      </div>
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
    </div>
  </div>
</template>
<script>
  
export default {
  name: 'product-item',
  props: ["productInfo"],
  computed: {
    rateString () {
      return this.productInfo.star + ' star' + (this.productInfo.star > 1 ? 's' : '');
    }
  },
  methods: {
    onProductView () {
      this.$router.push({name:'product-detail-view'})
    }
  }
}

</script>
<style>
.productItem {
  width:175px;
  height:250px;
  margin:10px;
}
.productItem .productImg {
  background-size: cover;
  background-position: center;
  width: 175px;
  height: 175px;
  cursor: pointer;
}
.productItem > div {
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
}
.productItem .productInfo{
  background-color: white;
  padding: 10px;
  height: 75px;
  max-height: 75px;
}
.productItem .product-name {
  font-size: 19px;
}
.productItem .product-price {
  color: #3EB9E7;
  font-size: 19px;
}
.productItem .ratingStars {
  float: left;
}
.productItem .rates {
  font-size: 12px;
  float: right;
}
@media (max-width: 425px) {
    .productItem {
      width:150px;
      height:250px;
      margin:7px;
    }
    .productItem .productImg {
      background-size: cover;
      background-position: center;
      width: 150px;
      height: 150px;
    }
    .productItem > div {
      width:100%;
      height:100%;
      display:flex;
      flex-direction:column;
    }
    .productItem .productInfo{
      background-color: white;
      padding: 10px;
      height: 100px;
      max-height: 1005px;
    }
}
</style>
