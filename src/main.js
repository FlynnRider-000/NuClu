/*!

 =========================================================
 * Vue Light Bootstrap Dashboard - v2.0.0 (Bootstrap 4)
 =========================================================

 * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

/*
**
  Vue Scroll to
**
*/
var VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo);

/*
**
  LightBootstrap plugin
**
*/
import LightBootstrap from './light-bootstrap-main'
Vue.use(LightBootstrap)

/*
**
  Vue Image Upload and Resize plugin
**
*/
import ImageUploader from 'vue-image-upload-resize'
Vue.use(ImageUploader)

/*
**
  Vue Mateiral 
**
*/
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
Vue.use(VueMaterial)

/*
**
  Vue Carousel
**
*/
import VueCarousel from 'vue-carousel'
Vue.use(VueCarousel)

/*
**
  Vue Multiple Image Upload
**
*/
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

/*
**
  Vue WYSIWYG
**
*/
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css' /* import styles */
import 'quill/dist/quill.snow.css' /* for snow theme */
import 'quill/dist/quill.bubble.css' /* for bubble theme */
Vue.use(VueQuillEditor)

/*
**
  Vue Chat
**
*/
import Chat from 'vue-beautiful-chat'
Vue.use(Chat)

/*
**
  router setup
**
*/
import routes from './routes/routes'
import store from './store'
import './registerServiceWorker'
 
Vue.use(VueRouter)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
})
