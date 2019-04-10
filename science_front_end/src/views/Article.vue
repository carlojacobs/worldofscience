<template id="article-template">
  <div>
    <section class="hero is-medium is-info" v-bind:style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url(' + article.imageUrl + ') !important' }">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">{{article.title}}</h1>
          <h4 class="subtitle is-4">{{article.subtitle}} <br> By <strong>{{article.author}}</strong></h4>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container content body" v-html="article.body"></div>
    </section>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios';

  export default {
    name: 'Article',
    data() {
      return {
        article: {
          title: String,
          subtitle: String,
          body: String,
          imageUrl: String
        }
      }
    },
    methods: {
      setData(article) {
        this.article = article;
      }
    },
    beforeRouteEnter(to, from, next) {
      const id = to.params.id;
      const url = 'http://localhost:3000/articles/article/' + id
      axios.get(url).then(res => {
        next(vm => vm.setData(res.data));
      }).catch(err => {
        console.log(err);
      });
    }
  }
</script>

<style>
  .hero {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .body {
    margin-top: 24px;
  }
</style>
