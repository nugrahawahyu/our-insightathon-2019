<template>
  <main ref="scrollBody" style="height: 100vh; overflow-y: scroll;">
    <scroll-body height="4468px">
      <section class="section" style="background: red; color: white;">
        <div class="container">
          <plain-section>
            intro
          </plain-section>
        </div>
      </section>
      <section class="section" style="background: green; color: white;">
        <div class="container">
          <interactive-section>
            content
          </interactive-section>
        </div>
      </section>
      <section class="section" style="background: blue; color: white;">
        <div class="container">
          <plain-section>
            outro
          </plain-section>
        </div>
      </section>
    </scroll-body>
  </main>
</template>

<script>
/* eslint no-console: ["error", { allow: ["log"] }] */

import PlainSection from '../components/PlainSection.vue'
import ScrollBody from '../components/ScrollBody.vue'
import InteractiveSection from '../components/InteractiveSection.vue'

export default {
  components: {
    ScrollBody,
    PlainSection,
    InteractiveSection
  },
  data() {
    return {
      scrollTop: null
    }
  },
  watch: {
    scrollTop() {
      this.updateScene()
    }
  },
  mounted() {
    this.$refs.scrollBody.addEventListener('scroll', e => {
      this.updateScroll(e)
    })
  },
  methods: {
    updateScroll($event) {
      this.$set(this, 'scrollTop', $event.target.scrollTop)
    },
    updateScene() {
      console.log(this.scrollTop)
    }
  }
}
</script>

<style>
html {
  overflow: hidden;
}

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
