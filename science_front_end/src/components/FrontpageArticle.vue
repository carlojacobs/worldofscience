<template id="frontpage-article-template">
  <div class="article-body container" v-bind:style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.7)),url(' + articles[this.articleIndex].imageUrl + ') !important' }" v-on:click="navigateToFrontpageArticle">
      <div class="article-headers">
        <h1 class="article-title">{{articles[this.articleIndex].title}}</h1>
        <h3 class="article-subtitle">{{articles[this.articleIndex].subtitle}}</h3>
        <br>
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
        this.$router.push('/article/' + this.articles[this.articleIndex]._id);
      },
      nextArticle() {
        if (this.articleIndex < this.articles.length - 1) {
          this.articleIndex += 1;
        } else {
          this.articleIndex = 0;
        }
        this.timeProgress = 0;
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
    /* background-image: linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.7)),url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'); */
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;
    position: relative;
    border-radius: 5px;
    cursor: pointer;
    /* transition: .2s; */
  }
  /* Hover zoom animation */
  /* .article-body:hover,
  .article-body:focus {
    transform: scale(0.95);
    transition-delay: .05s;
  } */
  .article-body:hover .article-title,
  .article-body:focus .article-title {
    text-decoration: underline;
  }
  .article-headers {
    position: absolute;
    color: white;
    bottom: 1.5em;
    left: 2em;
  }
  .article-title {
    font-size: 30px;
    font-weight: bold;
  }
  .article-subtitle {
    font-size: 20px;
  }
  .frontpage-progress {
    border-radius: 5px;
  }
</style>
