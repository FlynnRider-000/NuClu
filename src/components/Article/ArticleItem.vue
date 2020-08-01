<template>
  <div class="articleItem md-elevation-12">
    <md-card class="md-card-example">
      <md-card-area md-inset>
        <md-card-media md-ratio="16:9">
          <img src="http://hdwpro.com/wp-content/uploads/2019/05/Top-Lake-Image.jpeg">
        </md-card-media>

        <md-card-header>
          <h2 class="md-title" @click="$router.push({name:'Article_View'})">{{articleContent.title}}</h2>
          <div class="md-subhead vcIcontext">
              <md-icon>apps</md-icon>
              {{articleContent.category}}
          </div>
        </md-card-header>

        <md-card-content>
          {{articleContent.summary}}
        </md-card-content>
      </md-card-area>

      <md-card-content>
        <h3 class="md-body-1">Date published</h3>
        <div class="card-reservation vcIcontext">
            <md-icon>access_time</md-icon>
            {{articleContent.date}}
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
  export default {
    props: {
      articleContent: {
        type: Object
      }
    }
  };
</script>
<style>
.articleItem {
  margin: 10px 0px;
  cursor: pointer;
}
.articleItem .md-icon {
  margin: 0px !important;
}
.articleItem .md-title:hover {
  color: black;
  text-shadow: 0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1);
}
.articleItem .md-card-media img {
  height: 100%;
  object-fit: cover;
}
.articleItem .vcIcontext {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
