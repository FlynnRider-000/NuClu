<template>
  <div class="content newsfeed">
    <div class="container-fluid">
      
      <div class="container">
        <md-button @click="onPostNewsFeed" class="btn-info btn-fill">
          <div style="display:flex; flex-direction:row; align-items:center;">
            <md-icon style="color:white;">post_add</md-icon>
            New Post
          </div>
        </md-button>
        <div class="gallery" id="gallery_newsfeed">
          <div class="gallery-item">
            <div class="content">
              <FeedItem> sadfdsaffdsa </FeedItem>
            </div>
          </div>

          <div class="gallery-item">
            <div class="content">
              <FeedItem> sadfdsaffdsa </FeedItem>
            </div>
          </div>

          <div class="gallery-item">
            <div class="content">
              <FeedItem> sadfdsaffdsa </FeedItem>
            </div>
          </div>
          
          <div class="gallery-item">
            <div class="content">
              <FeedItem> sadfdsaffdsa </FeedItem>
            </div>
          </div>
          
          <div class="gallery-item">
            <div class="content">
              <FeedItem> sadfdsaffdsa  <img src="/assets/image/product/product1.png"/> </FeedItem>
            </div>
          </div>
          
          <div class="gallery-item">
            <div class="content">
              <FeedItem> sadfdsaffdsa </FeedItem>
            </div>
          </div>
          
          <div class="gallery-item">
            <div class="content">
              <FeedItem> sadfdsaffdsa </FeedItem>
            </div>
          </div>
          
          <div class="gallery-item">
            <div class="content">
              <FeedItem> sadfdsaffdsa </FeedItem>
            </div>
          </div>
          
          <div class="gallery-item">
            <div class="content">
              <FeedItem> <img src="/assets/image/product/product5.png"/> sadfdsaffdsa </FeedItem>
            </div>
          </div>
          
          <div class="gallery-item">
            <div class="content">
              <FeedItem> sadfdsaffdsa </FeedItem>
            </div>
          </div>
          
          <div class="gallery-item">
            <div class="content">
              <FeedItem> sadfdsaffdsa </FeedItem>
            </div>
          </div>
          
          <div class="gallery-item">
            <div class="content">
              <FeedItem> sadfdsaffdsa </FeedItem>
            </div>
          </div>
          
          <div class="gallery-item">
            <div class="content">
              <FeedItem> <img :src="require('../../assets/image/timeline/subway_like.png')" width=20 height=20 style="margin:5px;"/>sadfdsaffdsasadfdsaffdsasadfdsaffdsasadfdsaffdsasadfdsaffdsasadfdsaffdsa </FeedItem>
            </div>
          </div>
          
        </div>
      </div>
      <div>
          <md-dialog :md-active.sync="newPostDlg" class="md-custom-theme-light dlg-height-420">
            <md-dialog-title>News Feed Post</md-dialog-title>
            <md-dialog-content>
              <quill-editor
                ref="myQuillEditor"
                v-model="newsFeedContent"
                style="height: 250px"
              />
            </md-dialog-content>
            <md-dialog-actions>
              <md-button @click="newPostDlg = false" class="btn-info btn-fill">
                Cancel
              </md-button>
              <md-button @click="onNewsFeedPosted" class="btn-fill btn-primary">
                Post
              </md-button>
            </md-dialog-actions>
          </md-dialog>
        </div>
    </div>
  </div>
</template>
<script>
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader.vue'
import FeedItem from '../../components/FeedItem/FeedItem.vue'

export default {
  components: {
    ProfileHeader,
    FeedItem,
  },
  data() {
    return {
      newPostDlg: false,
      newsFeedContent: '',
    }
  },
  methods: {
    onPostNewsFeed: function() {
      this.newPostDlg = true;
    },
    onNewsFeedPosted: function() {
      this.newPostDlg = false;
    }
  },
  mounted() {
    var gallery = document.querySelector('#gallery_newsfeed');
      var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
      var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
      gallery.querySelectorAll('div.gallery-item > div.content').forEach(function (item1) {
        var item = item1.querySelector("div.gallery-item div.content div.mainContent img");
        if(item !== null){
            if (item.complete) {
                var altura = getVal(gallery, 'grid-auto-rows');
                var gap = getVal(gallery, 'grid-row-gap');
                var gitem = item.parentElement.parentElement.parentElement.parentElement;
                gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            }
            else {
                item.addEventListener('load', function () {
                    var altura = getVal(gallery, 'grid-auto-rows');
                    var gap = getVal(gallery, 'grid-row-gap');
                    var gitem = item.parentElement.parentElement.parentElement.parentElement;
                    gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
                });
            }
        }
        else{
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item1.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
        }
      });
  }
}
</script>
<style>

.editr--toolbar{
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;

}
.newsfeed,
.newsfeed .container-fluid {
  padding: 0px !important;
  padding-top: 10px !important;
  background-color: #ededed;
}

.newsfeed .gallery {
  display: grid;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  grid-auto-rows: 8px;
}
.newsfeed .gallery img {
  max-width: 100%;
}
.newsfeed .gallery .content {
  padding: 4px;
  word-wrap: break-word;
}
.md-custom-theme-light > div {
  background-color: white !important;
}
@media (max-width: 600px) {
  .newsfeed .gallery {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  }
}
@media (max-width: 400px) {
  .newsfeed .gallery {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  }
}
</style>
