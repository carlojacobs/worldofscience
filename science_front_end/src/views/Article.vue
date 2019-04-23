<template id="article-template">
  <div>
    <section class="hero is-medium is-info" v-bind:style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url(' + article.imageUrl + ') !important' }">
      <div class="hero-body">
        <div class="container article-container">
          <h1 class="title is-2">{{article.title}}</h1>
          <h4 class="subtitle is-4">{{article.subtitle}} <br> By <strong>{{article.author}}</strong> on {{article.date}}</h4>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container article-container content body" v-html="article.body"></div>
    </section>
    <Footer/>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios';
  import { apiUrl } from '@/variables.js';
  import Footer from '@/components/Footer';

  export default {
    name: 'Article',
    components: {
      Footer
    },
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
      const url = apiUrl + '/articles/article/' + id
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
    /* padding: 0 4em; */
  }
  .article-container {
    padding: 0 10em;
  }
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    .article-container {
      padding: 0;
    }
  }
</style>
