<template>
  <div class="content jobView">
    <div class="jobBanner">
      Job Open for something at somewhere by someday
    </div>
    <div class="jobContent">
      <div class="jobInfo">
        <div class="jobDate">
          <img :src="require('../../assets/image/jobboard/calendar.png')" width=28 height=28 style="margin:5px;margin-right:10px"/>
          <div>
            <div>Date Posted</div>
            <div class="biggerText">Apr 29,2020</div>
          </div>
        </div>
        <div class="jobBudget">
          <img :src="require('../../assets/image/jobboard/budget.png')" width=28 height=28 style="margin:5px;margin-right:10px"/>
          <div>
            <div>Sallery</div>
            <div class="biggerText">10000</div>
          </div>
        </div>
        <div class="jobPoster">
          <img :src="require('../../assets/image/jobboard/user.png')" width=28 height=28 style="margin:5px;margin-right:10px"/>
          <div>
            <div>User</div>
            <div class="biggerText">David Dai</div>
          </div>
        </div>
      </div>
      <div class="jobDetail">
        <div class="jobDetailHeader">
          <img :src="require('../../assets/image/jobboard/detail.png')" width=22 height=22 style="margin-right:15px"/>
          Job Details
        </div>
        <div class="jobDetailContent">
          Amazon Seller Central
          <ul>
            <li>Ability to Create inbound FABA sihpments trcak and reconcile invetory as needed</li>
            <li>Ability to Create inbound FABA sihpments trcak and reconcile invetory as needed</li>
            <li>Ability to Create inbound FABA sihpments trcak and reconcile invetory as needed</li>
            <li>A+ Brand updateds (enhanced content)</li>
          </ul>
          Inventory Management:
          <ul>
            <li>Assessing current and foreacasted inventory needs for all countries</li>
            <li>Communicating with suppliers/manufactureers to re-order additional products</li>
            <li>Manage any disputes withAmazon Seller Central on potential errors with receiving inventory</li>
            <li>Monitoring sihpments</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import JobItem from '../../components/JobBoard/JobItem.vue'
export default {
  components: {
    JobItem
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
  }
}

</script>
<style>
.jobView .jobContent {
  display: flex;
}
.jobView .jobInfo {
  background-color: white;
  max-width: 200px;
  width: 200px;
  border-radius: 15px;
  padding-left: 15px;
  margin: 10px;
}
.jobView .biggerText {
  font-size: 17px;
}
.jobView .jobDate,
.jobView .jobBudget,
.jobView .jobPoster
{
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
}
.jobView .jobDetail {
  padding: 15px;
  background-color: white;
  border-radius: 15px;
  margin: 10px;
  flex: 1;
}
.jobView .jobDetailHeader {
  font-size: 18px;
  display: flex;
  align-items: center;
  padding: 20px 0px;
}
.jobView .jobDetailContent {
  font-size: 16px;
  line-height: 20px;
}
.jobView .jobList {
  background-color: #e5e5e5;
}
.jobView .jobBanner {
  background-image: url('../../assets/image/jobboard/job_banner1.png');
  width: calc(100% + 30px);
  height: 200px;
  background-position: center;
  background-size: cover;
  margin-left: -15px;
  margin-right: -15px;
  margin-top: -30px;
  margin-bottom: 40px;
  word-wrap: break-word;
  line-height: 44px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: Roboto !important;
  text-align: center;
  line-height: 34px;
  word-break: break-all;
}
@media (max-width: 496px){
  .jobView .jobContent {
    display: flex;
    flex-direction: column !important;
  }
  .jobView .jobInfo {
    background-color: white;
    max-width: 100% !important;
    width: calc(100% - 15px) !important;
    border-radius: 15px;
    padding-left: 15px;
    margin: 10px;
  }
}
</style>

