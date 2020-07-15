import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// pages
import SignIn from 'src/pages/SignIn.vue'
import AddProfilePicture from 'src/pages/signUp/addProfilePicture.vue'
import AddFriend from 'src/pages/signUp/addFriends.vue'
import FollowPeople from 'src/pages/signUp/followPeople.vue'

import About from 'src/pages/Help/About.vue'
import Privacy from 'src/pages/Help/Privacy.vue'
import TermsConditions from 'src/pages/Help/TermsConditions.vue'
import Faq from 'src/pages/Help/Faq.vue'

import Connection from 'src/pages/Connection.vue'
import Bio from 'src/pages/UserProfile/Bio.vue'
import Timeline from 'src/pages/UserProfile/Timeline.vue'
import Friends from 'src/pages/UserProfile/Friends.vue'
import Products from 'src/pages/UserProfile/Products.vue'
import ProductDetail from 'src/pages/UserProfile/ProductDetail.vue'

import NewsFeed from 'src/pages/NewsFeed/NewsFeed.vue'
import NewsFeedView from 'src/pages/NewsFeed/NewsFeedView.vue'

import LandingPage from 'src/pages/LandingPage.vue'
import Icons from 'src/pages/Icons.vue'
import Notifications from 'src/pages/Notifications.vue'
import Message from 'src/pages/Messages.vue'
import VideoCall from 'src/pages/VideoChat.vue'

import MarketplaceListing from 'src/pages/Marketplace/ProductsList.vue'
import MarketPlaceProductDetail from 'src/pages/Marketplace/ProductDetail.vue'
import MarketPlaceAccount from 'src/pages/Marketplace/MarketPlaceAccount.vue'
import CustomerService from 'src/pages/Marketplace/CustomerService.vue'
import MarketPlaceCart from 'src/pages/Marketplace/MarketPlaceCart.vue'

import JobList from 'src/pages/JobBoard/JobList.vue'
import MyJobList from 'src/pages/JobBoard/MyJobList.vue'
import JobDetail from 'src/pages/JobBoard/JobDetail.vue'
import JobPost from 'src/pages/JobBoard/JobPost.vue'

import TrendingItem from 'src/pages/Marketplace/TrendingList.vue'

import Setting from 'src/pages/Setting.vue'

const routes = [
  {
    path: '/',
    redirect: '/signin'
  },
  {
    path: '/signin',
    component: SignIn 
  },
  {
    path: '/landingPage',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/addFollowPeople',
    name: 'FollowPeopleAdd',
    component: FollowPeople,
    props: true
  },
  {
    path: '/addProfilePicture',
    name: 'ProfilePictureAdd',
    component: AddProfilePicture,
    props: true
  },
  {
    path: '/addFriends',
    name: 'AddFriends',
    component: AddFriend,
    props: true
  },
  {
    path: '/nuclu',
    component: DashboardLayout,
    redirect: '/nuclu/overview',
    children: [
      {
        path: 'connection',
        name: 'Connection',
        component: Connection,
      },
      {
        path: 'settings',
        name: 'Settings',
        component: Setting
      },
      {
        path: 'newsfeed',
        name: 'NewsFeed',
        component: NewsFeed
      },
      {
        path: 'newsfeedview',
        name: 'NewsFeedView',
        component: NewsFeedView
      },
      {
        path: 'jobboard/list',
        name: 'JobBoard_List',
        component: JobList
      },
      {
        path: 'jobboard/detail',
        name: 'JobBoard_Detail',
        component: JobDetail
      },
      {
        path: 'jobboard/addjob',
        name: 'JobBoard_Add',
        component: JobPost,
      },
      {
        path: 'jobboard/mylist',
        name: 'MyJob_List',
        component: MyJobList
      },
      {
        path: 'message',
        name: 'Message',
        component: Message
      },
      {
        path: 'videocall',
        name: 'VideoCall',
        component: VideoCall,
      },
      {
        path: 'marketplace/trendinglist',
        name: 'MarketPlace_TrendingList',
        component: TrendingItem,
      },
      {
        path: 'marketplace/productlist',
        name: 'MarketPlace_ProductList',
        component: MarketplaceListing,
      },
      {
        path: 'marketplace/cart',
        name:'MarketPlace_Cart',
        component: MarketPlaceCart
      },
      {
        path: 'marketplace/productdetail',
        name: 'MarketPlace_ProductDetail',
        component: MarketPlaceProductDetail,
      },
      {
        path: 'marketplace/account',
        name: 'MarketPlace_Account',
        component: MarketPlaceAccount,
      },
      {
        path: 'marketplace/customerservice',
        name: 'MarketPlace_CustomerService',
        component: CustomerService,
      },
      {
        path: 'viewProfile/Bio',
        name: 'Profile_Bio',
        component: Bio
      },
      {
        path: 'viewProfile/Timeline',
        name: 'Profile_Timeline',
        component: Timeline
      },
      {
        path: 'viewProfile/Products',
        name: 'Profile_Products',
        component: Products
      },
      {
        path: 'viewProfile/Friends',
        name: 'Profile_Friends',
        component: Friends
      },
      {
        path: 'viewProfile/ProductDetail',
        name: 'product-detail-view',
        component: ProductDetail
      },
      {
        path: 'help/about',
        name: 'About',
        component: About
      },
      {
        path: 'help/privacy',
        name: 'Privacy',
        component: Privacy
      },
      {
        path: 'help/faq',
        name: 'Faq',
        component: Faq
      },
      {
        path: 'help/termsconditions',
        name: 'TermsConditions',
        component: TermsConditions
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
