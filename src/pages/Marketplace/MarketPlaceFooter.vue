<template>
  <div class="productFooter" style="background-color:white; padding-top:15px; padding-bottom:15px; margin-right:-15px; margin-left:-15px;">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div style="display:flex;">
            <div class="footerItem">
              <div> Customer service </div>
              <div> Help Center </div>
              <div> How to Buy </div>
              <div> Sipping & Delivery </div>
              <div> International Product Policy </div>
              <div> How to Return </div>
              <div> Question? </div>
              <div> Contact Us </div>
            </div>
            <div class="footerItem">
              <div> About NewClue </div>
              <div> Affiliate Program </div>
              <div> Newclue Influencer Program </div>
              <div> Careers </div>
              <div> Terms & Conditions </div>
              <div> Privacy Policy </div>
              <div> Press & media </div>
              <div> Campaign Terms & Conditions </div>
              <div> Intellectual Property Protection </div>
            </div>
          </div>
        </div>
        <div class="col-md-6" style="display:flex; justify-content:center; align-items:center; padding: 15px;">
          <img :src="require('../../assets/image/nc_logo_black.png')" style="max-width:200px;" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style>
.footerItem {
  flex: 1 0 50%;
}
.footerItem > div:first-child{
  color:#157092;
  padding: 4px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 18px;  
  font-weight: bold;
}
.footerItem > div{
  color:#157092;
  padding: 4px;
}
</style>
