<template>
    <div class="followPeople">
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-md-12" style="padding-top: 20px;">
                        <div class="row">
                            <div class="col-md-3" style="display: flex; flex-direction: row; align-items: center;">
                                <md-button @click="goBack" class="toBackBtn">
                                    Go back...
                                </md-button>
                            </div>
                            <div class="col-md-6" style="display: flex; flex-direction: column; align-items: center;">
                                <div class="logo newclue">
                                    <img :src="require('../../assets/image/signin/nc_newclue_banner.png')" />
                                </div>
                                <div class="profileImage" :style="{backgroundImage:imgUrl}">
                                    &nbsp;
                                </div>
                                <div class="description">
                                    {{s_fullName}}
                                </div>
                                <div class="tip">
                                    Follow people you may know...
                                </div>
                                <div style="width:60%">
                                    <input type="text"
                                            placeholder="Search"
                                            class="search_word"
                                            v-model="searchWord"/>
                                </div>
                            </div>
                            <div class="col-md-3" style="display: flex; flex-direction: row; align-items: center;justify-content:flex-end">
                                <md-button @click="goNext" class="toBackBtn">
                                    Skip/Next...
                                </md-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        <div class="friendPanel">
            <div class="container">
                <div class="friendContainer">
                    <FriendItem v-for="(item, index) in users" :key="index" :userInfo="item" :type="2"/>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import FriendItem from '../../components/FriendLinkItem/FriendItem.vue'

export default {
    name: 'MaterialIcons',
    props: ["fromSignIn"],
    components: {
        FriendItem
    },
    data () {
      return {
        searchWord: '',
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
            name: 'Rey Ondap',
            friendCnt: 102,
            badgeCnt: 50,
            backUrl: '/assets/image/addFriend/avatar1.png',
            profileUrl: '/assets/image/addFriend/avatar.png'
        }]
      }
    },
    computed: {
        ...mapGetters({
            s_fullName: 'userInfo/getFullName',
            imgUrl: 'userInfo/getProfileImgUrl',
        })
    },
    methods: {
        goBack: function (){
            this.$router.push({name: 'AddFriends', params: {fromSignIn: 'ok'}});
        },
        goNext: function (){
            this.$router.push({name: 'Profile_Bio', params: {fromSignIn: 'ok'}});
        },
    }
  }
</script>
<style>
.followPeople .newclue {
    max-width: 300px;
}
.followPeople .description {
    font-size: 34px !important;
    font-weight: normal !important;
    margin-top: 20px !important;
    text-align: center !important;
    text-transform: none !important;
    color: #000 !important;
    line-height: 1em;
}
.followPeople .tip {
    color: grey;
    font-size: 21px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
}
.followPeople .logo > img{
    width: 100%;
    padding: 5px;
}
.followPeople .newclue > img {
    width: 100%;
    padding: 5px;
}
.followPeople .profileImage {
    margin-top: 20px;
    width: 164px;
    height: 164px;
    object-fit: cover;
    border-radius: 50%;
    border: 8px solid #4BD3FF;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.followPeople .toBackBtn {
    font-size: 24px;
    color: #18C1E8 !important;
}
.followPeople .search_word {
    background-color: #f5f5f5;
    width: 100%;
    padding-left: 15%;
    padding-right: 15%;
    text-align: center;
    border:none;
    border-radius:7px;
    font-size: 18px;
    padding: 9px 0px;
    margin-bottom:20px;
}
.followPeople .search_word:hover{
    background-color: #f5f5f5;
    width: 100%;
    padding-left: 15%;
    padding-right: 15%;
    text-align: center;
    border:none;
    border-radius:10px;
}
.followPeople .friendPanel {
    width: 100%;
    height: 500px;
    background-image: url('../../assets/image/addFriend/back.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.followPeople .friendPanel > .container{
    height: 500px;
}
.followPeople .friendContainer{
    height: calc(100% - 40px);
    overflow-y: auto;
    position: relative;
    top: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.followPeople .friendContainer::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
@media (min-width: 768px) and (max-width: 1440px){
    .followPeople .newclue {
        max-width: 250px;
    }
    .followPeople .description {
        font-size: 28px !important;
    }
    .followPeople .tip {
        font-size: 16px;
    }
}
@media (min-width: 1441px) {
    .followPeople .profileImage {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        left: calc(50% - 100px);
    }
}
</style>
