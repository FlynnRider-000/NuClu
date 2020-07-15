<template>
  <div class="friendItem" style="min-width:280px; height:140px; background-color:white; margin:20px;">
    <div style="width:100%; height:100%; display:flex;flex-direction:row; position:relative;">
      <div class="backPanel" :style="{backgroundImage:'url(' + userInfo.backUrl + ')'}"></div>
      <div style="width:68%; height:100%; background-color:white; display:flex; flex-direction:column; justify-content: center">
        <div class="namePanel">
          {{userInfo.name}}
        </div>
        <div class="friendCntPanel">
          <img src="../../assets/image/addFriend/fa_solid_user_friends.png" width=25 height=25/>
          <span>
            {{userInfo.friendCnt}} Friends
          </span>
        </div>
        <div class="badgeCntPanel">
          <img src="../../assets/image/addFriend/emojione_star.png" width=25 height=25/>
          <span>
            {{userInfo.badgeCnt}} Earned Badges
          </span>
        </div>
      </div>
      <div class="profilePanel" :style="{backgroundImage:'url(' + userInfo.profileUrl + ')'}"></div>
      <div class="btnArea" :class="{ activedBtn:btnClickedStatus}" @click="onBtnClicked" v-if="type !== 4">
        <span>{{displayBtnName}}</span>
      </div>
      <div class="btnAreaAccept" :class="{ activedBtn:btnClickedStatus}" @click="onBtnClicked" v-if="type === 4">
        <span>Accept</span>
      </div>
      <div class="btnAreaDecline" :class="{ activedBtn:btnClickedStatus}" @click="onBtnClicked" v-if="type === 4">
        <span>Decline</span>
      </div>
    </div>
  </div>
</template>
<script>
  
export default {
  name: 'friend-item',
  props: ["userInfo","type","onFriendItemClick"],
  data() {
    return {
      btnClickedStatus: false
    }
  },
  methods: {
    onBtnClicked: function(){
      if(this.type !== 3)
        this.btnClickedStatus = !this.btnClickedStatus;
      if(this.type === 3){
        this.onFriendItemClick(this.userInfo.name);
      }
    }
  },
  computed: {
    displayBtnName() {
      if(!this.btnClickedStatus)
        return this.type === 1 ? "Add friend": this.type === 2 ? "Follow...": this.type === 3 ? "View Profile" : "";
      else
        return "Pending..."
    }
  }
}

</script>
<style>
  .friendItem .namePanel{
    font-size: 20px;
    padding-bottom: 15px;
    padding-left:45px;
  }
  .friendItem .friendCntPanel{
    font-size: 13px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left:45px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .friendItem .badgeCntPanel{
    font-size: 14px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left:45px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .friendItem .activedBtn {
    color: white !important;
    background-color: #59FF3E !important;
  }
  .friendItem .btnArea {
    position: absolute;
    width: 115px;
    left: 20px;
    top: 120px;
    height: fit-content;
    font-size: 17px;
    color: #166D7B;
    background-color: white;
    border-radius: 15px;
    padding: 5px;
    box-shadow: 1px 1px 5px -1px rgba(0,0,0,0.44);
    cursor: pointer;
    text-align: center;
  }
  .friendItem .btnArea:hover,
  .friendItem .btnAreaAccept:hover,
  .friendItem .btnAreaDecline:hover {
    background-color: #F0F0F0;
  }
  .friendItem .btnAreaAccept,
  .friendItem .btnAreaDecline {
    position: absolute;
    width: 115px;
    left: 20px;
    top: 120px;
    height: fit-content;
    font-size: 17px;
    color: #166D7B;
    background-color: white;
    border-radius: 15px;
    padding: 5px;
    box-shadow: 1px 1px 5px -1px rgba(0,0,0,0.44);
    cursor: pointer;
    text-align: center;
  }
  .friendItem .btnAreaDecline {
    left: 145px !important;
  }
  .friendItem .backPanel{
    width:32%;
    height:100%;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
  }
  .friendItem .profilePanel {
    width: 70px;
    height: 70px;
    border: 5px solid #4BD3FF;
    border-radius: 50%;
    left: 55px;
    top: 10px;
    position: absolute;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
  }
</style>
