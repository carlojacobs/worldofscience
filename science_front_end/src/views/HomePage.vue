<template id="homepage-template">
  <div>
    <section class="section">
      <div class="container titles-container">
        <h1 class="title is-1 wos-font">Welcome to the world of science</h1>
        <h3 class="subtitle is-3">Read, learn, and share</h3>
      </div>
      <div class="container spotlight-container">
        <hr>
        <h1 class="title is-3 wos-font">Spotlight</h1>
        <!-- <FrontpageArticle v-bind:articles="frontPageArticles"/> -->
        <FrontPageCarousel :articles="frontPageArticles"/>
      </div>
      <div class="container fresh-container">
        <h2 class="title is-3 wos-font">Fresh Stories</h2>
        <div class="fresh-articles-container">
          <div v-for="(article, index) in freshArticles" class="fresh-article">
            <ListArticle :article="article" :key="index"/>
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
  import FrontPageCarousel from '@/components/FrontPageCarousel';

  // Axios
  import axios from 'axios';

  export default {
    name: 'HomePage',
    components: {
      FrontpageArticle,
      Footer,
      ListArticle,
      FrontPageCarousel
    },
    data() {
      return {
        frontPageArticles: [emptyArticle],
        freshArticles: [emptyArticle],
        categoryArticles: [emptyArticle]
      }
    },
    methods: {
      setData(frontPageArticles, freshArticles, categoryArticles) {
        this.frontPageArticles = frontPageArticles;
        this.categoryArticles = categoryArticles;
        this.freshArticles = freshArticles;
      }
    },
    beforeRouteEnter(to, from, next) {
      var getFrontpageArticle = () => {
        return axios.get(apiUrl + '/front')
      }
      var getFreshArticles = () => {
        return axios.get(apiUrl + '/fresh/6');
      }
      var getCategoryArticles = () => {
        return axios.get(apiUrl + '/tag/physics');
      }
      axios.all([getFrontpageArticle(), getFreshArticles(), getCategoryArticles()]).then(axios.spread((frontPageArticles, freshArticles, categoryArticles) => {
        next(vm => vm.setData(frontPageArticles.data, freshArticles.data, categoryArticles.data));
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
  .fresh-container {
    margin-top: 2rem;
  }
  .fresh-articles-container {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    height: 100%;
    flex-wrap: wrap;
  }
  .fresh-article {
    display: flex;
    padding: 0 .5rem;
    width: 33%;
  }
  @media(max-width:768px) {
    .fresh-article {
      width: 50%;
    }
  }
</style>
