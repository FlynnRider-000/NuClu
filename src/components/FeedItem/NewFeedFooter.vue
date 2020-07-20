<template>
    <div>
        <div class="feedItemFooter">
            <div>
                <img :src="require('../../assets/image/timeline/subway_like.png')" width=20 height=20 style="margin:5px;"/>
                <img :src="require('../../assets/image/timeline/laugh.png')" width=25 height=24 style="margin:2px;"/>
                <img :src="require('../../assets/image/timeline/sad.png')" width=20 height=20 style="margin:5px;"/>
                <img :src="require('../../assets/image/timeline/angry.png')" width=20 height=20 style="margin:5px;"/>
                <img :src="require('../../assets/image/timeline/astonish.png')" width=20 height=20 style="margin:5px;"/>
                <img :src="require('../../assets/image/timeline/bx-bxs-share.png')" width=20 height=20 style="margin:5px;"/>
            </div>
            <div class="btn btn-info btn-fill btn-xs" @click="onComments()">Comments</div>
        </div>
        <div>
            <md-dialog-prompt
                :md-active.sync="commentModal"
                v-model="commentValue"
                md-title="Leave Comments"
                md-input-placeholder="Your comments here..."
                md-confirm-text="Leave" 
                class="md-custom-theme-light"
            />
        </div>
    </div>       
</template>
<script>


export default {
    data() {
        return {
            commentModal: false,
            commentValue: "",
        }
    },
    methods: {
        onComments: function(){
        this.commentModal = true;
        }
    }
}
</script>
<style>
.feedItemFooter{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    justify-content: space-between;
    margin-top: 20px;
}

</style>