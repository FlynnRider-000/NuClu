<template>
  <div class="jobBoardItem">
    <div class="jobTitle" @click="onVJob">
      {{jobInfo.title}}
    </div>
    <div class="jobInfo">
        <div>
        {{jobInfo.createdBy}}
        </div>
        <div class="jobPostDate">
        {{jobInfo.Date}}
        </div>
        <div class="jobBudget">
        $ {{jobInfo.budget}}
        </div>
    </div>
    <div class="jobDescription">
        {{jobInfo.description}}
    </div>
    <div v-if="itemType == 1">
        <div class="actionButtons">
            <md-button style="min-width:10px;" @click="onEJob"><md-icon>edit</md-icon></md-button>
            <md-button style="min-width:10px;" @click="onDJob"><md-icon>delete</md-icon></md-button>
        </div>
    </div>
  </div>
</template>
<script>

export default {
    props: {
        jobId: {
            type: Number,
        },
        jobInfo: {
            type: Object,
        },
        itemType: {
            type: Number,
        },
        jobViewHandler: {
            type: Function,
            default: function(){}
        },
        editJobHandler: {
            type: Function,
            default: function(){}
        },
        deleteJobHandler: {
            type: Function,
            default: function(){}
        }
    },
    methods: {
        onVJob() {
            this.jobViewHandler(this.jobId);
        },
        onDJob() {
            this.deleteJobHandler(this.jobId);
        },
        onEJob() {
            this.editJobHandler(this.jobId);
        }
    }
}  
</script>
<style>
.jobBoardItem {
    border-radius: 15px;
    background-color: white;
    padding: 15px;
    width: calc(100% - 10px);
    margin: 5px;
}
.jobBoardItem .actionButtons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
.jobBoardItem .jobTitle {
    font-weight: bold;
    font-size: 18px;
    padding: 10px;
    cursor: pointer;
}
.jobBoardItem .jobTitle:hover {
    color: #18C1E8;
}
.jobBoardItem .jobBudget {
    color: #18C1E8;
}
.jobBoardItem .jobInfo {
    display: flex;
    flex-direction: row;
}
.jobBoardItem .jobInfo > div{
    display: flex;
    flex-direction: row;
    padding: 5px;
}
.jobBoardItem .jobPostDate {
    font-style: italic;
}
.jobBoardItem .jobDescription {
    font-size: 16px;
    padding: 5px;
}
</style>
