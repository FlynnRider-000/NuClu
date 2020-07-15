<template>
    <div class="jobPostToolBar">
        <md-button class="btn-fill btn-info btn-round" style="padding: 0px 25px; margin:3px 5px;" @click="toJobPost()">
            Job Post
        </md-button>
        <md-button class="btn-fill btn-warning btn-round" style="padding: 0px 25px; margin:3px 5px;" @click="viewAllJobs()">
            All Jobs
        </md-button>
        <md-button class="btn-fill btn-round btn-success" style="padding: 0px 25px; margin:3px 5px;" @click="viewMyJobs()">
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
</style>

