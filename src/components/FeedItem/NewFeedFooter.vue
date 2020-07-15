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
            <mdb-modal size="md" :show="modal" @close="modal = false">
                <mdb-modal-header>
                    <mdb-modal-title>Leave Comments</mdb-modal-title>
                </mdb-modal-header>
                <mdb-modal-body>
                    <mdb-input
                        wrapperClass="pink-textarea"
                        type="textarea"
                        label="Your comments here...."
                    />
                </mdb-modal-body>
                <mdb-modal-footer>
                    <md-button @click="modal = false" class="btn-info btn-fill btn-xs">
                        Cancel
                    </md-button>
                    <md-button class="btn-primary btn-fill btn-xs">
                        Leave
                    </md-button>
                </mdb-modal-footer>
            </mdb-modal>
        </div>
    </div>       
</template>
<script>

import { mdbBtn, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbInput } from 'mdbvue';

export default {
    components: {
        mdbModal,
        mdbModalHeader,
        mdbModalTitle,
        mdbModalBody,
        mdbModalFooter,
        mdbBtn,
        mdbInput,
    },
    data() {
        return {
            modal: false,
        }
    },
    methods: {
        onComments: function(){
        this.modal = true;
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