<template>
  <div class="content timeline">
    <div class="container-fluid">
      <ProfileHeader :activeLink="'timeline'">
      </ProfileHeader>
      
      <div class="profileContent" ref="profileContent">
        <div class="container">
          <div class="gallery" id="gallery">
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
    FeedItem
  },
  mounted() {
    var gallery = document.querySelector('#gallery');
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
.timeline,
.timeline .container-fluid {
  padding: 0px !important;
  background-color: #dedede;
}
.timeline .container {
  background-color: #ededed;
}

.timeline .gallery {
  display: grid;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  grid-auto-rows: 8px;
}
.timeline .gallery img {
  max-width: 100%;
}
.timeline .gallery .content {
  padding: 4px;
  word-wrap: break-word;
}
@media (max-width: 600px) {
  .timeline .gallery {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  }
}
@media (max-width: 400px) {
  .timeline .gallery {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  }
}
</style>
