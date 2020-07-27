<template>
  <div class="content MarketPlaceCart">
    <div class="container">
      <MarketPlaceHeader/>
      <div class="row" style="margin-top:20px; margin-bottom:20px;">
        <div class="col-md-7" style="text-align:center; margin-bottom: 30px;">
          <div class="cartItemHeader">
            <div style="width:50%"> ITEMS </div>
            <div style="width:30%"> PRICE </div>
            <div style="width:20%"> QUANTITY </div>
          </div>
          <div class="cartItem">
            <div style="width:50%"> 
              <div class="row">
                <div class="col-sm-5">
                  <img :src="require('../../assets/image/marketplace/ns1.png')" />
                </div>
                <div class="col-sm-7" style="text-align:left;">
                  <div style="font-size:18px; font-weight:bold; margin-top:8px; margin-bottom:8px;"> Product 1 </div>
                  <div style="font-size:16px; margin-top:8px; margin-bottom:8px;"> Delivery Option </div>
                  <div style="font-size:16px;"> Standard Delivery </div>
                  <div style="font-size:14px; color:grey;"> 4 - 5 day(s) </div>
                </div>
              </div>
            </div>
            <div style="width:30%; color:#0DB8EC"> $ 250.00 </div>
            <div style="width:20%"> 1 </div>
	  </div>

          <div class="cartItem">
            <div style="width:50%"> 
              <div class="row">
                <div class="col-sm-5">
                  <img :src="require('../../assets/image/marketplace/ns1.png')" />
                </div>
                <div class="col-sm-7" style="text-align:left;">
                  <div style="font-size:18px; font-weight:bold; margin-top:8px; margin-bottom:8px;"> Product 1 </div>
                  <div style="font-size:16px; margin-top:8px; margin-bottom:8px;"> Delivery Option </div>
                  <div style="font-size:16px;"> Standard Delivery </div>
                  <div style="font-size:14px; color:grey;"> 4 - 5 day(s) </div>
                </div>
              </div>
            </div>
            <div style="width:30%; color:#0DB8EC"> $ 250.00 </div>
            <div style="width:20%"> 1 </div>
          </div>
        </div>
        <div class="col-md-5">
          <div style="padding:15px; background-color:white;">
            <div class="statisItem">
              <div class="statisItemHeading">
                Shipping and billing
              </div>
              <div class="statisItemList">
                <div style="display:flex;flex-direction:column">
                  <div style="font-size:18px;font-weight:bold;">Sidney Lorenz Ondap</div>
                  <div>Newclue User Profile Address</div>
                </div>
                <div>
                  Bill to the same address
                </div>
                <div>
                  094858998998
                </div>
                <div>
                  ondap111212@gmail.com
                </div>
              </div>
            </div>
            <div class="statisItem">
              <div class="statisItemHeading">
                Purchase Summary
              </div>
              <div class="statisItemList">
                <div>
                  <div> Subtotal(1 Item/s)</div>
                  <div> <b> $ 200.00  </b> </div>
                </div>
                <div>
                  <div> Shipping fee</div>
                  <div> <b> $ 500.00 </b></div>
                </div>
              </div>
            </div>
            <div class="statisItem-horizon">
              <input type="text" style="width:68%; padding: 5px 15px;" placeholder="Voucher Code"/>
              <div style="width:28%; background-color:#FFD671; font-size:14px; padding: 5px 12px; text-align:center;"> Apply </div>
            </div>
            <div class="statisItem-horizon">
              <div style="font-size:16px;"> <b> Total: </b> </div>
              <div style="color:#3EB9E7;font-size:16px;"> $ 500.00 </div>
            </div>
            <div class="placeBtn">
              Place Order
            </div>
          </div>
        </div>
      </div>
    </div>

    <MarketPlaceFooter/>
  </div>
</template>
<script>
import MarketPlaceHeader from './MarketPlaceHeader.vue'
import MarketPlaceFooter from './MarketPlaceFooter.vue'

export default {
  components: {
    MarketPlaceHeader,
    MarketPlaceFooter
  }
}
</script>
<style>
.MarketPlaceCart {
  background-color: #e5e5e5;
}
.MarketPlaceCart .cartItemHeader {
  padding:15px;
  display:flex;
  flex-direction:row;
  margin-bottom:15px;
  background-color:white;
}
.MarketPlaceCart .cartItem {
  padding:10px;
  display:flex;
  flex-direction:row;
  margin-top:4px;
  margin-bottom:4px;
  background-color:white;
}
.MarketPlaceCart .cartItem > div {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}
.MarketPlaceCart .placeBtn {
  font-size: 26px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3EB9E7;
  padding: 15px;
  cursor: pointer;
}
.MarketPlaceCart .statisItem-horizon {
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  padding-top: 10px;
  padding-bottom: 10px;
}
.MarketPlaceCart .statisItem {
  padding-top: 10px;
  padding-bottom: 10px;
}
.MarketPlaceCart .statisItemHeading {
  font-size: 24px;
  padding: 12px;
}
.MarketPlaceCart .statisItemList {
  padding-left:10%;
}
.MarketPlaceCart .statisItemList > div{
  padding-top: 7px;
  padding-bottom: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>

