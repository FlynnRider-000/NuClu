<template>
    <div class="jobPostToolBar">
        <md-button class="btn-fill btn-info btn-round btn-job" @click="toJobPost()">
            Job Post
        </md-button>
        <md-button class="btn-fill btn-warning btn-round btn-job" @click="viewAllJobs()">
            All Jobs
        </md-button>
        <md-button class="btn-fill btn-round btn-success btn-job" @click="viewMyJobs()">
            My Jobs
        </md-button>
    </div>
</template>
<script>

export default {
  methods: {
    toJobPost() {
      this.$router.push({name: 'JobBoard_Add'});
    },
    viewAllJobs() {
      this.$router.push({name: 'JobBoard_List'});
    },
    viewMyJobs() {
      this.$router.push({name: 'MyJob_List'});
    }
  },
}

</script>
<style>
.jobPostToolBar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.jobPostToolBar .btn-job .md-button-content{
  padding: 0px 25px;
  margin: 3px 5px;
}
</style>

