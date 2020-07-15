<template>
  <ul class="nav nav-mobile-menu">
    <base-dropdown>
      <template slot="title">
        <i class="fa fa-globe"></i>
        <b class="caret"></b>
        <span class="notification">5 Notifications</span>
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
      <a href="#" class="nav-link">
        <i class="nc-icon nc-zoom-split hidden-lg-up"></i>
        <span class="d-lg-none">Search</span>
      </a>
    </li>
    <base-dropdown>
      <template slot="title">
        <i class="fa fa-cog"></i>
        <b class="caret"></b>
        <span class="notification">Settings</span>
      </template>
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </base-dropdown>

    <li class="nav-item">
      <a class="nav-link" href="#pablo">
        <span class="no-icon">Log out</span>
      </a>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'mobile-menu'
  }
</script>
<style>
</style>
