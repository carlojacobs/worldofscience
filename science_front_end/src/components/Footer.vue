<template id="footer-template">
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h1 class="title is-5">Contact</h1>
          <form class="form-horizontal" >
            <fieldset>
              <div class="field">
                <label class="label" for="textinput-0">Name</label>
                <div class="control">
                  <input id="textinput-0" name="textinput-0" type="text" placeholder="Your name..." class="input ">
                </div>
              </div>
              <div class="field">
                <label class="label" for="email">Email</label>
                <div class="control">
                  <input id="email" name="email" type="text" placeholder="Your email..." class="input ">
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
                  <button id="submit" name="submit" class="button is-primary">Send</button>
                </div>
              </div>
            </fieldset>
            </form>
        </div>
        <div class="column footer-column">
          <h1 class="title is-5">About</h1>
          <p><strong>World of Science</strong> is a small organization that tries to communicate the beauty of science to the world. We hope to inspire and educate people around the globe.</p>
        </div>
        <div class="column footer-column">
          <h1 class="title is-5">Navigate To</h1>
          <router-link to="/">Home</router-link>
          <br>
          <router-link to="/about">About us</router-link>
        </div>
      </div>
      <p><strong>World of Science</strong> was created and is being maintained by <a href="http://carlojacobs.ga">Carlo Jacobs</a>.</p>
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
    /* text-align: center; */
  }
</style>
