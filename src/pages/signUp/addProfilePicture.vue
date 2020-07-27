<template>
  <div class="content addProfilePicture">
    <div class="container">
        <div class="row">
            <div class="col-md-12" style="padding-top: 20px;">
                <div class="row">
                    <div class="col-md-3" style="display: flex; flex-direction: row; align-items: center;">
                        <md-button to="/signin" class="toBackBtn">
                            Go back...
                        </md-button>
                    </div>
                    <div class="col-md-6" style="display: flex; flex-direction: column; align-items: center;">
                        <div class="logo">
                            <img :src="require('../../assets/image/nc_logo_blue.png')" />
                        </div>	
                        <div class="logo newclue">
                            <img :src="require('../../assets/image/signin/nc_newclue_banner.png')" />
                        </div>
                        <div class="description">
                            We welcome you<br/>
                            {{s_fullName}}!
                        </div>
                        <div class="tip">
                            To start add a profile picture and a cover photo
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="picker">
            <image-uploader
                :preview="true"
                :className="['fileinput', { 'fileinput--loaded': hasBackImage }]"
                :id="'fileInput'"
                capture="environment"
                :debug="1"
                :autoRotate="true"
                outputFormat="verbose"
                style="{width:100%;height:200px}"
                class="backImgPicker"
                @input="setBackImage"
            >
                <label for="fileInput" slot="upload-label" class="backImgClkArea">
                    <div class="upload-caption">
                        {{
                        hasBackImage ? "" : "+"
                        }}
                    </div>
                </label>
            </image-uploader>
            <image-uploader
                :preview="true"
                :className="['fileinput1', { 'fileinput--loaded': hasProfileImage }]"
                :id="'fileInput1'"
                capture="environment"
                :debug="1"
                :autoRotate="true"
                outputFormat="verbose"
                class="profilePicker"
                @input="setProfileImage"
            >
                <label for="fileInput1" slot="upload-label" class="profileImgClkArea">
                    <div class="upload-caption">
                        {{
                        hasProfileImage ? "" : "+"
                        }}
                    </div>
                </label>
            </image-uploader>
            <div class = "btnArea">
                <md-button @click="onSkip" :href="blankUrl" class="skip_btn">Or you may skip this...</md-button>
                <md-button @click="onFinish" :href="blankUrl" class="finish_btn">Finish...</md-button>
            </div>
        </div>
    </div>     
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'MaterialIcons',
    props: ["fromSignIn"],
    data () {
      return {
        hasBackImage: false,
        backImage: null,
        hasProfileImage: false,
        profileImage: null,
        blankUrl: ''
      }
    },
    mounted: function() {
        /*console.log(this.fromSignIn);
        if(this.fromSignIn === undefined)
        {
            this.$router.push({path:'/signin'});
        }*/
    },
    computed: {
        ...mapGetters({
            s_fullName: 'userInfo/getFullName'
        })
    },
    methods: {
        onSkip: function(){
            this.$router.push({name: 'AddFriends', params: {fromSignIn: 'ok'}});
        },
        onFinish: function () {
            this.$router.push({name: 'AddFriends', params: {fromSignIn: 'ok'}});
        },
        setBackImage: function(output) {
            console.log("back");
            this.hasBackImage = true;
            this.backImage = output;
            console.log(output);
            console.log("Info", output.info);
            console.log("Exif", output.exif);
        },
        setProfileImage: function(output) {
            console.log("profile");
            this.hasProfileImage = true;
            this.profileImage = output;
            console.log(output);
            console.log("Info", output.info);
            console.log("Exif", output.exif);
        }
    }
  }
</script>
<style>
.addProfilePicture #fileInput,
.addProfilePicture #fileInput1 {
  display: none;
}
.addProfilePicture .logo {
    max-width: 200px;
}
.addProfilePicture .newclue {
    max-width: 250px;
}
.addProfilePicture .description {
    font-size: 34px !important;
    font-weight: normal !important;
    margin-top: 20px !important;
    text-align: center !important;
    text-transform: none !important;
    color: #000 !important;
    line-height: 1em;
}
.addProfilePicture .tip {
    color: grey;
    font-size: 21px;
    margin-top: 20px;
    margin-bottom: 30px;
}
.addProfilePicture .logo > img{
    width: 100%;
    padding: 5px;
}
.addProfilePicture .newclue > img {
    width: 100%;
    padding: 5px;
}
.addProfilePicture .btnArea {
    display: flex;
    justify-content: space-around;
    position: relative;
    top: -90px;
    margin-bottom: 20px;
}
.addProfilePicture .skip_btn {
    cursor: pointer;
    font-size: 18px;
    text-align: center;
}
.addProfilePicture .finish_btn {
    font-size: 18px;
    cursor: pointer;
    text-align: center;
}
.addProfilePicture .backImgClkArea,
.addProfilePicture .profileImgClkArea {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
}
.addProfilePicture .backImgClkArea > div {
    margin-top: 40px;
}
.addProfilePicture .profileImgClkArea {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.addProfilePicture .backImgClkArea:hover,
.addProfilePicture .profileImgClkArea:hover {
    background-color: rgba(255,255,255,0.3);
}
.addProfilePicture .picker {
    position: relative;
    height: 390px;
}
.addProfilePicture .backImgPicker{
    width: 100vw;
    background: linear-gradient(0deg,#4AD3FF  10%, #03B8CE 100%);
    height: 300px;
    margin-left: -15px;
    margin-right: -15px;
    text-align: center;
    position: relative;
    margin-left: calc(50% - 50vw);
}
.addProfilePicture .backImgPicker > img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}
.addProfilePicture .backImgPicker  label {
    padding-top: 30px;
}
.addProfilePicture .upload-caption{
    color: white;
    font-size: 80px;
}
.addProfilePicture .profilePicker {
    width: 180px;
    height: 180px;
    border: 8px solid white;
    background-color: #4BD3FF;
    text-align: center;
    position: absolute;
    border-radius: 50%;
    left: calc(50% - 90px);
    top: -90px;
    position: relative;
}
.addProfilePicture .profilePicker > img {
    width: 164px;
    height: 164px;
    object-fit: cover;
    border-radius: 50%;
}
.addProfilePicture .toBackBtn {
    font-size: 20px;
    color: #18C1E8 !important;
}
@media (min-width: 768px) and (max-width: 1440px){
    .addProfilePicture .logo {
        max-width: 200px;
    }
    .addProfilePicture .newclue {
        max-width: 250px;
    }
    .addProfilePicture .description {
        font-size: 28px !important;
    }
    .addProfilePicture .tip {
        font-size: 16px;
    }
}
@media (min-width: 1441px) {
    .addProfilePicture .profilePicker {
        width: 240px;
        height: 240px;
        border: 8px solid white;
        background-color: #4BD3FF;
        text-align: center;
        position: absolute;
        border-radius: 50%;
        left: calc(50% - 120px);
        top: -120px;
        position: relative;
    }
    .addProfilePicture .profilePicker > img {
        width: 224px;
        height: 224px;
        object-fit: cover;
        border-radius: 50%;
    }
}
</style>


