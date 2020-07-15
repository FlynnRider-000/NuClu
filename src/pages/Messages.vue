<template>
  <div class="content messages">
    <div class="container">
        <md-card>
            <div class="row messagePanel" style="margin:0px;display:flex;">
                <div class="userList" >
                    <div style="padding: 20px 10px;font-size: 18px;">
                        User List
                    </div>
                    <md-divider></md-divider>
                    <div class="chatIndicator">
                        <div class="chatItem" v-for="index in 15" :key="index">
                            <div class="ciCircle"><div></div></div>
                            <div class="ciName"> Boleslav	B{{index}} (3) </div>
                            <div class="ciTime"> 0 m </div>
                        </div>
                    </div>
                </div>
                <div class="chatWindowContainer" style="flex:1;">
                    <md-button to="/nuclu/videocall" class="toBackBtn">
                        To Video Call
                    </md-button>
                    <ChatWindow />
                </div>
            </div>
        </md-card>
    </div>
  </div>
</template>
<script>
import ChatWindow from '../components/ChatComponent/ChatWindow.vue'

export default {
    components: {
        ChatWindow
    }
}
</script>
<style>

@media (max-width: 768px) {
    .messages .messagePanel {
        flex-direction: column;
    }
    .messages .container {
        padding: 5px !important;
    }
    .messages .userList {
        max-height: 270px !important;
        min-height: 270px !important;
        border-right:none !important;
        border-bottom: 1px solid lightgray;
        width: 100%;
        max-width: 100% !important;
    }
    .messages .chatIndicator {
        min-height: 200px !important;
        max-height: 200px !important;
        width: 100%;
        max-width: 100% !important;
    }
    .messages .chatIndicator > .chatItem{
        max-width: 270px !important;
    }
    .chatWindowContainer .sc-chat-window {
        position: static !important;
        height: 500px !important;
    }
}
.chatWindowContainer {
    padding: 30px;
}
.chatWindowContainer .sc-message--text {
    padding: 10px 20px !important;
}
.chatWindowContainer .sc-chat-window {
    position: static !important;
    height: calc(100vh - 280px) !important;
    width: 100% !important;
    padding: 0px 20px;
    border: none !important;
}
.chatWindowContainer .sc-message-list {
    height: 100% !important;
    padding: 40px 5px !important;
}
.chatWindowContainer .sc-message--text-content {
    word-break: break-all;
}
.chatWindowContainer .chatWindow .sc-chat-window .sc-user-input--text {
    max-width: calc(100% - 100px) !important;
    width: calc(100% - 100px) !important;
    word-break: break-all;
}
.chatWindowContainer .sc-message-list::-webkit-scrollbar {
    width: 6px;
    background-color: rgba(0,0,0,0.1);
}
.chatWindowContainer .sc-message-list::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.4);
    border-radius: 6px;
}
.chatWindowContainer .sc-message-list::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
    background-color: rgba(0,0,0,0.1);
    border-radius: 6px;
}
.chatWindowContainer .sc-chat-window .sc-message{
    width: 100% !important;
}
.chatWindowContainer .sc-header {
    display: none !important;
}
.messages .container{
    padding-left: 30px;
    padding-right: 30px;
}

.messages .container > div > .row > div{
    min-height: calc(100vh - 171px);
    max-height: calc(100vh - 171px);
}

.messages .userList {
    padding:5px;
    border-right:1px solid lightgrey;
    min-width:270px;
    max-width: 270px;
}

.messages .chatIndicator {
  height: calc(100% - 80px);
  overflow-y: scroll;
  background-attachment: fixed;
  max-width: 270px;
  min-width: 220px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.messages .chatIndicator::-webkit-scrollbar {
    width: 6px;
    background-color: rgba(0,0,0,0.1);
}
.messages .chatIndicator::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.4);
    border-radius: 6px;
}
.messages .chatIndicator::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
    background-color: rgba(0,0,0,0.1);
    border-radius: 6px;
}
.messages .ciName {
  font-size: 15px;
  padding: 5px;
}
.messages .ciTime {
  font-size: 13px;
}
.messages .chatItem {
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding:8px 8px;
}
.messages .chatItem:hover {
  background-color: #f0f0f0;
  cursor: pointer;
}
.messages .ciCircle {
  background-color:lightgrey;
  border-radius:50%;
  position:relative;
  width:40px;
  height:40px;
  min-width: 40px;;
}
.messages .ciCircle > div {
  width:12px;
  height:12px;
  background-color:#65FD2F;
  border-radius:50%;
  position:absolute;
  right:0px;
  bottom:0px;
}
</style>
