<template>
	<carousel :per-page="1" :autoplay="true" :autoplayTimeout="6000" :paginationEnabled="true" :navigationEnabled="false" :loop="true" :autoplayHoverPause="false">
		<slide v-for="article in articles">
			<div class="carousel-article" :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url(' + article.imageUrl + ') !important' }" v-on:click="navigateToArticle(article._id)">
				<div>
					<h3 class="title is-3 carousel-article-header">{{article.title}}</h3>
					<h4 class="subtitle is-4 carousel-article-header">{{article.subtitle}}<br><br>By {{article.author}} on {{article.date}}</h4>
				</div>
			</div>
		</slide>
	</carousel>
</template>

<script>
	import { Carousel, Slide } from 'vue-carousel';

	export default {
		name: 'FrontPageCarousel',
		props: ['articles'],
		components: {
			Carousel,
			Slide
		},
    data() {
      return {
        articleIndex: 0,
        timeProgress: 0,
        timeInterval: 8000
      }
    },
    methods: {
    	navigateToArticle(id) {
    		this.$router.push('/article/' + id);
    	}
    }
	}
</script>

<style>
	.carousel-article {
		color: white;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;
    position: relative;
    border-radius: 5px;
    cursor: pointer;
    padding: 2em !important;
    transition: .2s;
    /*box-shadow: 8px 8px 8px grey;*/
	}
	.carousel-article-header {
    color: white !important;
  }
  .carousel-article:hover,
  .carousel-article:focus {
    transform: scale(0.95);
    transition-delay: .05s;
  }
</style>