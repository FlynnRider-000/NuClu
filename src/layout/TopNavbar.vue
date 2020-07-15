<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button type="button"
              class="navbar-toggler navbar-toggler-right"
              :class="{toggled: $sidebar.showSidebar}"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="toggleSidebar">
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-start">
        <div style="width: 30%;min-width: 250px;display:flex">
          <img v-if="isMarketPlacePage === true" :src="require('../assets/image/topbar/NEWCLUE_Marketplace.png')"/>
          <input v-if="isMarketPlacePage === false" type="text"  style="border:none; width:calc(100% - 30px); padding: 5px;">
          <div v-if="isMarketPlacePage === false" class="search-btn" style="cursor: pointer">
            <img :src="require('../assets/image/viewprofile/search-icon.png')" width=30 height=30>
          </div>
        </div>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" style="padding:0px 15px;cursor:pointer">
              <img :src="require('../assets/image/topbar/mdi_home.png')" width=30 height=30/>
            </a>
          </li>
          <base-dropdown>
            <template slot="title">
              <a class="nav-link notification_link"
                data-toggle="dropdown" style="padding:0px 15px;cursor:pointer;">
                  <img :src="require('../assets/image/topbar/mdi_notifications.png')" width=24 height=24/>
              </a>
            </template>
            <div class="dropdown-item">Sidney Ondap shared a photo of yours1.</div>
            <div class="dropdown-item">Sidney Ondap shared a photo of yours2.</div>
            <div class="dropdown-item">Sidney Ondap shared a photo of yours3.</div>
            <div class="dropdown-item">Sidney Ondap shared a photo of yours4.</div>
            <div class="dropdown-item">Sidney Ondap shared a photo of yours5.</div>
            <div class="divider"></div>
            <div class="dropdown-item">See all notifications</div>
          </base-dropdown>
          <li class="nav-item">
            <a class="nav-link" style="padding:0px 15px;cursor:pointer" @click="onSettingsPage">
              <img :src="require('../assets/image/topbar/mdi_settings.png')" width=30 height=30/>
            </a>
          </li>
        </ul>
      </div>
      <div class="logo-img">
          <img src="../assets/image/nc_logo.png" alt="">
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false,
        isMarketPlacePage: false,
      }
    },
    watch: {
      routeName: function (newRoute, oldRoute) {
        if(newRoute.toLowerCase().includes("marketplace"))
          this.isMarketPlacePage = true;
        else
          this.isMarketPlacePage = false;
      }
    },
    mounted () {
      const {name} = this.$route
      if(name.toLowerCase().includes("marketplace"))
      {
        this.isMarketPlacePage = true;
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      },
      onSettingsPage() {
        this.$router.push({name:'Settings'});
      }
    }
  }

</script>
<style>
@media (min-width: 992px){
  .navbar .logo-img > img {
    height: 40px;
    display: none !important;
  }
}
.navbar .logo-img > img {
  height: 40px;
  display: inline;
}
.navbar,
.navbar .container-fluid  {
  padding-left: 0px !important;
}
.navbar .container-fluid  {
  padding-left: 0px !important;
}
.navbar .dropdown-item{
  cursor: pointer;
}
</style>
