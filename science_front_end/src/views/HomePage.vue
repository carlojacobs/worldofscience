<template id="homepage_template">
  <div>
    <section class="section">
      <div class="container titles-container">
        <h1 class="title is-1 wos-font">Welcome to the world of science</h1>
        <h3 class="subtitle is-3">Read, learn, and share</h3>
      </div>
      <div class="container">
        <div class="is-divider" data-content="WORLD OF SCIENCE"></div>
        <h1 class="title is-3 wos-font">Spotlight</h1>
        <FrontpageArticle v-bind:articles="frontPageArticles"/>
      </div>
      <div class="container article-list-container">
        <div class="is-divider"/>
        <div class="columns">
          <div class="column">
            <h1 class="title is-3 wos-font">Fresh Articles</h1>
            <ul class="article-list">
              <li v-for="(article, index) in listArticles" :key="index">
                <ListArticle :article="article" :index="index"/>
              </li>
            </ul>
          </div>
          <div class="is-divider-vertical" data-content="OR"></div>
          <div class="column">
            <h3 class="title is-3 wos-font">Category: Physics</h3>
            <ul class="article-list">
              <li v-for="(article, index) in categoryArticles" :key="index">
                <ListArticle :article="article" :index="index"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script type="text/javascript">
  // Components
  import FrontpageArticle from '@/components/FrontpageArticle';
  import Footer from '@/components/Footer';
  import ListArticle from '@/components/ListArticle';
  import { apiUrl, emptyArticle } from '@/variables.js';

  // Axios
  import axios from 'axios';

  export default {
    name: 'HomePage',
    components: {
      FrontpageArticle,
      Footer,
      ListArticle
    },
    data() {
      return {
        frontPageArticles: [emptyArticle],
        listArticles: [emptyArticle],
        categoryArticles: [emptyArticle]
      }
    },
    methods: {
      setData(frontPageArticles, listArticles, categoryArticles) {
        this.frontPageArticles = frontPageArticles;
        this.listArticles = listArticles;
        this.categoryArticles = categoryArticles;
      }
    },
    beforeRouteEnter(to, from, next) {
      var getFrontpageArticle = () => {
        return axios.get(apiUrl + '/articles/front')
      }
      var getListArticles = () => {
        return axios.get(apiUrl + '/articles/all');
      }
      var getCategoryArticles = () => {
        return axios.get(apiUrl + '/articles/tag/physics');
      }
      axios.all([getFrontpageArticle(), getListArticles(), getCategoryArticles()]).then(axios.spread((frontPageArticles, listArticles, categoryArticles) => {
        next(vm => vm.setData(frontPageArticles.data, listArticles.data, categoryArticles.data));
      }));
    }
  }
</script>

<style media="screen">
  .titles-container {
    margin-bottom: 24px !important;
  }
  hr {
    border-top: 2px solid #bbbbbb !important;
  }
  .article-list-container {
    margin-top: 24px;
  }
</style>
