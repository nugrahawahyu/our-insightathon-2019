<template>
  <main ref="scrollBody" style="height: 100vh; overflow-y: scroll; overflow-x: hidden;">
    <scroll-body height="4468px">
      <section
        class="section"
        style="background-image: url(/images/Bg_main%20story-min.png);
              background-size:cover;
              background-repeat:no-repeat;"
      >
        <div class="container full-height first-section-container">
          <plain-section>
            <div>
              <img src="/images/Tittle-min.png" alt="">
            </div>
            <br>
            <div>
              <bl-button>Scroll untuk lihat cerita</bl-button>
            </div>
          </plain-section>
        </div>
      </section>
      <section class="section" style="background: #fff; color: white;">
        <div class="container full-height container-no-margin">
          <interactive-section>
            <div class="columns">
              <div class="column is-5">
                <timeline :timeline-items="timelineItems" />
              </div>
              <div class="column is-3">
                Second column
              </div>
              <div class="column is-4">
                Second column
              </div>
            </div>
          </interactive-section>
        </div>
      </section>
      <section class="section" style="background: white; color: #81868f;">
        <div class="container full-height">
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
import Timeline from '../components/Timeline.vue'
import BlButton from '../components/BlButton.vue'

export default {
  components: {
    ScrollBody,
    PlainSection,
    InteractiveSection,
    Timeline,
    BlButton
  },
  data() {
    return {
      scrollTop: null,
      timelineItems: [
        {
          id: 1,
          active: true,
          label: 'Sebelum Ramadhan',
          slides: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero dolore aliquid, debitis omnis neque magnam pariatur, aspernatur explicabo obcaecati reiciendis? Eaque optio dolorum, assumenda culpa quaerat ex quia qui!',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore atque repellendus voluptates voluptatem odio placeat sunt quisquam culpa odit iure. Fugit, dolores recusandae! Soluta suscipit distinctio corporis enim ab consectetur.'
          ]
        },
        {
          id: 2,
          active: false,
          label: 'Ramadhan',
          slides: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero dolore aliquid, debitis omnis neque magnam pariatur, aspernatur explicabo obcaecati reiciendis? Eaque optio dolorum, assumenda culpa quaerat ex quia qui!',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore atque repellendus voluptates voluptatem odio placeat sunt quisquam culpa odit iure. Fugit, dolores recusandae! Soluta suscipit distinctio corporis enim ab consectetur.'
          ]
        },
        {
          id: 3,
          active: false,
          label: '2 Bulan setelah Ramadhan',
          slides: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero dolore aliquid, debitis omnis neque magnam pariatur, aspernatur explicabo obcaecati reiciendis? Eaque optio dolorum, assumenda culpa quaerat ex quia qui!',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore atque repellendus voluptates voluptatem odio placeat sunt quisquam culpa odit iure. Fugit, dolores recusandae! Soluta suscipit distinctio corporis enim ab consectetur.'
          ]
        }
      ]
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

<style lang="scss">
html {
  overflow: hidden;
}

.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &.full-height {
    min-height: 100vh;
  }

  &-no-margin {
    margin: 0;
    width: 100%;
    max-width: initial;
  }
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

.first-section-container {
  align-items: initial;
}
</style>
