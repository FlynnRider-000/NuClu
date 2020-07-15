<template>
  <div class="profileHeader">
    <div class="backImg" :style="{backgroundImage:'url(' + require('../../assets/image/1.png') + ')'}">
    </div>
    <div class="container" :style="{backgroundColor:bgColor}">
      <div class="profileImg" :style="{backgroundImage:'url(' + require('../../assets/image/addFriend/avatar.png') + ')'}">
      </div>
      <div class="profileMenuPanel">
        <div class="profileMenu">
          <md-button to="/nuclu/viewProfile/Timeline">
              <span>Timeline</span>
              <img :src="require('../../assets/image/viewprofile/timeline' + (activeLink === 'timeline' ? '_active':'') + '.png')" width=36 height=36>
          </md-button>
          <div class="space1"> </div>
          <md-button to="/nuclu/viewProfile/more"> 
            <img :src="require('../../assets/image/viewprofile/more' + (activeLink === 'more' ? '_active':'') + '.png')" width=36 height=36>
            <span>More...</span>
          </md-button>
        </div>
        <div class="profileMenu">
          <md-button to="/nuclu/viewProfile/Bio"> 
            <span>About</span>
            <img :src="require('../../assets/image/viewprofile/about' + (activeLink === 'about' ? '_active':'') + '.png')" width=36 height=36>
          </md-button>
          <div class="space2" > </div>
          <md-button to="/nuclu/viewProfile/activitylog"> 
            <img :src="require('../../assets/image/viewprofile/activitylog' + (activeLink === 'activitylog' ? '_active':'') + '.png')" width=36 height=36>
            <span>Activity Log</span>
          </md-button>
        </div>
        <div class="profileMenu">
          <md-button to="/nuclu/viewProfile/friends"> 
            <span>Friends</span>
            <img :src="require('../../assets/image/viewprofile/friends' + (activeLink === 'friends' ? '_active':'') + '.png')" width=36 height=36>
          </md-button>
          <div class="space3" > </div>
          <md-button to="/nuclu/viewProfile/Products"> 
            <img :src="require('../../assets/image/viewprofile/products' + (activeLink === 'products' ? '_active':'') + '.png')" width=36 height=36>
            <span>Products</span>
          </md-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    activeLink: String,
    bgColor: {
      type: String,
      default: '#ededed',
    }
  }
}
</script>
<style>
.profileHeader .container {
  position: relative;
  max-height: 170px;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.profileHeader .md-button {
  margin: 0px 8px;
  height: 42px !important;
}
.profileHeader .md-button::before {
  will-change: unset !important;
}
.profileHeader .md-ripple {
  -webkit-mask-image: none !important;
  text-transform: none !important;
}
.profileHeader .md-ripple span{
  font-size: 14px;
}
.profileHeader .space1{
  width: 230px !important;
}
.profileHeader .space2{
  width: 180px !important;
}
.profileHeader .space3{
  width: 130px !important;
}
.profileHeader .profileMenuPanel {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.profileHeader .profileMenu{
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
}
.profileHeader .profileMenu > a{
  display:block;
  min-width: 140px;
  max-width: 140px;;
  cursor: pointer;
  padding-top: 3px;
  padding-bottom: 3px;
}

.profileHeader .profileMenu span{
  padding-left: 5px;
  padding-right: 5px;
}
.profileHeader .profileMenu > a:first-child .md-ripple{
  justify-content: flex-end !important;
}
.profileHeader .profileMenu > a:last-child .md-ripple{
  justify-content: flex-start !important;
}
.profileHeader .backImg {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
}
.profileHeader .profileImg {
  width: 180px;
  height: 180px;
  border: 8px solid #4BD3FF;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: -50px;
  left: calc(50% - 90px);
}
@media (max-width: 460px) {
    .profileHeader .profileMenuPanel {
      position: absolute;
      top: 130px;
    }
    .profileHeader .space1,
    .profileHeader .space2,
    .profileHeader .space3{
      width: 30px !important;
      min-width: 30px !important;
    }
    .profileHeader .container {
      height: 290px;
      max-height: 290px !important;
    }
}
</style>
