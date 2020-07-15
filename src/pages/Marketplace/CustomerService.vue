<template>
  <div class="content CustomerService">
    <div class="container">
      <MarketPlaceHeader/>
      <div class="serviceSearchPanel" style="display:flex; justify-content:center; align-items:center;" :style="{backgroundImage:'url(' + require('../../assets/image/marketplace/customerService.png') + ')'}">
        <div class="col-md-7 col-sm-12" style="min-width: 250px;display:flex; flex-directions:row;">
          <input type="text"  style="border:none; width:calc(100% - 40px); padding: 10px;">
          <div class="search-btn" style="cursor: pointer">
            <img :src="require('../../assets/image/viewprofile/search-icon.png')" width=40 height=40>
          </div>
        </div>
      </div>

      <div class="row" style="margin-top:20px;margin-bottom:50px;">
        <div class="col-md-9 col-sm-8">
          <div>
            <div class="headingItem">
              Frequently asked questions:
            </div>
            <div>
              <ul>
                <li> How do I shop at Newclue? </li>
                <li> How can I become a seller? </li>
                <li> What are the requirements to become a seller in Newclue? </li>
                <li> How to pay bills in Newclue? </li>
              </ul>
            </div>
          </div>
          <div>
            <div class="headingItem">
              Newclue FQAs
            </div>
            <div class="faqArea">
              <div> My Account </div>
              <div> Payments </div>
              <div> Returns </div>
              <div> Refunds </div>
              <div> Community Policies </div>
              <div> Data Privacy </div>
              <div> Others </div>
              <div class="blankArea"> </div>
              <div class="blankArea"> </div>
              <div class="blankArea"> </div>
              <div class="blankArea"> </div>
              <div class="blankArea"> </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-4">
          <div style="width:100%;height:100%; background-size:100%; background-repeat:no-repeat;" :style="{backgroundImage:'url(' + require('../../assets/image/marketplace/contactus_banner.png') + ')'}"></div>
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
.CustomerService {
  background-color: #e5e5e5;
}
.CustomerService .serviceSearchPanel {
  height: 200px;
  background-size: cover;
  background-position: center;
}
.CustomerService .blankArea {
  height: 0px !important;
  border:none !important;
}
.CustomerService .headingItem {
  font-size: 22px;
  padding-top:10px;
  padding-bottom:10px;
}
.CustomerService .faqArea {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.CustomerService .faqArea > div{
  width: 140px;
  height: 140px;
  margin: 5px;
  border: 1px solid #15A1F6;
  background-color: rgba(255,255,255,0.5);
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
