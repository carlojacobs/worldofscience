<template id="frontpage-article-template">
  <div class="article-body" v-bind:style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url(' + articles[this.articleIndex].imageUrl + ') !important' }" v-on:click="navigateToFrontpageArticle">
      <div class="article-headers">
        <h1 class="article-title title is-3">{{this.getArticle().title}}</h1>
        <h3 class="article-subtitle subtitle is-4">{{this.getArticle().subtitle}} <br> By <i>{{this.getArticle().author}}</i></h3>
        <progress class="progress frontpage-progress is-info" v-bind:value="(timeProgress/timeInterval)*100" max="100"/>
      </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'FrontpageArticle',
    props: {
      articles: {
        _id: String,
        title: String,
        subtitle: String,
        body: String,
        author: String,
        imageUrl: String
      }
    },
    data() {
      return {
        articleIndex: 0,
        timeProgress: 0,
        timeInterval: 8000
      }
    },
    methods: {
      navigateToFrontpageArticle() {
        this.$router.push('/article/' + this.getArticle()._id);
      },
      nextArticle() {
        if (this.articleIndex < this.articles.length - 1) {
          this.articleIndex += 1;
        } else {
          this.articleIndex = 0;
        }
        this.timeProgress = 0;
      },
      getArticle() {
        return this.articles[this.articleIndex];
      }
    },
    created() {
      this.interval = setInterval(() => this.nextArticle(), this.timeInterval);
      this.interval2 = setInterval(() => {
        this.timeProgress += 10
      }, 10);
    }
  }
</script>

<style media="screen">
  .article-body {
    color: white;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;
    position: relative;
    border-radius: 5px;
    cursor: pointer;
    padding: 2em !important;
    transition: .2s;
    box-shadow: 8px 8px 8px grey;
  }
  /* Hover zoom animation */
  .article-body:hover,
  .article-body:focus {
    transform: scale(0.95);
    transition-delay: .05s;
  }
  .article-body:hover .article-title,
  .article-body:focus .article-title {
    text-decoration: underline;
  }
  .article-headers {
    position: absolute !important;
    color: white;
    /* bottom: 2em; */
  }
  .article-title {
    font-weight: bold !important;
    color: white !important;
  }
  .article-subtitle {
    color: white !important;
  }
  .frontpage-progress {
    border-radius: 5px;
    width: 50%;
  }

  @media only screen and (max-width: 768px) {
    .article-body {
      width: 100%;
    }
  }
</style>
