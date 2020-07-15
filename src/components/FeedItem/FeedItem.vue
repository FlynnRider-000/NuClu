<template>
  <div class="feedItem">
    <div class="Header">
      <div style="display:flex;flex-direction:row; align-items:center;">
        <div class="userProfileImg">
        </div>
        <div class="userName">
          Sidney Ondap
        </div>
      </div>
      <div>
        <img :src="require('../../assets/image/timeline/more.png')" width=20 height=20 style="margin:5px;"/>
      </div>
    </div>
    <div class="mainContent" @click="onNewsFeedView()">
      <slot>
      </slot>
    </div>
    <NewsFeedFooter/>
  </div>
</template>
<script>


import NewsFeedFooter from './NewFeedFooter.vue';

export default {
  name: 'friend-item',
  components: {
    NewsFeedFooter
  },
  props: ["userInfo","type","onFriendItemClick"],
  data() {
    return {
      btnClickedStatus: false,
    }
  },
  methods: {
    onBtnClicked: function(){
      if(this.type !== 3)
        this.btnClickedStatus = !this.btnClickedStatus;
      if(this.type === 3){
        this.onFriendItemClick(this.userInfo.name);
      }
    },
    onNewsFeedView: function() {
      this.$router.push("NewsFeedView");
    }
  }
}

</script>
<style>
  .feedItem {
    background-color: white;
    padding: 15px;
    width: 100%;
  }
  .feedItem .Header{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    justify-content: space-between;
  }
  .feedItem .mainContent{
    cursor: pointer;
  }
  .feedItem > .Header .userProfileImg {
    width: 50px;
    height:50px;
    border: 3px solid #00A4D6;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
  }
  .feedItem > .Header .userName {
    font-size: 18px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .feedItem .comment-btn {
    padding: 3px;
    background-color: #18C1E8;
  }
</style>
