<template>
  <div class="leftSideBar">
    <div class="sidebar"
        :style="sidebarStyle"
        style="background-position: left;background-size: cover;"
        :data-color="backgroundColor"
        :data-image="backgroundImage">
      <div class="sidebar-wrapper">
        <div class="logo">
          <a href="#" class="simple-text logo__container">
              <div class="logo-img">
                  <img src="../../assets/image/nc_logo.png" alt="">
              </div>
            {{title}}
          </a>
        </div>

        <div class="userProfile">
          <div class="profileImage" :style="{backgroundImage: profileImgUrl}">
          </div>
          <div class="labelPanel">
            <span class="namePanel">
              {{s_fullName}}
            </span>
            <span class="viewProfileLink">
              View Profile
            </span>
          </div>
        </div>
        <div class = "contentPanel">
          <div class = "menuItemList" v-show="chatIndicatorCollapsed">
            <slot name="content"></slot>
            <ul class="nav nav-main__links">
              <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
              <slot>
                <sidebar-link v-for="(link,index) in sidebarLinks"
                              :key="link.name + index"
                              :to="link.path"
                              @click="closeNavbar"
                              :link="link">
                  <i :class="link.icon"></i>
                  <p>{{link.name}}</p>
                </sidebar-link>
              </slot>
            </ul>
          </div>
          <div v-show="!chatIndicatorCollapsed" class="chatIndicator">
            <div class="chatItem" v-for="index in 15" :key="index" @click="onChatPersonClicked(index)">
              <div class="ciCircle"><div></div></div>
              <div class="ciName"> Boleslav	B{{index}} (3) </div>
              <div class="ciTime"> 0 m </div>
            </div>
          </div>
        </div>
        <div class="onlineBtn" @click="onChatIndicatorClicked">
          <div style="width:8px;height:8px;background-color:#65FD2F;border-radius:50%;margin: 5px;"></div>
          <div>
          Online(5)
          </div>
        </div>
      </div>
    </div>
    <div>
      <QuickChatWindow :chatOpened="quickChatWindowOpened" :personId="selectedPerson"/>
    </div>
  </div>  
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import SidebarLink from './SidebarLink.vue'

import QuickChatWindow from '../QuickChatWindow/QuickChat.vue'

export default {
  data() {
    return {
      chatIndicatorCollapsed: true,
      quickChatWindowOpened: false,
      selectedPerson: 0,
    }
  },
  components: {
    SidebarLink,
    QuickChatWindow
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: '',
      validator: (value) => {
        let acceptedValues = ['','blue', 'azure', 'green', 'orange', 'red', 'purple', 'black']
        return acceptedValues.indexOf(value) !== -1
      }
    },
    backgroundImage: {
      type: String,
      default: require('../../assets/image/sidebar/sidebarback.png')
    },
    activeColor: {
      type: String,
      default: 'success',
      validator: (value) => {
        let acceptedValues = ['primary', 'info', 'success', 'warning', 'danger']
        return acceptedValues.indexOf(value) !== -1
      }
    },
    sidebarLinks: {
      type: Array,
      default: () => []
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onChatIndicatorClicked() {
      this.chatIndicatorCollapsed = !this.chatIndicatorCollapsed;
    },
    onChatPersonClicked(ins) {
      this.quickChatWindowOpened = true;
      this.selectedPerson = ins;
    },
  },
  provide () {
    return {
      autoClose: this.autoClose
    }
  },
  computed: {
    sidebarStyle () {
      return {
        backgroundImage: `url(${this.backgroundImage})`
      }
    },
    ...mapGetters({
      s_fullName: 'userInfo/getFullName',
      profileImgUrl: 'userInfo/getProfileImgUrl',
    })
  }
}
</script>
<style>
.sidebar .chatIndicator {
  background: linear-gradient(180deg, #80D5FF 0%, rgba(8, 137, 186, 0) 91.18%), #00A4D6;
  min-height: 100%;
  background-attachment: fixed;
}
.sidebar .ciName {
  font-size: 15px;
}
.sidebar .ciTime {
  font-size: 13px;
}
.sidebar .chatItem {
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding:8px 20px;
  max-width: 254px;
}
.sidebar .chatItem:hover {
  background-color: rgba(0,0,0,0.4);
  cursor: pointer;
}
.sidebar .ciCircle {
  background-color:white;
  border-radius:50%;
  position:relative;
  width:40px;
  height:40px;
}
.sidebar .ciCircle > div {
  width:12px;
  height:12px;
  background-color:#65FD2F;
  border-radius:50%;
  position:absolute;
  right:0px;
  bottom:0px;
}
.sidebar .onlineBtn {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid white;
  background: linear-gradient(180deg, #80D5FF 0%, rgba(8, 137, 186, 0) 91.18%), #00A4D6;
  cursor: pointer;
}
.sidebar .onlineBtn:hover,
.sidebar .onlineBtn:focus {
  background: linear-gradient(180deg, #80D5FF 0%, rgba(8, 137, 186, 0) 50.18%), #00A4D6;
}
.sidebar .contentPanel {
  height: calc(100% - 166px - 50px);
  overflow-y: hidden;
  background-color: rgba(0,0,0,0.2);
}
.sidebar .contentPanel:hover {
  overflow-y: auto;
}
.sidebar .contentPanel::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
  background-color: rgba(0,0,0,0.1);
  border-radius: 6px;
}

.sidebar .contentPanel::-webkit-scrollbar {
	width: 6px;
  background-color: rgba(0,0,0,0.1);
}

.sidebar .contentPanel::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.4);
  border-radius: 6px;
}
.sidebar .userProfile{
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
}
.sidebar .userProfile .profileImage{
  border: 3px solid white;
  width: 85px;
  height: 85px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  margin-left: 10px;
  min-width: 85px;;
}
.sidebar .labelPanel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
}
.sidebar .viewProfileLink{
  padding: 5px;
  font-size: 15px;
}
.sidebar .namePanel {
  font-size: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.sidebar .logo {
  width: 100%;
  max-width: 100% !important;
}
.sidebar .sidebar-wrapper {
  display: flex;
  flex-direction: column;
}
.sidebar .nav-main__links {
  flex: 1;
}
.sidebar .sidebar-wrapper .logo .logo__container {
  padding-left: 10px;
}
</style>
