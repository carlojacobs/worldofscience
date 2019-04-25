<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script type="text/javascript">
  // Import components
  import Navbar from '@/components/Navbar';
  // Import css
  import '../node_modules/bulma/css/bulma.min.css';
  import '../node_modules/bulma-divider/dist/css/bulma-divider.min.css';

  export default {
    name: 'app',
    components: {
      Navbar
    }
  }
</script>

<style media="screen">
  body {
    font-family: 'Open Sans', sans-serif;
  }
  .section {
    padding: 24px;
    /* padding: 24px 24px 48px; */
  }
  .wos-font {
    font-family: 'Playfair Display', serif;
  }
  /* font-family: 'Montserrat', sans-serif;
  font-family: 'Roboto', sans-serif;
  font-family: 'Open Sans', sans-serif;
  font-family: 'Playfair Display', serif; */
  @media only screen and (max-width: 768px) {
    .is-1 {
      font-size: 2.5rem !important;
    }
    .is-2 {
      font-size: 2rem !important;
    }
    .is-3 {
      font-size: 1.5rem !important;
    }
    .is-4 {
      font-size: 1rem !important;
    }
    .is-5 {
      font-size: 0.8rem !important;
    }
    .is-6 {
      font-size: 0.6rem !important;
    }
  }
</style>
