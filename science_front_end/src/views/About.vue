<template id="about-template">
  <div class="">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title is-1 wos-font">About us</h1>
            <p>
              <b>World of Science</b> is a small organization that is trying to promote and communicate science to the world. It is a platform to read and learn about the amazing things that happen in our universe and on this special planet.
              <br>
              <p>If you have any question or feedback, please feel free to contact us using the form below</p>
              <br>
              <p>World of Science was created and is being maintained by <a href="https://carlojacobs.ga" class="wos-a">Carlo Jacobs</a></p>
            </p>
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
