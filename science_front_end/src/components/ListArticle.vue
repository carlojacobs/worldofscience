<template id="list-article-template">
  <div class="list-article box" v-on:click="navigateToArticle">
    <figure class="image">
      <img v-bind:src="article.imageUrl" class="article-image">
    </figure>
    <div class="list-article-content">
      <h6 class="title is-5"><span class="title-span">{{article.title}}</span></h6>
      <h5 class="subtitle is-6 list-article-subtitle">{{article.subtitle}} <br><br> By <i>{{article.author}}</i> | {{article.date}}</h5>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'ListArticle',
    props: {
      article: {
        _id: String,
        title: String,
        subtitle: String,
        body: String,
        author: String,
        imageUrl: String,
        date: String
      }
    },
    methods: {
      navigateToArticle() {
        this.$router.push('/article/' + this.article._id);
      }
    }
  }
</script>

<style media="screen">
  .list-article {
    cursor: pointer;
    margin: .5rem 0;
  }
  .article-image {
    border-radius: 5px;
    /*transition: .2s;*/
    box-shadow: 5px 5px 5px grey;
    transition: .2s;
  }
  .list-article:hover .title-span,
  .list-article:focus .title-span {
    /*text-decoration: underline;*/
  }
  .list-article:hover .article-image,
  .list-article:focus .article-image {
    transform: scale(0.9);
    transition-delay: .05s;
  }
  .list-article-content {
    margin-top: 1rem;
  }
</style>
