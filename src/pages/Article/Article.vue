<template>
  <div class="content articleList">
    <div class="container">
      <div class="category">
        <md-chip class="md-accent" md-clickable>Beauty & Lifestyle</md-chip>
        <md-chip class="md-accent" md-clickable>Business</md-chip>
        <md-chip class="md-accent" md-clickable>Electronics</md-chip>
        <md-chip class="md-accent" md-clickable>Entertainment</md-chip>
        <md-chip class="md-accent" md-clickable>Fashion</md-chip>
        <md-chip class="md-accent" md-clickable>Science & Technology</md-chip>
      </div>
      <div class="row articles">
        <div class="col-md-12">
          <md-button class="md-fab" style="float:right" @click="$router.push({name:'Article_Add'})">
            <md-icon>add_circle</md-icon>
          </md-button>
        </div>
        <div class="col-md-3 col-sm-4" v-for="index in 10" :key="index">
          <ArticleItem :articleContent="articleInfo"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ArticleItem from '../../components/Article/ArticleItem.vue'
export default {
  components: {
    ArticleItem
  },
  data() {
    return {
      articleInfo: {
        title: 'Coffee House',
        author: 'Author of article',
        summary: 'Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.',
        date: '2020-01-11',
        category: 'Entertainment',
        description: 'As a full stack developer, you will be responsible for both back-end and front-end development including creating WordPress themes and plugins.'
      }
    }
  }
}

</script>
<style>
.articleList .category {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
}
.articleList .category .md-accent{
  background-color: rgb(28, 204, 66);
  margin: 5px;
}
.articleList .category .md-accent:hover{
  background-color: rgb(35, 158, 62) !important;
}
.articleList .articles .col-md-3,
.articleList .articles .col-sm-4 {
  padding-left: 10px !important;
  padding-right: 10px !important;
}
</style>

