<template>
  <div class="content videoCall">
    <div class="container">
        <md-card>
            <div class="row messagePanel" style="margin:0px;display:flex;">
                <div class="videoArea" >
                    <div style="padding: 20px 10px;font-size: 18px;">
                        Video Call
                    </div>
                    <md-divider></md-divider>
                    <div class="remoteVideo">
                        <div class="myVideo">
                        </div>
                    </div>
                </div>
                <div class="chatWindowContainer" style="flex:1;">
                    <md-button class="toBackBtn">
                        Video Call
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
    .videoCall .messagePanel {
        flex-direction: column;
    }
    .videoCall .container {
        padding: 5px !important;
    }
    .videoCall .videoArea {
        max-height: 370px !important;
        min-height: 370px !important;
        border-right:none !important;
        border-bottom: 1px solid lightgray;
        width: 100%;
        max-width: 100% !important;
    }
    .videoCall .chatIndicator {
        min-height: 200px !important;
        max-height: 200px !important;
        width: 100%;
        max-width: 100% !important;
    }
    .videoCall .chatIndicator > .chatItem{
        max-width: 270px !important;
    }
    .chatWindowContainer .sc-chat-window {
        position: static !important;
        height: 500px !important;
    }
    .videoCall .remoteVideo{
        background-color: black;
        position: relative;
        height: 300px !important;
    }
    .videoCall .myVideo{
        width: 70px;
        height: 70px;
        background-color: grey;
        border: 1px solid white;
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
}
.videoCall .remoteVideo{
    background-color: black;
    position: relative;
    width: 100%;
    height: calc(100% - 60px);
}
.videoCall .myVideo{
    width: 70px;
    height: 70px;
    background-color: grey;
    border: 1px solid white;
    position: absolute;
    right: 10px;
    bottom: 10px;
}
.videoCall .chatWindowContainer {
    padding: 30px;
}
.videoCall .chatWindowContainer .sc-message--text {
    padding: 10px 20px !important;
}
.videoCall .chatWindowContainer .sc-chat-window {
    position: static !important;
    height: calc(100vh - 280px) !important;
    width: 100% !important;
    padding: 0px 20px;
    border: none !important;
}
.videoCall .chatWindowContainer .sc-message-list {
    height: 100% !important;
    padding: 40px 5px !important;
}
.videoCall .chatWindowContainer .sc-message--text-content {
    word-break: break-all;
}
.videoCall .chatWindowContainer .chatWindow .sc-chat-window .sc-user-input--text {
    max-width: calc(100% - 100px) !important;
    width: calc(100% - 100px) !important;
    word-break: break-all;
}
.videoCall .chatWindowContainer .sc-message-list::-webkit-scrollbar {
    width: 6px;
    background-color: rgba(0,0,0,0.1);
    visibility: hidden;
}
.videoCall .chatWindowContainer .sc-message-list::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.4);
    border-radius: 6px;
    visibility: hidden;
}
.videoCall .chatWindowContainer .sc-message-list::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
    background-color: rgba(0,0,0,0.1);
    border-radius: 6px;
    visibility: hidden;
}
.videoCall .chatWindowContainer .sc-message-list:hover::-webkit-scrollbar,
.videoCall .chatWindowContainer .sc-message-list:hover::-webkit-scrollbar-thumb,
.videoCall .chatWindowContainer .sc-message-list:hover::-webkit-scrollbar-track {
    visibility: visible;
}
.videoCall .chatWindowContainer .sc-chat-window .sc-message{
    width: 100% !important;
}
.videoCall .chatWindowContainer .sc-header {
    display: none !important;
}
.videoCall .container{
    padding-left: 30px;
    padding-right: 30px;
}

.videoCall .container > div > .row > div{
    min-height: calc(100vh - 171px);
    max-height: calc(100vh - 171px);
}

.videoCall .videoArea {
    padding:5px;
    border-right:1px solid lightgrey;
    min-width:350px;
    max-width: 350px;
}

.videoCall .chatIndicator {
  height: calc(100% - 80px);
  overflow-y: scroll;
  background-attachment: fixed;
  max-width: 270px;
  min-width: 220px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.videoCall .chatIndicator::-webkit-scrollbar {
    width: 6px;
    background-color: rgba(0,0,0,0.1);
}
.videoCall .chatIndicator::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.4);
    border-radius: 6px;
}
.videoCall .chatIndicator::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
    background-color: rgba(0,0,0,0.1);
    border-radius: 6px;
}
.videoCall .ciName {
  font-size: 15px;
  padding: 5px;
}
.videoCall .ciTime {
  font-size: 13px;
}
.videoCall .chatItem {
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding:8px 8px;
}
.videoCall .chatItem:hover {
  background-color: #f0f0f0;
  cursor: pointer;
}
.videoCall .ciCircle {
  background-color:lightgrey;
  border-radius:50%;
  position:relative;
  width:40px;
  height:40px;
  min-width: 40px;;
}
.videoCall .ciCircle > div {
  width:12px;
  height:12px;
  background-color:#65FD2F;
  border-radius:50%;
  position:absolute;
  right:0px;
  bottom:0px;
}
</style>
