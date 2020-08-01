<template>
  <div class="content articleAdd">
    <div class="container md-elevation-24">
      <div class="row addProductPanel">
        <div class="col-md-12">
          <div class="md-headline" style="padding:10px 0px; display:flex; flex-direction:row; align-items:center;"> 
            <md-icon class="md-size-2x" style="margin:0px;">
              note_add
            </md-icon>
            New Article 
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-7">
              <md-field>
                <label> Title </label>
                <md-input required></md-input>
                <span class="md-error"> This field is required</span>
              </md-field>
            </div>
            <div class="col-md-5">
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
                <label> Summary </label>
                <md-textarea required></md-textarea>
                <span class="md-error"> This field is required</span>
              </md-field>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <vue-upload-multiple-image
            @upload-success="uploadImageSuccess"
            @before-remove="beforeRemove"
            @edit-image="editImage"
            :data-images="images"
            dragText="Drag image"
            browseText="(or)Select"
            primaryText="Default"
            markIsPrimaryText="Set as default"
            popupText="This image will be displayed as default"
            droptext="Drop your files here..."
            idUpload="myIdUpload"
            editUpload="myIdEdit"
            :multiple="false"
            >
          </vue-upload-multiple-image>
        </div>
        <div class="col-md-8">
          <md-field class="productDetails">
            <label> Article Details </label>
            <md-textarea></md-textarea>
          </md-field>
        </div>
        <div class="col-md-4">
          <md-datepicker/>
          <md-field>
            <label for="article-status"> Status </label>
            <md-select name="article-status" id="article-status" required>
              <md-option value="draft">Draft</md-option>
              <md-option value="publish">Publish</md-option>
            </md-select>
            <span class="md-error"> This field is required</span>
          </md-field>
        </div>
        <div class="col-md-12" style="display:flex; justify-content:center;">
          <md-button class="btn-fill btn-info" @click="$router.go(-1)">
            Create
          </md-button>
          <md-button class="btn-fill btn-warning" @click="$router.go(-1)">
            Cancel
          </md-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueUploadMultipleImage from 'vue-upload-multiple-image'

export default {
  components: {
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
.articleAdd {
  background-color: #e5e5e5;
}
.articleAdd .image-container {
  width: 100% !important;
  height: 300px !important;
}
.articleAdd .preview-image {
  height: calc(100% - 40px);
}
.articleAdd .preview-image .show-image{
  width: 90%;
}
.articleAdd .preview-image .show-image img{
  max-width: 100% !important;
  max-block-size: 100% !important;
}
.articleAdd .addProductPanel {
  background-color: white;
  margin-bottom: 80px;
  padding: 15px 0px;
}
.articleAdd .productList {
  display: flex;
  flex-direction: row;
}
.articleAdd .productDescription .md-textarea{
  height: 150px;
}
.articleAdd .productDetails .md-textarea{
  height: 300px;
}
.articleAdd .accInfoItemHeading {
  padding: 10px;
  text-align: center;
  color: white;
  font-size: 21px;
  background-color: #3EB9E7;
}
.articleAdd .accountInfo {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
}
.articleAdd .accInfoItemList {
  font-size: 15px;
  color: #FF7A00;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.articleAdd .personInfo {
  font-size: 15px;
  font-weight: 500;
  margin-top:20px;
  margin-bottom:20px;
}
.articleAdd .personInfo > div > div{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 5px;
}
.articleAdd .personInfo > div > div{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 5px;
}
.articleAdd .paymentMethod {
  font-size: 15px;
  font-weight: 500;
  margin-top:20px;
  margin-bottom:20px;
}
.articleAdd .asHeading {
  font-size: 44px !important;
  line-height: 40px;
  font-weight: bold;
  width: fit-content;
  color: white;
}
.articleAdd .activateSellerAccount {
  height:200px;
  background-size:cover;
  background-position:center;
  display:flex;
  padding-left:8%;
  flex-direction:column;
  justify-content:space-around;
}
@media (min-width: 768px) {
  .articleAdd .personInfo > div > div > div{
    flex: 1 0 50%;
    justify-content: flex-start;
  }
}
</style>
