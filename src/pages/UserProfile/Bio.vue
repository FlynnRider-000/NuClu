<template>
  <div class="content Bio">
    <div class="container-fluid">
      <ProfileHeader :activeLink="'about'">
      </ProfileHeader>
      <div class="container profileContent">
        <div class="name">
          Sidney Ondap
        </div>
        <div class = "title">
          About you
        </div>
        <div class="topic">
          <div class="subtitle">
            Basic Info
          </div>
          <div class="topic-content">
            <div> Full Name: Sidney Lorenz B. Ondap </div>
            <div> Birthdate: November 28, 1998 </div>
            <div style="display:flex; flex-direction:row"> 
              <div>
                Langueages:
              </div>
              <div style="padding-left: 5px">
                <div>Bisaya</div>
                <div>Tagalog</div>
                <div>English</div>
              </div>
            </div>
          </div>
        </div>
        <div class="topic">
          <div class="subtitle">
            Work
          </div>
          <div class="topic-content">
            <div> Worked as a Graphic Designer at Made In Mars </div>
            <div> Worked as a lazy boi at home, hehe </div>
          </div>
        </div>
        <div class="topic">
          <div class="subtitle">
            Education
          </div>
          <div class="topic-content">
            <div> Studied at Colegio de la Inmaculada Concepcion - Mandaue </div>
            <div> Studying at University of San Carlos Talamban </div>
          </div>
        </div>
        <div class="topic">
          <div class="subtitle">
            Places You've Lived
          </div>
          <div class="topic-content">
            <div> Current City: Lapu-Lapu City </div>
            <div> Home Town: Lapu-Lapu City </div>
          </div>
        </div>
        <div class="topic">
          <div class="subtitle">
            Contact Info
          </div>
          <div class="topic-content">
            <div> Mobile: 09456988965 </div>
          </div>
        </div>
        <div class="topic">
          <div class="subtitle">
            RelationShip
          </div>
          <div class="topic-content">
            <div> Single </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader.vue'

export default {
  components: {
    ProfileHeader
  }
}
</script>
<style>
.Bio,
.Bio .container-fluid {
  padding: 0px !important;
  background-color: #dedede;
}
.Bio .profileContent {
  padding-left: 10%;
  background-color: #ededed;
  font-family: 'Courier New', Courier, monospace;
}
.Bio .name {
  width: 111.11%;
  text-align: center;
  font-weight: bold;
  font-size: 29px;
  margin-left: -10%;
  font-family: "Segoe UI",Arial,sans-serif;
  padding-top: 40px;
  padding-bottom: 40px;
}
.Bio .title {
  font-weight: bold;
  font-size: 21px;
  font-family: "Segoe UI",Arial,sans-serif;
  padding-top: 30px;
  padding-bottom: 30px;
}
.Bio .subtitle {
  font-weight: bold;
  font-size: 18px;
  font-family: "Segoe UI",Arial,sans-serif;
  padding-top: 10px;
  padding-bottom: 10px;
}
.Bio .topic-content div{
  font-size: 17px;
  font-family: "Segoe UI",Arial,sans-serif;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
