<template>
<section class="section">
	<div class="container">
		<h1 class="title is-1">Categories</h1>
		<h3 class="subtitle is-3">Find stories by topic.</h3>
		<div class="tabs is-boxed">
		  <ul>
		  	<div v-for="category in categories"><li :class="{'is-active': (activeCategory == category.key)}" v-on:click="switchCategory(category.key)"><a>{{category.title}}</a></li></div>
		  </ul>
		</div>
		<div class="category-articles-container">
      <div v-for="(article, index) in articles" class="category-article">
        <ListArticle :article="article" :key="index"/>
      </div>
    </div>
	</div>
</section>
</template>

<script>
  import { apiUrl, emptyArticle } from '@/variables.js';
  import ListArticle from '@/components/ListArticle';
	import axios from 'axios';

	export default {
		name: 'Categories',
		components: {
			ListArticle
		},
		data() {
			return {
				categories: [
					{title: "General", key: "general"},
					{title: "Physics", key: "physics"},
					{title: "Biology", key: "biology"},
					{title: "Chemistry", key: "chemistry"},
					{title: "Computer Science", key: "compsi"},
					{title: "Mathematics", key: "math"}
				],
				articles: [emptyArticle],
				activeCategory: 'physics'
			}
		},
		methods: {
			switchCategory(newCategory) {
				this.activeCategory = newCategory;
				this.loadArticles();
			},
			loadArticles() {
				var url = apiUrl + '/tag/' + this.activeCategory;
	      axios.get(url).then(res => {
	      	this.articles = res.data;
	      }).catch(err => {
	      	console.log(err);
	      });
			}
		},
		created() {
			this.loadArticles();
		}
	}
</script>

<style>
	.category-articles-container {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    height: 100%;
    flex-wrap: wrap;
  }
  .category-article {
    display: flex;
    padding: 0 .5rem;
    width: 33%;
  }
  @media(max-width:768px) {
    .category-article {
      width: 50%;
    }
  }
</style>