<template>
  <div class="content connection">
    <div class="container">
      <md-card>
        <md-card-header>
          <div style="display:flex; flex-direction:row; align-items:center; width:fit-content;">
            <md-icon class="md-size-2x"> settings </md-icon>
            <span class="md-title">User Profile</span>
          </div>
        </md-card-header>
        <md-card-content>
          <md-field> <label>First Name</label><md-input></md-input> </md-field>
          <md-field> <label>Last Name</label><md-input></md-input> </md-field>
          <md-field> <label>UserName</label><md-input disabled></md-input> </md-field>
          <md-field> <label>Email</label><md-input></md-input> </md-field>
          <md-field> <label>Password</label><md-input></md-input> </md-field>
          <md-field> <label>Phone</label><md-input></md-input> </md-field>
          <md-datepicker md-immediately />
          <div>
            <md-radio v-model="gender" value="male">Male</md-radio>
            <md-radio v-model="gender" value="female">Female</md-radio>
          </div>
          <md-field> <label>Company</label><md-input></md-input> </md-field>
          <md-field> <label>Company Websites</label><md-input></md-input> </md-field>
          <md-field>
            <label for="language"> Language </label>
            <md-select v-model="language" name="language" id="language" placeholder="Language">
              <md-option value="english">English</md-option>
              <md-option value="russian">Russian</md-option>
              <md-option value="spanish">Spanish</md-option>
              <md-option value="portuguese">Portuguese</md-option>
            </md-select>
          </md-field>
        </md-card-content>
        <md-card-actions>
          <md-button>
            Save
          </md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
import { mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbInput, mdbIcon } from 'mdbvue';

export default {
  name: 'SettingsPage',
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbInput,
    mdbIcon
  },
  data() {
    return {
      language: "english",
      gender: "male",
    }
  }
 }
</script>

<style lang="scss">

</style>
