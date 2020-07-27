<template>
    <div class="chatWindow">
        <beautiful-chat
        :participants="participants"
        :titleImageUrl="titleImageUrl"
        :onMessageWasSent="onMessageWasSent"
        :messageList="messageList"
        :newMessagesCount="newMessagesCount"
        :isOpen="isChatOpen"
        :close="closeChat"
        :icons="icons"
        :open="openChat"
        :showEmoji="true"
        :showFile="true"
        :showTypingIndicator="showTypingIndicator"
        :colors="colors"
        :alwaysScrollToBottom="alwaysScrollToBottom"
        :messageStyling="messageStyling"
        @onType="handleOnType"
        @edit="editMessage" >
        </beautiful-chat> 
    </div>
</template>
<script>

import CloseIcon from 'vue-beautiful-chat/src/assets/close-icon.png'
import OpenIcon from 'vue-beautiful-chat/src/assets/logo-no-bg.svg'
import FileIcon from 'vue-beautiful-chat/src/assets/file.svg'
import CloseIconSvg from 'vue-beautiful-chat/src/assets/close.svg'

export default {
  data() {
    return {
      icons:{
        open:{
          img: OpenIcon,
          name: 'default',
        },
        close:{
          img: CloseIcon,
          name: 'default',
        },
        file:{
          img: FileIcon,
          name: 'default',
        },
        closeSvg:{
          img: CloseIconSvg,
          name: 'default',
        },
      },
      participants: [{
          id: 'user',
          name: 'Matteo',
          imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
        },
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4',
      messageList: [
          { type: 'text', author: `me`, data: { text: `Say yes!` } },
          { type: 'text', author: `user`, data: { text: `No.` } },
          { type: 'text', author: `me`, data: { text: `Say yes!` } },
          { type: 'text', author: `user`, data: { text: `the list of the messages to show, can be paginated and adjusted dynamically` } },
          { type: 'text', author: `me`, data: { text: `Say yes!` } },
          { type: 'text', author: `user`, data: { text: `No.` } },
          { type: 'text', author: `me`, data: { text: `Say yes!` } },
          { type: 'text', author: `user`, data: { text: `No.` } },
          { type: 'text', author: `me`, data: { text: `Say yes!` } },
          { type: 'text', author: `user`, data: { text: `No.` } },
          { type: 'text', author: `me`, data: { text: `https://youtu.be/aVsqypxZy04` } },
          { type: 'text', author: `user`, data: { text: `No.` } },
          { type: 'text', author: `me`, data: { text: `Say yes!` } },
          { type: 'text', author: `user`, data: { text: `No.` } },
          { type: 'text', author: `me`, data: { text: `Say yes!` } },
          { type: 'text', author: `user`, data: { text: `No.` } },
          { type: 'text', author: `me`, data: { text: `Say yes!` } },
          { type: 'text', author: `user`, data: { text: `called when the user scrolls message list to topspecifies the color scheme for the component` } },
          { type: 'text', author: `me`, data: { text: `called when the user scrolls message list to topspecifies the color scheme for the component` } },
          { type: 'text', author: `user`, data: { text: `No.` } }
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 2,
      isChatOpen: true, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        launcher: {
          bg: '#4e8cff'
        },
        messageList: {
          bg: '#ffffff'
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222'
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867'
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: true, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    }
  },
  props: {
    chatOpened: {
      type: Boolean,
      default: true
    },
    personId: {
      type:Number,
      default:0,
    }
  },
  watch: {
    personId: function(newVal,oldVal) {
        this.participants = [
            {
                id: 'user',
                name: 'Boleslav	B' + newVal,
                imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
            },
        ];
    }
  },
  methods: {
    sendMessage (text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        this.onMessageWasSent({ author: 'support', type: 'text', data: { text } })
      }
    },
    onMessageWasSent (message) {
      // called when the user sends a message
      this.messageList = [ ...this.messageList, message ]
    },
    openChat () {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat () {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false;
    },
    handleScrollToTop () {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
  	},
    handleOnType () {
      console.log('Emit typing event')
    },
    editMessage(message){
      const m = this.messageList.find(m=>m.id === message.id);
      m.isEdited = true;
      m.data.text = message.data.text;
    }
  }
}
</script>
<style>
.chatWindow .sc-header {
  min-height: 50px !important;
  padding: 0px !important;
}
.chatWindow .sc-header--title {
  font-size: 17px !important;
}
.chatWindow .sc-message {
  width: 250px !important;
}
.chatWindow .sc-user-input--button > svg{
  width: 20px;
  height: 20px;
}
.chatWindow .sc-message--emoji {
  font-size: 20px !important;
}
.chatWindow .sc-chat-window {
  width: 300px !important;
  z-index: 1000;
  border: 1px solid rgb(78, 140, 255);
  bottom: 10px !important;
}
.chatWindow .sc-chat-window .sc-user-input--text {
  width: 200px !important;
}
.chatWindow .sc-user-input--emoji-icon-wrapper > svg {
  width: 20px;
  height: 20px;
}
.chatWindow .sc-message .sc-message--text {
  padding: 5px 10px;
  max-width: calc(100% - 50px) !important;
}
.chatWindow .sc-message .sc-message--text-content {
  font-size: 14px;
  line-height: 1.3 !important;
}
.chatWindow .sc-message--content.sent .sc-message--text-content a {
  color: white !important;
  text-decoration: underline;
  text-decoration-color: white;
}
.chatWindow .sc-message p {
  margin:0px !important;
}
.chatWindow .sc-launcher {
  display: none;
}
.chatWindow .sc-header--img {
  width: 60px;
}
@media (max-width: 450px){
  .chatWindow .sc-chat-window {
    bottom: 0px !important;
  }
}
</style>
