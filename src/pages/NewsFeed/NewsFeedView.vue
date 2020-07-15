<template>
  <div class="content newsFeedView">
    <div class="container-fluid">
      
      <div class="container" style="background-color:white; padding: 10px;">
        <div class="row">
          <div class="col-xl-7">
            <div class="newsfeedContent">
              <md-button @click="goBack">
                <div style="display:flex; flex-direction:row; align-items:center;">
                  <md-icon> chevron_left</md-icon>
                  Go back...
                </div>
              </md-button>
              <md-card>
                <md-card-header>
                  <div class="md-title">Contents</div>
                </md-card-header>
                <md-card-content>
                  <img src="/assets/image/product/product5.png"/>
                  sadfdsaffdsa 
                </md-card-content>
              </md-card>
            </div>
          </div>
          <div class="col-xl-5">
            <div class="newsfeedPanel">
              <div class="userProfile">
                <div class="profileImage" style="background-image:url('../../assets/image/signin/login_right.jpg');">
                </div>
                <div class="labelPanel">
                  <span class="namePanel">
                    Sidney Ondap
                  </span>
                  <span class="viewProfileLink">
                    View Profile
                  </span>
                </div>
              </div>
            </div>
            <div class="commentArea">
              <NewsFeedComment/>
              <NewsFeedComment/>
              <NewsFeedComment/>
              <NewsFeedComment/>
              <NewsFeedComment/>
              <NewsFeedComment/>
              <NewsFeedComment/>
            </div>
            <div>
              <NewsFeedFooter/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mdbCard, mdbCardBody, mdbCardTitle, mdbBtn, mdbIcon } from 'mdbvue';
import NewsFeedComment from '../../components/FeedItem/Comments.vue';
import NewsFeedFooter from '../../components/FeedItem/NewFeedFooter.vue';
import FeedItem from '../../components/FeedItem/FeedItem.vue';

export default {
  components: {
    NewsFeedComment,
    NewsFeedFooter,
    FeedItem,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbBtn,
    mdbIcon
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>
<style>
.newsFeedView .userProfile{
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding-top: 15px;
  padding-bottom: 15px;
}
.newsFeedView .userProfile .profileImage{ 
  border: 5px solid #00A4D6;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  margin-left: 10px;
  min-width: 65px;
}
.newsFeedView .labelPanel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
}
.newsfeedContent {
  padding: 10px 30px 30px 30px;
}
.newsFeedView .viewProfileLink{
  padding: 5px;
  font-size: 15px;
}
.newsFeedView .namePanel {
  font-size: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
}
@media (max-width: 576px) {
  .newsfeedContent {
    padding: 10px;
  }
}
</style>
