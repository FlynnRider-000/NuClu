<template>
  <div class="content jobAdd">
    <div class="jobBanner">
      Nuclu Job Posting
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-7">
          <md-field>
            <label>Job Title</label>
            <md-input></md-input>
          </md-field>
        </div>
        <div class="col-sm-5">
          <md-field>
            <label>Salary</label>
            <md-input></md-input>
          </md-field>
        </div>
        <div class="col-sm-12">
          <md-field class="jobDetails">
            <label>Job Details</label>
            <md-textarea></md-textarea>
          </md-field>
        </div>
        <div class="col-sm-12">
          <md-field>
            <label>Contacts</label>
            <md-textarea></md-textarea>
          </md-field>
        </div>
      </div>
      <div class="jobPostAction">
        <md-button class="btn-fill btn-info btn-round btn-job" v-if="this.$route.params.editable !== 1">
          Save Draft
        </md-button>
        <md-button class="btn-fill btn-round btn-success btn-job" @click="onJobPosted()">
          {{this.$route.params.editable === 1 ? "Update Job": "Post Job"}}
        </md-button>
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
  props: [
    "editable"
  ],
  methods: {
    onJobPosted() {
      if(this.$route.params.editable === 1)
        this.$router.push({name:"MyJob_List"})        
      else
        this.$router.push({name:"JobBoard_List"});
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
      }
    }
  }
}

</script>
<style>
.jobAdd {
  background-color: #d5d5d5;
}
.jobAdd .container {
  background-color: white;
  padding: 20px;
}
.jobAdd .jobPostAction {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.jobAdd .jobDetails {
  height: 250px;
}
.jobAdd .btn-job .md-button-content{
  padding: 0px 25px;
  margin: 3px 5px;
}
.jobAdd .jobBanner {
  background-image: url('../../assets/image/jobboard/job_add_banner.png');
  width: calc(100% + 30px);
  height: 200px;
  background-position: center;
  background-size: cover;
  margin-left: -15px;
  margin-right: -15px;
  margin-top: -30px; 
  word-wrap: break-word;
  line-height: 70px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-style:italic;
  font-size: 70px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: Roboto !important;
}

</style>

