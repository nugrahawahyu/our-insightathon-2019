<template>
  <section class="section eg-slideshow">
    <slide class="container" :steps=2 leave="bounceOutLeft">
      <logo/>
      <h1 class="title">
        insight
      </h1>
      <h2 class="subtitle">
        Insightathon
      </h2>
      <eg-transition enter="fadeInDown">
        <div class="links" v-if="step >= 2">
          <a
            hrux="https://nuxtjs.org/"
            target="_blank"
            class="button--green"
          >Documentation</a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey"
          >GitHub</a>
        </div>
      </eg-transition>
    </slide>
    <slide class="container" enter="bounceInRight" leave="fadeOut" :steps=2>
      <h1>Ramadhan</h1>
      <div class="tile is-ancestor">
        <div class="tile is-6">Timeline</div>
        <div class="tile is-6">Infografis</div>
      </div>
    </slide>
    <slide class="container" enter="bounceInRight" leave="fadeOut" :steps=2>
      <h2>Ramadhan</h2>
    </slide>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import eagle from 'eagle.js'

export default {
  components: {
    Logo
  },
  mixins: [eagle.slideshow]
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
