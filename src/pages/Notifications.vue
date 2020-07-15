<template>
  <div class="content">
    <div class="container-fluid">
      <card>
        <div class="places-buttons">
          <div class="row justify-content-center">
            <div class="col-md-3 col-md-offset-1">
              <button class="btn btn-default btn-block" @click="notifyVue('top', 'left')">Top Left</button>
            </div>
            <div class="col-md-3">
              <button class="btn btn-default btn-block" @click="notifyVue('top', 'center')">Top Center</button>
            </div>
            <div class="col-md-3">
              <button class="btn btn-default btn-block" @click="notifyVue('top', 'right')">Top Right</button>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-3 col-md-offset-1">
              <button class="btn btn-default btn-block" @click="notifyVue('bottom', 'left')">Bottom Left</button>
            </div>
            <div class="col-md-3">
              <button class="btn btn-default btn-block" @click="notifyVue('bottom', 'center')">Bottom Center</button>
            </div>
            <div class="col-md-3">
              <button class="btn btn-default btn-block" @click="notifyVue('bottom', 'right')">Bottom Right</button>
            </div>

          </div>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import Card from 'src/components/Cards/Card.vue'

export default {
  components: {
    Card
  },
  data () {
    return {
      type: ['', 'info', 'success', 'warning', 'danger'],
      notifications: {
        topCenter: falsea
      }
    }
  },
  methods: {
    notifyVue (verticalAlign, horizontalAlign) {
      const color = Math.floor((Math.random() * 4) + 1)
      this.$notifications.notify(
        {
          message: `<span><b>Notification</b> - Simple Notification Example.</span>`,
          icon: 'nc-icon nc-bell-55',
          horizontalAlign: horizontalAlign,
          verticalAlign: verticalAlign,
          type: this.type[color]
        })
    }
  }
}

</script>
<style lang="scss">

</style>
