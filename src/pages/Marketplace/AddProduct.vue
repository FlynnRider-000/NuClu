<template>
  <div class="content productAdd">
    <div class="container">
      <MarketPlaceHeader/>
      <div class="row activateSellerAccount" :style="{backgroundImage:'url(' + require('../../assets/image/marketplace/account_back.png')}">
        <div class="asHeading"> NEWCLUE WELCOMES YOU AS A SELLER</div>
      </div>
      <div class="row addProductPanel">
        <div class="col-md-4">
          <div class="md-headline" style="padding:10px 0px;"> Item for Sale </div>
          <div class="md-subheading" style="padding:5px 0px;"> NuClu Marketplace </div>
        </div>
        <div class="col-md-8"></div>
        <div class="col-md-4">
          <vue-upload-multiple-image
            @upload-success="uploadImageSuccess"
            @before-remove="beforeRemove"
            @edit-image="editImage"
            :data-images="images"
            dragText="Drag images(multiple)"
            browseText="(or)Select"
            primaryText="Default"
            markIsPrimaryText="Set as default"
            popupText="This image will be displayed as default"
            droptext="Drop your files here..."
            idUpload="myIdUpload"
            editUpload="myIdEdit"
            >
          </vue-upload-multiple-image>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6">
              <md-field>
                <label> Product Title/Name </label>
                <md-input required></md-input>
                <span class="md-error"> This field is required</span>
              </md-field>
            </div>
            <div class="col-md-2">
              <md-field>
                <label> Price </label>
                <md-input required></md-input>
                <span class="md-error"> This field is required</span>
              </md-field>
            </div>
            <div class="col-md-4">
              <md-field>
                <label for="add-product-category"> Category </label>
                <md-select name="add-product-category" id="add-product-category" required>
                  <md-option value="fight-club">Fight Club</md-option>
                  <md-option value="godfather">Godfather</md-option>
                  <md-option value="godfather-ii">Godfather II</md-option>
                  <md-option value="godfather-iii">Godfather III</md-option>
                  <md-option value="godfellas">Godfellas</md-option>
                  <md-option value="pulp-fiction">Pulp Fiction</md-option>
                  <md-option value="scarface">Scarface</md-option>
                </md-select>
                <span class="md-error"> This field is required</span>
              </md-field>
            </div>
            <div class="col-md-12">
              <md-field class="productDescription">
                <label> Description </label>
                <md-textarea required></md-textarea>
                <span class="md-error"> This field is required</span>
              </md-field>
            </div>
            <div class="col-md-7">
              <md-field>
                <label> Location </label>
                <md-input required></md-input>
                <span class="md-error"> This field is required</span>
              </md-field>
            </div>
            <div class="col-md-5">
              <md-field>
                <label for="add-product-availability"> Availability </label>
                <md-select name="add-product-availability" id="add-product-availability" required>
                  <md-option value="fight-club">Fight Club</md-option>
                  <md-option value="godfather">Godfather</md-option>
                  <md-option value="godfather-ii">Godfather II</md-option>
                  <md-option value="godfather-iii">Godfather III</md-option>
                  <md-option value="godfellas">Godfellas</md-option>
                  <md-option value="pulp-fiction">Pulp Fiction</md-option>
                  <md-option value="scarface">Scarface</md-option>
                </md-select>
                <span class="md-error"> This field is required</span>
              </md-field>
            </div>
          </div>
        </div>
        <div class="col-md-12" style="margin: 10px;">
          <span class="md-title" style="padding:10px 0px;"> Product Details </span>
          <span class="md-subheading" style="padding:5px 0px;"> (You may skip this) </span>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <md-field class="productDetails">
            <label> Product Details </label>
            <md-textarea></md-textarea>
          </md-field>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-12" style="display:flex; justify-content:center;">
          <md-button class="btn-fill btn-warning" @click="$router.go(-1)">
            <md-icon style="color:white;">publish</md-icon>
            Publish
          </md-button>
        </div>
      </div>
    </div>
    <MarketPlaceFooter/>
  </div>
</template>
<script>
import MarketPlaceHeader from './MarketPlaceHeader.vue'
import MarketPlaceFooter from './MarketPlaceFooter.vue'
import ProductItem from '../../components/ProductItem/ProductItem.vue'
import AddProduct from '../../components/ProductItem/AddProductItem.vue'
import VueUploadMultipleImage from 'vue-upload-multiple-image'

export default {
  components: {
    MarketPlaceHeader,
    MarketPlaceFooter,
    ProductItem,
    AddProduct,
    VueUploadMultipleImage
  },
  data (){
    return {
      images: []
    }
  },
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log('data', formData, index, fileList)
      // Upload image api
      // axios.post('http://your-url-upload', formData).then(response => {
      //   console.log(response)
      // })
    },
    beforeRemove (index, done, fileList) {
      console.log('index', index, fileList)
      var r = confirm("remove image")
      if (r == true) {
        done()
      } else {
      }
    },
    editImage (formData, index, fileList) {
      console.log('edit data', formData, index, fileList)
    }
  }
}
</script>
<style>
.productAdd {
  background-color: #e5e5e5;
}
.productAdd .image-container {
  width: 100% !important;
  height: 300px !important;
}
.productAdd .preview-image {
  height: calc(100% - 40px);
}
.productAdd .preview-image .show-image{
  width: 90%;
}
.productAdd .preview-image .show-image img{
  max-width: 100% !important;
  max-block-size: 100% !important;
}
.productAdd .addProductPanel {
  background-color: white;
  margin-bottom: 80px;
  padding: 15px 0px;
}
.productAdd .productList {
  display: flex;
  flex-direction: row;
}
.productAdd .productDescription .md-textarea{
  height: 200px;
}
.productAdd .productDetails .md-textarea{
  height: 300px;
}
.productAdd .accInfoItemHeading {
  padding: 10px;
  text-align: center;
  color: white;
  font-size: 21px;
  background-color: #3EB9E7;
}
.productAdd .accountInfo {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
}
.productAdd .accInfoItemList {
  font-size: 15px;
  color: #FF7A00;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.productAdd .personInfo {
  font-size: 15px;
  font-weight: 500;
  margin-top:20px;
  margin-bottom:20px;
}
.productAdd .personInfo > div > div{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 5px;
}
.productAdd .personInfo > div > div{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 5px;
}
.productAdd .paymentMethod {
  font-size: 15px;
  font-weight: 500;
  margin-top:20px;
  margin-bottom:20px;
}
.productAdd .asHeading {
  font-size: 44px !important;
  line-height: 40px;
  font-weight: bold;
  width: fit-content;
  color: white;
}
.productAdd .activateSellerAccount {
  height:200px;
  background-size:cover;
  background-position:center;
  display:flex;
  padding-left:8%;
  flex-direction:column;
  justify-content:space-around;
}
@media (min-width: 768px) {
  .productAdd .personInfo > div > div > div{
    flex: 1 0 50%;
    justify-content: flex-start;
  }
}
</style>
