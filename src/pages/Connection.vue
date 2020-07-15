<template>
  <div class="content connection">
    <div class="container">
      <center>
        <div :style="{backgroundImage: 'url(' + require('../assets/image/signin/login_right.jpg') + ')'}" style="background-size:cover; background-position:center;">
          <div class="logo newclue">
              <img :src="require('../assets/image/signin/nc_newclue_banner.png')" />
          </div>
          <div class="pageTitle">
            CONNECTIONS 
          </div>
          <div class="pageInfo">
            Showing how people know and trusts you
          </div>
          <div class="pageInfo lastPageInfo">
            Your Friends, Customer, & Suppliers
          </div>
        </div>
      </center>
      <div class="btn-list">
        <div class="blue-btn" :class="{'active-btn': connectionType === 'Friends'}" @click="onConnectionTypeChange('Friends')">
          Friends
        </div>
        <div class="blue-btn" :class="{'active-btn': connectionType === 'Customers'}" @click="onConnectionTypeChange('Customers')">
          Customers
        </div>
        <div class="blue-btn" :class="{'active-btn': connectionType === 'Suppliers'}" @click="onConnectionTypeChange('Suppliers')">
          Suppliers
        </div>
        <div class="blue-btn" :class="{'active-btn': connectionType === 'Requests'}" @click="onConnectionTypeChange('Requests')">
          Request
        </div>
      </div>
      <div>

      </div>
      <div class="friendPanel">
          <div class="searchInput">
            <input type="text" style="font-size: 15px;padding:6px;border:none;width:200px;" :placeholder="'Search ' + connectionType">
            <div>
              <img :src="require('../assets/image/viewprofile/search-icon.png')" width="32" height="32">
            </div>
          </div>
          <div class="friendContainer" v-if="connectionType !== 'Requests'">
              <FriendItem v-for="(item, index) in users" :key="index" :userInfo="item" :type="3"/>
          </div>
          <div class="friendContainer" v-if="connectionType === 'Requests'">
              <FriendItem v-for="(item, index) in users" :key="index" :userInfo="item" :type="4"/>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
  import FriendItem from '../components/FriendLinkItem/FriendItem.vue'

  export default {
    components: {
      FriendItem
    },
    data () {
      return {
        type: ['', 'info', 'success', 'warning', 'danger'],
        connectionType: 'Friends',
        notifications: {
          topCenter: false
        },
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
    methods: {
      onConnectionTypeChange (val) {
        this.connectionType = val;
      }
    }
  }

</script>

<style lang="scss">
.connection .logo > img{
    max-width: 250px;
    padding: 5px;
    margin: 20px;
}
.connection .searchInput {
  display: flex;
  justify-content: center;
}
.connection .searchInput div {
  cursor: pointer;
  width: 32px;
  height: 32px;
}
.connection .searchInput div:hover {
  box-shadow: 1px 1px 2px grey;
}
.connection .pageTitle {
  font-size: 30px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 20px;
}
.connection .pageInfo {
  font-size: 20px;
  line-height: 23px;
  font-weight: 500;
}
.connection .lastPageInfo {
  padding-bottom: 10px;
}
.connection .btn-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: center;
}
.connection .active-btn{
  opacity: 1 !important;
}
.connection .blue-btn {
  color: white;
  background-color: #04B1EE;
  opacity: 0.5;
  min-width: 154px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-family: 'roboto' !important;
  margin: 4px;
  cursor: pointer;
}

.connection .friendContainer{
    overflow-y: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>
