<template>
  <div class="productHeader">
    <div style="width: 30%;min-width: 250px;display:flex">
      <input type="text"  style="border:none; width:calc(100% - 30px); padding: 5px;">
      <div class="search-btn" style="cursor: pointer">
        <img :src="require('../../assets/image/marketplace/search-icon.png')" width=30 height=30>
      </div>
    </div>
    <div class="product-header-item item-UPPER">
      <md-button @click.native="$router.push('/nuclu/marketplace/account')">
          Sidney ondap's account
      </md-button>
    </div>
    <div class="product-header-item item-UPPER">
      <md-button @click.native="$router.push('/nuclu/marketplace/customerservice')">
          customer services
      </md-button>
    </div>
    <div class="product-header-item">
      <md-button @click.native="$router.push('/nuclu/marketplace/cart')">
          <i class="fa fa-th"/>
          Categories
      </md-button>
    </div>
    <div class="product-header-item">
      <i class="fa fa-caret-down"/>
      Filter
    </div>
  </div>
</template>
<script>

</script>
<style>
.productHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.productHeader > div{
    padding: 5px;
}
.product-header-item {
  color: #808080;
}
.item-UPPER {
  text-transform: uppercase;
}
</style>
