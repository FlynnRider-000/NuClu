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
    </div>
    <div class="JobItemList">
      <JobItem v-for="index in 10" :jobInfo="jobInfo"  :itemType="1" :jobId="index" :key="index" :jobViewHandler="onJobView" :editJobHandler="onEditJob" :deleteJobHandler="onDeleteJob"/>
    </div>
    <mdb-modal direction="down" :show="confirm" @close="confirm = false" size="sm" class="text-center" danger centered>
        <mdb-modal-header center :close="false">
            <p class="heading">Are you sure?</p>
        </mdb-modal-header>
        <mdb-modal-body>
            <mdb-icon icon="times" size="4x" class="animated rotateIn"/>
        </mdb-modal-body>
        <mdb-modal-footer center>
            <md-button class="btn-fill btn-round btn-danger" style="padding: 0px 25px; margin:3px 5px;" @click="confirm = false">
                Yes
            </md-button>
            <md-button class="btn-outline btn-round btn-danger" style="padding: 0px 25px; margin:3px 5px;" @click="confirm = false">
                No
            </md-button>
        </mdb-modal-footer>
    </mdb-modal>
  </div>
</template>
<script>

import { mdbRow, mdbColumn, mdbBtn, mdbIcon, mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter } from 'mdbvue';
import JobItem from '../../components/JobBoard/JobItem.vue'
import JobBoardToolbar from '../../components/JobBoard/JobBoardToolBar'

export default {
  components: {
    JobItem,
    JobBoardToolbar,
    mdbRow,
    mdbColumn,
    mdbBtn,
    mdbIcon,
    mdbModal,
    mdbModalHeader,
    mdbModalBody,
    mdbModalFooter
  },
  methods: {
    onJobView(id) {
      this.$router.push({name: 'JobBoard_Detail'});
    },
    onEditJob(id) {
      this.$router.push({name: 'JobBoard_Add',params:{editable:1}});
    },
    onDeleteJob(id) {
      this.confirm = true;
    }
  },
  data() {
    return {
      jobInfo: {
        title: 'Full Stack Developer (Home Based)',
        createdBy: 'Website Admin',
        Date: 'Apr 29,2020',
        budget: 1000,
        description: 'As a full stack developer, you will be responsible for both back-end and front-end development including creating WordPress themes and plugins.'
      },
      confirm: false,
    }
  }
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