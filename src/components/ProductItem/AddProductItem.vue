<template>
  <div class="addProductItem">
    <div @click="$router.push({name: 'MarketPlace_ProductAdd'})">
      <div>
        <md-icon>add_circle</md-icon>
      </div>
      <div>
        Add a product
      </div>
    </div>
  </div>
</template>
<script>
  
export default {
  name: 'product-item',
  computed: {
  },
  methods: {
  }
}

</script>
<style>
.addProductItem {
  width: 175px;
  height: 250px;
  margin: 10px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.addProductItem:hover {
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)
}
.addProductItem > div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
@media (max-width: 425px) {
  .addProductItem {
    width: 150px;
    height: 250px;
    margin: 7px;
  }
  .addProductItem > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
  }
}
</style>
