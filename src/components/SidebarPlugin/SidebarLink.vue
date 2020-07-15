<template>
  <div>
    <component :is="tag"
              @click.native="hideSidebar"
              v-bind="$attrs"
              v-if="$attrs.to !== '/none'"
              tag="li">
      <a class="nav-link" v-bind="$attrs">
        <slot>
          <i v-if="link.icon" :class="link.icon"></i>
          <p>{{link.name}}</p>
        </slot>
      </a>
    </component>
    <li v-if="$attrs.to === '/none'">
      <a class="nav-link">
        <slot>
          <i v-if="link.icon" :class="link.icon"></i>
          <p>{{link.name}}</p>
        </slot>
      </a>
    </li>
  </div>
</template>
<script>
  export default {
    inheritAttrs: false,
    inject: {
      autoClose: {
        default: true
      }
    },
    props: {
      link: {
        type: [String, Object],
        default: () => {
          return {
            name: '',
            path: '',
            icon: ''
          }
        }
      },
      tag: {
        type: String,
        default: 'router-link'
      }
    },
    methods: {
      hideSidebar () {
        if (this.autoClose && this.$sidebar && this.$sidebar.showSidebar === true) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }
</script>
<style>
.inactive-menu .nav-link {
  background: none !important;
}
.sub-menu .nav-link{
  padding-left: 58px !important;
}
</style>
