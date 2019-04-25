<template id="footer-template">
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h1 class="title is-4">Contact</h1>
          <h5 class="subtitle is-5">If you have any feedback, we would to hear it.</h5>
          <form class="form-horizontal" method="POST" action="https://formspree.io/carlormjacobs@gmail.com">
            <fieldset class="box">
              <div class="field">
                <label class="label" for="textinput-0">Name</label>
                <div class="control">
                  <input name="name" type="text" placeholder="Your name..." class="input ">
                </div>
              </div>
              <div class="field">
                <label class="label" for="email">Email</label>
                <div class="control">
                  <input name="_replyto" type="email" placeholder="Your email..." class="input ">
                  <p class="help">Don't worry, we won't share your email with anyone.</p>
                </div>
              </div>
              <div class="field">
                <label class="label" for="message">Message</label>
                <div class="control">
                  <textarea class="textarea" id="message" name="message">Your message...</textarea>
                </div>
              </div>
              <div class="field">
                <label class="label" for="submit"></label>
                <div class="control">
                  <input class="button is-primary is-medium" type="submit" value="Send"/>
                </div>
              </div>
            </fieldset>
            </form>
        </div>
        <div class="column footer-column">
          <h1 class="title is-4">About</h1>
          <p><strong>World of Science</strong> is a small organization that tries to communicate the beauty of science to the world. We hope to inspire and educate people around the globe.</p>
        </div>
        <div class="column footer-column">
          <h1 class="title is-4">Navigate To</h1>
          <router-link to="/" class="wos-a">Home</router-link>
          <br>
          <router-link to="/categories" class="wos-a">Categories</router-link>
          <br>
          <router-link to="/search" class="wos-a">Search</router-link>
          <br>
          <router-link to="/about" class="wos-a">About us</router-link>
        </div>
      </div>
      <p><strong>World of Science</strong> was created and is being maintained by <a href="http://carlojacobs.ga" class="wos-a">Carlo Jacobs</a>.</p>
      <br>
      <small>&copy; Copyright 2019, Carlo Jacobs</small>
    </div>
  </footer>
</template>

<script type="text/javascript">
  export default {
    name: 'Footer'
  }
</script>

<style media="screen">
  .footer {
    position: absolute;
    width: 100%;
    margin-top: 24px !important;
  }
</style>
