<template>
  <div class="content signinview">
    <div class="container-fluid signin-container">
        <div class="row">
            <div class="col-md-6">
                <div class="hl_area">
                    <div class="home-left-contents">
                        <div class="logo">
                            <img :src="require('../assets/image/nc_logo_blue.png')" />
                        </div>	
                        <div class="logo newclue">
                            <img :src="require('../assets/image/signin/nc_newclue_banner.png')" />
                        </div>
                        <div v-if="showLoginInputs === 0">	
                            <div class="description">
                                Welcome to NewClue where social media and marketplace becomes one. You can meet familiar friends and new friends, you can also send or share photos and ideas, and lastly, you can buy and sell easily plus with additional security and trust build-up.
                            </div>
                            <div class="buttons">
                                <md-button class="btn-fill btn-info btn_login" @click="onLoginClicked" style="height: auto !important;">
                                    Login
                                </md-button>
                            </div>
                        </div>
                        <div v-else-if="showLoginInputs === 1">	
                            <form>
                                <div>
                                    <base-input type="text"
                                                placeholder="Username"
                                                class="signin_input"
                                                v-model="s_userName"
                                                v-on:focus="onInputFocused"
                                                :class="{validError : signinInputValidation[0]}"
                                                style="margin-top:20px;border:1px solid lightgrey">
                                    </base-input>
                                </div>
                                <div>
                                    <base-input type="password"
                                                placeholder="Password"
                                                class="signin_input"
                                                v-model="s_passWord"
                                                v-on:focus="onInputFocused"
                                                :class="{validError : signinInputValidation[1]}"
                                                style="margin-top:20px;border:1px solid lightgrey">
                                    </base-input>
                                </div>
                                <div>
                                    <md-button @click="onForgotPassword" style="font-size:12px;">
                                        Forgot password?
                                    </md-button>
                                </div>
                                <div class="buttons">
                                    <md-button class="btn-fill btn-info btn_login" @click="onSignIn" style="height: auto !important;">
                                        Login
                                    </md-button>
                                </div>
                            </form>
                        </div>
                        <div v-if="showLoginInputs === 2">	
                            <div class="description">
                                Enter the email address of your account in order to reset the password.
                            </div>
                            <div>
                                <base-input type="text"
                                            class="signin_input"
                                            v-model="forgot_email"
                                            v-on:focus="onInputFocused"
                                            style="margin-top:20px;border:1px solid lightgrey">
                                </base-input>
                            </div>
                            <div class="buttons">
                                <a @click="onPsdReset" class="btn btn-primary btn_login">Reset</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class = "hr_area">
                    <div class = "home-right-contents">
                        <div>
                            <div >
                                <p class = "create-heading">Create an account</p>
                            </div>
                        </div>
                        <div class = "row">
                            <div class = "col-md-6">
                                <base-input type="text"
                                            placeholder="First Name"
                                            :class="{validError : textValidation[0]}"
                                            v-on:focus="onInputFocused"
                                            class="signup_input"
                                            v-model="firstName">
                                </base-input>
                            </div>
                            <div class = "col-md-6">
                                <base-input type="text"
                                            placeholder="Last Name"
                                            :class="{validError : textValidation[1]}"
                                            v-on:focus="onInputFocused"
                                            class="signup_input"
                                            v-model="lastName">
                                </base-input>
                            </div>
                        </div>
                        <div class = "row">
                            <div class = "col-md-12">
                                <base-input type="email"
                                            placeholder="Email"
                                            :class="{validError : textValidation[2]}"
                                            v-on:focus="onInputFocused"
                                            class="signup_input"
                                            v-model="email">
                                </base-input>
                            </div>
                        </div>
                        <div class = "row">
                            <div class = "col-md-12">
                                <base-input type="email"
                                            placeholder="Re-enter Email"
                                            :class="{validError : textValidation[3]}"
                                            v-on:focus="onInputFocused"
                                            class="signup_input"
                                            v-model="reEmail">
                                </base-input>
                            </div>
                        </div>
                        <div class = "row">
                            <div class = "col-md-12">
                                <base-input type="text"
                                            placeholder="Username"
                                            :class="{validError : textValidation[4]}"
                                            v-on:focus="onInputFocused"
                                            class="signup_input"
                                            v-model="userName">
                                </base-input>
                            </div>
                        </div>
                        <div class = "row">
                            <div class = "col-md-12">
                                <base-input type="password"
                                            placeholder="Password"
                                            :class="{validError : textValidation[5]}"
                                            v-on:focus="onInputFocused"
                                            class="signup_input"
                                            v-model="passWord">
                                </base-input>
                            </div>
                        </div>
                        <div class = "row">
                            <div class = "col-md-12">
                                <label class="birthdayLabel">
                                    Birthday
                                </label>
                                <md-datepicker v-model="birthDay" />
                            </div>
                        </div>
                        <div class = "row">
                            <div class = "col-md-12">
                                <base-radio 
                                            :label="'Male'"
                                            v-model="gender"
                                            style="display:inline;font-size:22px; font-weight: normal;">
                                    Male
                                </base-radio>
                                <base-radio 
                                            :label="'Female'"
                                            v-model="gender"
                                            style="display:inline; font-size:22px; font-weight: normal; margin-left:10px">
                                    Female
                                </base-radio>
                            </div>
                        </div>
                        <div class = "row">
                            <div class = "col-md-12">
                                <p class = "account_create_description">
                                    By clicking Create an account, you agree to our terms and that you have read our Data Policy. Including our Cookie Use . You may receive SMS notifications from facebook and can opt out at any time
                                </p>
                            </div>
                        </div>
                        <div class = "row">
                            <div class = "col-md-12">
                                <md-button class="btn-fill btn-info" @click="onCreateAccount" id="submit-button" style="height: auto !important;">
                                    Create an account
                                </md-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>     
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

import parse from 'date-fns/parse'
import format from 'date-fns/format'
import isValid from 'date-fns/isValid'

export default {
    data () {
        let dateFormat = this.$material.locale.dateFormat || 'yyyy-MM-dd'
        let now = new Date()

        return {
            showLoginInputs: 0,
            firstName: '',
            lastName: '',
            email: '',
            reEmail: '',
            userName: '',
            passWord: '',
            birthDay: format(now, dateFormat),
            gender: 'Male',
            s_userName: '',
            s_passWord: '',
            textValidation: [0,0,0,0,0,0],
            signinInputValidation: [0,0],
            forgot_email: ''
        }
    },
    methods: {
        onInputFocused: function(target) {
            var tmp = this.signinInputValidation.slice();
            var tmp1 = this.textValidation.slice();
            
            var parent = $(target).parent();
            parent = $(parent[0]);
            var tmpstr = $(target).attr("placeholder");

            if(parent.attr("class").includes("signup_input")) {
                switch(tmpstr) {
                    case 'Password':
                        tmp1[5] = 0;break;
                    case 'First Name': 
                        tmp1[0] = 0;break;
                    case 'Last Name': 
                        tmp1[1] = 0;break;
                    case 'Email': 
                        tmp1[2] = 0;break;
                    case 'Re-enter Email': 
                        tmp1[3] = 0;break;
                    case 'Username': 
                        tmp1[4] = 0;break;
                }
            }
            if(parent.attr("class").includes("signin_input")) {
                switch(tmpstr) {
                    case 'Username':
                        tmp[0] = 0;break;
                    case 'Password':
                        tmp[1] = 0;break;
                }
            }
                        
            this.signinInputValidation = tmp;
            this.textValidation = tmp1;
        },
        onPsdReset: function() {
            alert(this.forgot_email);
        },
        onForgotPassword: function() {
            this.showLoginInputs = 2;
        },
        onLoginClicked: function() {
            this.showLoginInputs = 1;
        },
        onCreateAccount: function() {
            this.textValidation = [0,0,0,0,0,0];
            const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

            if(this.firstName == "") this.textValidation[0] = 1;
            if(this.lastName == "") this.textValidation[1] = 1;
            if(this.email == "" || !re.test(this.email.toLowerCase())) this.textValidation[2] = 1;
            if(this.reEmail == "" || this.email != this.reEmail) this.textValidation[3] = 1;
            if(this.userName == "") this.textValidation[4] = 1;
            if(this.passWord == "") this.textValidation[5] = 1;
            var c = 0;
            for(var i = 0; i < 6; i++)
                if(this.textValidation[i] == 1)
                    c = 1;
            if(c === 0){
                var temp = {
                    firstname: this.firstName,
                    lastname: this.lastName,
                    email: this.email,
                    username: this.userName,
                    password: this.passWord,
                    birthday: this.birthDay,
                    gender: this.gender,
                }
                this.regUserInfo(temp);
                this.$router.push({name: 'ProfilePictureAdd', params: {fromSignIn: 'ok'}});
            }
        },
        onSignIn: function() {
            var flg = 0;
            this.signinInputValidation = [0,0];
            if(this.s_userName == '')
            {
                this.signinInputValidation[0] = 1;
                flg = 1;
            }
            if(this.s_passWord == '')
            {
                this.signinInputValidation[1] = 1;
                flg = 1;
            }
            if(flg === 0)
                this.$router.push({name: 'Profile_Bio', params: {fromSignIn: 'ok'}});
        },
        ...mapActions({
            regUserInfo: 'regUserInfo/setNewUserInfo'
        })
    }
  }
</script>
<style>
.signinview .signin-container {
    padding-left: 0px;
    padding-right: 0px;
}
.signinview .signin-container  > .row{
    margin-left: 0px;
    margin-right: 0px;
}
.signinview .signin-container > .row > .col-md-6{
    padding-left: 0px;
    padding-right: 0px;
}
.signinview .signin-container .control-label {
    color: white;
    font-size: 22px;
}
.signinview .signin-container .from-check,
.signinview .form-check-radio {
    color: white;
}
.signinview .signin_input {
    width: 100%;
    transition: 0.5s;
    transition-timing-function: ease;
}
.signinview .signup_input {
    transition: 0.5s;
    transition-timing-function: ease;
}
.signinview .logo > img{
    width: 30%;
    padding: 5px;
}
.signinview .newclue > img {
    width: 35%;
    padding: 5px;
}
.signinview .btn_login {
    background-color: rgb(36,185, 233) !important;
    border: none !important;
    border-radius: 0px !important;
    color: black !important;
    font-size: 22px !important;
    padding: 8px !important;
    margin-top: 20px !important;
    margin-bottom: 20px !important;
    width: 27%;
}
.signinview .btn_login:hover {
    text-decoration: none !important;
}
.signinview .home-left-contents {
    margin-top: 0px !important;
    background-color: white;
    padding-left: 12%;
    padding-right: 12%;
    padding-top: 100px;
    width: 100%;
    height: 100%;
    float: right;
}
.signinview .home-left-contents input{
    border: 1px solid white;
}
.signinview .home-left-contents > div {
    text-align: left !important;
}
.signinview .home-left-contents .description {
    font-size: 16px !important;
    font-weight: normal !important;
    margin-top: 20px !important;
    text-align: justify !important;
    text-transform: none !important;
    color: #000 !important;
    line-height: 1.5rem;
}
.signinview .hl_area {
    height: 100%;
}
.signinview .hr_area {
    background-image: url(../assets/image/signin/login_right.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 0 !important;
}
.signinview .home-right-contents > div{
    width: 80% !important;
    margin-left: 10%;
}
.signinview .create-heading{
    color: white;
    text-align: center;
    font-size: 50px;
    padding-top: 105px;
    padding-bottom: 30px;
}
.signinview .home-right-contents .hasDatepicker {
    border-radius: 0px !important;
}
.signinview .home-right-contents .radio-block span{
    font-size: 20px !important;
    color: white;
}
.signinview .input_oneline{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.signinview .input_oneline > input {
    width: 49% !important;
}
.signinview #submit-button {
    background-color: rgb(36,185, 233) !important;
    border: none !important;
    border-radius: 0px !important;
    color: white !important;
    font-size: 4.5vw !important;
    padding: 8px !important;
    margin-top: 20px !important;
    margin-bottom: 20px !important;
    width: 60%;
    float: right;
}
.signinview .account_create_description {
    margin-top: 10px;
    color: white;
    background-color: rgba(0,0,0,0.3);
    padding: 5px;
    border-radius: 3px;
    font-size: 15px;
}
.signinview .home-right-contents  .form-check-radio .form-check-sign::before {
    font-size: 24px !important;
    color: #01AEEF;
}
.signinview .home-right-contents .form-check-radio input[type="radio"]:checked + .form-check-sign::after {
    font-size: 24px !important;
    color: #01AEEF;
}
.signinview .home-right-contents .form-control {
    font-size: 15px !important;
    height: 44px !important;
}
.signinview .hr_area .md-field>.md-icon:after {
    content: none !important;
}
.signinview .hr_area .md-field:after, .md-field:before {
    content: none !important;
}
.signinview .hr_area .md-field {
    background-color: white;
    padding-top: 7px;
}
.signinview .hr_area .md-field input {
    font-size: 15px !important;
}
.signinview .hr_area .md-field .md-input-action {
    top: 7px !important;
}
.signinview .birthdayLabel {
    color: white;
    font-size: 24px;
}
.signinview .home-right-contents > div > div > div:not(.form-check-radio) {
    border: 1px solid white;
}
.signinview .validError {
    border: 1px solid red !important;
}
@media (min-width: 768px) {
	.signinview .home-left-contents,
	.signinview .home-right-contents {
		min-height: 100vh;
    }
    .signinview .home-left-contents {
        padding-left: 20%;
        padding-right: 5%;
    }
    .signinview .home-right-contents > div{
        width: 70% !important;
        margin-left: 10%;
    }
	.signinview .home-left-contents{
		background-image: url(../assets/image/signin/login_back_left.jpg);
		background-size: 100.1% auto;
		background-repeat: no-repeat;
		background-position-y: bottom;
	}
	.signinview .home-right-contents{
		background-image: url(../assets/image/signin/login_back_right.png);
		background-size: 100.1% auto;
		background-repeat: no-repeat;
		background-position-y: bottom;
    }
	.signinview .ossn-home-container > .inner > .row {
		display: flex;
    }
    .signinview #submit-button {
        font-size: 1.5vw !important;
    }
    .signinview .signin_input {
        width: 50%;
        transition: 0.5s;
        transition-timing-function: ease-in-out;
    }
    .signinview .signup_input {
        transition: 0.5s;
        transition-timing-function: ease-in-out;
    }
}
</style>
