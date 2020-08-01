<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/landingPage">
        <i class="fa fa-tv"></i>
        <p>Landing Page</p>
      </sidebar-link>
      <sidebar-link to="/nuclu/newsfeed">
        <img :src="require('../assets/image/sidebar/newsfeed.png')" width=30 height=28 style="margin-right:15px;">
        <p>News Feed</p>
      </sidebar-link>
      <sidebar-link to="/nuclu/notifications">
        <img :src="require('../assets/image/sidebar/notification.png')" width=26 height=24 style="margin-right:15px;">
        <p>Notifications</p>
      </sidebar-link>
      <sidebar-link to="/nuclu/connection">
        <img :src="require('../assets/image/sidebar/connections.png')" width=30 height=28 style="margin-right:15px;">
        <p>Connections</p>
      </sidebar-link>
      <sidebar-link to="/nuclu/message">
        <i class="nc-icon nc-email-83"></i>
        <p>Messages</p>
      </sidebar-link>
      <sidebar-link to="/nuclu/marketplace/productlist">
        <img :src="require('../assets/image/sidebar/market.png')" width=30 height=28 style="margin-right:15px;">
        <p>Marketplace</p>
      </sidebar-link>
      <sidebar-link to="/nuclu/marketplace/trendinglist">
        <img :src="require('../assets/image/sidebar/trending.png')" width=30 height=28 style="margin-right:15px;">
        <p>Trending Items</p>
      </sidebar-link>
      <sidebar-link to="/nuclu/jobboard/list">
        <img :src="require('../assets/image/sidebar/jobboard.png')" width=30 height=28 style="margin-right:15px;">
        <p>Job Board</p>
      </sidebar-link>
      <sidebar-link to="/nuclu/viewProfile/Bio">
        <i class="fa fa-user-circle-o"></i>
        <p>User Profile</p>
      </sidebar-link>
      <sidebar-link to="/nuclu/article/list">
        <i class="fa fa-newspaper-o" style="font-size:27px;"></i>
        <p>Article</p>
      </sidebar-link>
      <sidebar-link class="inactive-menu" to="/none">
        <i class="fa fa-question-circle"></i>
        <p>Help</p>
      </sidebar-link>
          <sidebar-link to="/nuclu/help/about" class="sub-menu">
            <p>About</p>
          </sidebar-link>
          <sidebar-link to="/nuclu/help/privacy" class="sub-menu">
            <p>Privacy</p>
          </sidebar-link>
          <sidebar-link to="/nuclu/help/termsconditions" class="sub-menu">
            <p>Terms and Conditions</p>
          </sidebar-link>
          <sidebar-link to="/nuclu/help/faq" class="sub-menu">
            <p>FAQ</p>
          </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
