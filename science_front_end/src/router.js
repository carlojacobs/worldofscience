import Vue from 'vue';
import Router from 'vue-router';
// Components
import HomePage from './views/HomePage.vue';
import Article from './views/Article.vue';
import About from './views/About.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
