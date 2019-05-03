import Vue from 'vue';
import Router from 'vue-router';
// Components
import HomePage from './views/HomePage.vue';
import Article from './views/Article.vue';
import About from './views/About.vue';
import Categories from './views/Categories.vue';
import Search from './views/Search.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      beforeEnter: (to, from, next) => {
        const { uri } = to.query;
        if (uri != null && uri != '/') {
            next(false);
            router.push(uri);
        } else {
            next();
        }
      }
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
    },
    {
      path: '/categories',
      name: 'categories',
      component: Categories
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ],
  mode: 'history',
  linkExactActiveClass: 'is-active',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
