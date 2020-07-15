<template>
  <div class="content friends">
    <div class="container-fluid">
      <ProfileHeader :activeLink="'friends'" :bgColor="'rgba(0,0,0,0)'">
      </ProfileHeader>
      <div class="profileContent">
        <div class="name">
          Sidney Ondap
        </div>
        <div class="container">
            <div class="friendPanel">
                <div class="name1">
                  Friends
                  <input type="text" style="font-size: 18px;padding:6px;border:none;" placeholder="Search">
                </div>
                <div class="friendContainer">
                    <FriendItem v-for="(item, index) in users" :key="index" :userInfo="item" :type="3" :onFriendItemClick="onFriendItemClick" style="margin-top:30px;margin-bottom:30px;"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader.vue'
import FriendItem from '../../components/FriendLinkItem/FriendItem.vue'

export default {
  components: {
    ProfileHeader,
    FriendItem
  },
  methods: {
    onFriendItemClick (id) {
      alert(id);
    }
  },
  data () {
      return {
        users: [{
            name: 'Rey Ondap',
            friendCnt: 102,
            badgeCnt: 50,
            backUrl: '/assets/image/addFriend/avatar1.png',
            profileUrl: '/assets/image/addFriend/avatar.png'
        },{
            name: 'Rey Ondap1',
            friendCnt: 103,
            badgeCnt: 51,
            backUrl: '/assets/image/addFriend/avatar1.png',
            profileUrl: '/assets/image/addFriend/avatar.png'
        },{
            name: 'Rey Ondap2',
            friendCnt: 104,
            badgeCnt: 52,
            backUrl: '/assets/image/addFriend/avatar1.png',
            profileUrl: '/assets/image/addFriend/avatar.png'
        },{
            name: 'Rey Ondap3',
            friendCnt: 105,
            badgeCnt: 53,
            backUrl: '/assets/image/addFriend/avatar1.png',
            profileUrl: '/assets/image/addFriend/avatar.png'
        },{
            name: 'Rey Ondap4',
            friendCnt: 106,
            badgeCnt: 54,
            backUrl: '/assets/image/addFriend/avatar1.png',
            profileUrl: '/assets/image/addFriend/avatar.png'
        },{
            name: 'Rey Ondap5',
            friendCnt: 107,
            badgeCnt: 55,
            backUrl: '/assets/image/addFriend/avatar1.png',
            profileUrl: '/assets/image/addFriend/avatar.png'
        },{
            name: 'Rey Ondap6',
            friendCnt: 108,
            badgeCnt: 56,
            backUrl: '/assets/image/addFriend/avatar1.png',
            profileUrl: '/assets/image/addFriend/avatar.png'
        },{
            name: 'Rey Ondap7',
            friendCnt: 102,
            badgeCnt: 50,
            backUrl: '/assets/image/addFriend/avatar1.png',
            profileUrl: '/assets/image/addFriend/avatar.png'
        },{
            name: 'Rey Ondap8',
            friendCnt: 102,
            badgeCnt: 50,
            backUrl: '/assets/image/addFriend/avatar1.png',
            profileUrl: '/assets/image/addFriend/avatar.png'
        }]
      }
  },
}
</script>
<style>
.friends,
.friends .container-fluid {
  padding: 0px !important;
  background-color: #e5e5e5;
}
.friends .name {
  width: auto;
  font-weight: bold;
  font-size: 29px;
  margin-left: auto;
  margin-right: auto;
  font-family: "Segoe UI",Arial,sans-serif;
  padding-top: 50px;
  padding-bottom: 20px;
  text-align: center;
}
.friends .name1 {
  width: auto;
  font-weight: 500;
  font-size: 27px;
  margin-left: auto;
  margin-right: auto;
  font-family: "Segoe UI",Arial,sans-serif;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
}
.friends .profileContent .container {
    margin-top: -260px;
    padding-top: 260px;
    width: 100%;
    background: url('../../assets/image/viewprofile/back.png');
    background-size: cover;
    background-position: center;
}
.friends .friendContainer{
    overflow-y: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.friends .friendContainer::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
@media (max-width: 460px) {
  .friends .profileContent .container {
      margin-top: -360px;
      padding-top: 360px;
      width: 100%;
      background: url('../../assets/image/viewprofile/back.png');
      background-size: cover;
      background-position: center;
  }
}
</style>
