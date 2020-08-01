<template>
  <div class="content jobList">
    <div class="jobBanner">
      NUCLU JOB BOARD
    </div>
    <div class="container">
      <div class="searchInput">
        <input type="text" style="font-size: 15px;padding:6px;border:none;width:200px;" placeholder="Search">
        <div>
          <img :src="require('../../assets/image/viewprofile/search-icon.png')" width="32" height="32">
        </div>
      </div>
      <JobBoardToolbar/>
      <div class="JobItemList">
        <JobItem v-for="index in 10" :jobInfo="jobInfo"  :itemType="0" :jobId="index" :key="index" :jobViewHandler="onJobView"/>
      </div>
    </div>
  </div>
</template>
<script>

import JobItem from '../../components/JobBoard/JobItem.vue'
import JobBoardToolbar from '../../components/JobBoard/JobBoardToolBar'

export default {
  components: {
    JobItem,
    JobBoardToolbar
  },
  data() {
    return {
      jobInfo: {
        title: 'Full Stack Developer (Home Based)',
        createdBy: 'Website Admin',
        Date: 'Apr 29,2020',
        budget: 1000,
        description: 'As a full stack developer, you will be responsible for both back-end and front-end development including creating WordPress themes and plugins.'
      }
    }
  },
  methods: {
    onJobView(id) {
      this.$router.push({name: 'JobBoard_Detail'});
    }
  },
}

</script>
<style>
.jobList {
  background-color: #d5d5d5;
}
.jobList .jobPostToolBar {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.jobList .searchInput {
  display: flex;
  justify-content: center;
  margin: 20px;
}
.jobList .searchInput div {
  cursor: pointer;
  width: 32px;
  height: 32px;
}
.jobList .searchInput div:hover {
  box-shadow: 1px 1px 2px grey;
}
.jobList .jobBanner {
  background-image: url('../../assets/image/jobboard/job_banner.png');
  width: calc(100% + 30px);
  height: 200px;
  background-position: center;
  background-size: cover;
  margin-left: -15px;
  margin-right: -15px;
  margin-top: -30px; 
  word-wrap: break-word;
  line-height: 44px;
  text-align: center;
  
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 44px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: Roboto !important;
}
.jobList .JobItemList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
}
.jobList .JobItemList > div{
  width: calc(50% - 10px);
}
@media (max-width: 576px) {
  .jobList .JobItemList > div{
    width: calc(100% - 10px);
  } 
}
</style>