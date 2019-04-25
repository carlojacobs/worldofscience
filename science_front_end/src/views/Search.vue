<template>
	<section class="section">
		<div class="container">
			<h1 class="title is-1">Search</h1>
			<h3 class="subtitle is-3">Find stories by title.</h3>
			<form>
				<div class="field">
				  <div class="control">
				    <input class="input is-medium" type="text" v-model="searchQuery" placeholder="Find an article...">
				  </div>
				</div>
			</form>
			<div class="filtered-articles-container" v-if="(searchQuery !== '')">
	      <div v-for="(article, index) in filteredArticles" class="filtered-article">
	        <ListArticle :article="article" :key="index"/>
	      </div>
	    </div>
	    <div class="filtered-articles-container" v-if="(searchQuery == '')">
		    <p >Results...</p>    	
	    </div>
		</div>
	</section>
</template>

<script>
	import { apiUrl } from '@/variables.js';
	import axios from 'axios';
	import ListArticle from '@/components/ListArticle';

	export default {
		name: 'Search',
		components: {
			ListArticle
		},
		data() {
			return {
				searchQuery: '',
				articles: [],
				loading: true
			}
		},
		methods: {
			setData(articles) {
				this.articles = articles;
			}
		},
		computed: {
			filteredArticles: function() {
				return this.articles.filter((article) => {
					return article.title.toLowerCase().match(this.searchQuery.toLowerCase());
				});
			}
		},
		beforeRouteEnter(to, from, next) {
      var url = apiUrl + '/articles/all';
      axios.get(url).then(res => {
        next(vm => vm.setData(res.data));
      }).catch(err => {
      	console.log(err);
      });
    }
	}
</script>

<style>
	.filtered-articles-container {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    height: 100%;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
  .filtered-article {
    display: flex;
    padding: 0 .5rem;
    width: 33%;
  }
  @media(max-width:768px) {
    .filtered-article {
      width: 50%;
    }
  }
</style>