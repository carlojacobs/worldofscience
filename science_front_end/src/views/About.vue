<template id="about-template">
  <div class="">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title is-1 wos-font">About us.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div class="is-divider-vertical"/>
          <div class="column">
            <figure class="image">
              <img id="about-image" src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">
            </figure>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script type="text/javascript">
  import Footer from '@/components/Footer.vue';

  export default {
    name: 'about',
    components: {
      Footer
    }
  }
</script>

<style media="screen">
  #about-image {
    border-radius: 5px;
  }
</style>
