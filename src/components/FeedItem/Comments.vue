<template>
    <div class="feedItemComment">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-5">
                    <div class="indicator">
                    </div>
                    <div class="userName">
                        Sidney Ondap
                    </div>
                </div>
                <div class="col-md-8 col-sm-7">
                    <div class="comment">
                        Wow nice photo! I would like to know and ask you regarding on tips.
                    </div>
                </div>
            </div>
        </div>
    </div>       
</template>
<script>

</script>
<style>
.feedItemComment{
    background-color: #D9D9D9;
    border-radius: 40px;    
    max-width: 100%;
    margin: 3px;
}
.feedItemComment .row .col-sm-5{
    display: flex;
    flex-direction: 'row';
    align-items: center;
    padding: 10px;
}
.feedItemComment .row .col-sm-7{
    display: flex;
    flex-direction: 'row';
    align-items: center;
    padding: 5px;
}
.feedItemComment .indicator {
    border-radius: 20px;
    background-color: white;
    height: 40px;
    width: 40px;
    min-width: 40px;
    min-height: 40px;
    margin-right:10px;
}
.feedItemComment .userName {
    overflow: hidden;
}
.feedItemComment .comment {
    background-color: white;
    width: 100%;
    overflow: hidden;
    border-radius: 50px;
    padding: 5px 20px;
    font-size: 12px;
    min-height: 100%;
}
@media (max-width: 576px) {
    .feedItemComment {
        border-radius: 10px;    
    }
    .feedItemComment .comment {
        border-radius: 10px;
    }
}
</style>