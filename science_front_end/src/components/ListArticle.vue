<template id="list-article-template">
  <div class="list-article" v-on:click="navigateToArticle">
    <div class="columns">
      <div class="column is-onefourths image-column">
        <figure class="image">
          <img v-bind:src="article.imageUrl" class="article-image">
        </figure>
      </div>
      <div class="column is-threefourths info-column">
        <h6 class="title is-5"><span class="index">{{index + 1}}. </span> <span class="title-span">{{article.title}}</span></h6>
        <h5 class="subtitle is-6">{{article.subtitle}} <br> By <i><strong>{{article.author}}</strong></i></h5>
      </div>
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
        imageUrl: String
      },
      index: Number
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
  }
  .article-image {
    border-radius: 5px;
    transition: .2s;
  }
  .list-article:hover .article-image,
  .list-article:focus .article-image {
    transform: scale(0.9);
    transition-delay: .05s;
  }
  .list-article:hover .title-span,
  .list-article:focus .title-span {
    text-decoration: underline;
  }
  .index {
    color: #afafaf;
    text-decoration: none !important;
  }
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    .image-column {
      /* display: none; */
    }
    .subtitle {
      display: none;
    }
  }
</style>
