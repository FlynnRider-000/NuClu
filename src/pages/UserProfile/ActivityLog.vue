<template>
  <div class="content timeline">
    <div class="container-fluid">
      <ProfileHeader :activeLink="'activitylog'">
      </ProfileHeader>
      
      <div class="profileContent" ref="profileContent">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <md-card>
                <md-card-header>
                  <span class="md-title">
                    Activity Log
                  </span>
                </md-card-header>
                <md-card-content>
                  <div class="logItem" v-for="index in 6" :key="index">
                    <div class="logArea">
                      <div class="logIcon"></div>
                      <div class="logInfo"> You commented on Questionsboard's post </div>
                    </div>
                    <div class="logTime"> 0 m </div>
                  </div>
                </md-card-content>
              </md-card>
            </div>
            <div class="col-md-7" >
              <FeedItem> sadfdsaffdsa </FeedItem>
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
.timeline .gallery .gallery-item {
  cursor: pointer;
}

.timeline .logInfo {
  font-size: 15px;
  word-break: break-all;
  padding: 0px 10px;
}
.timeline .logTime {
  font-size: 13px;
}
.timeline .logItem {
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding:8px 0px;
}
.timeline .logArea{
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
}
.timeline .logIcon {
  background-color:lightgrey;
  border-radius:50%;
  position:relative;
  min-width:40px;
  min-height:40px;
  margin: 0px 10px 0px 0px;
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
