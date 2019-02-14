<template>
  <section class="timeline">
    <ul>
      <li v-for="(item, m) in timelineItems" :key="m" class="timeline-item">
        <div class="nav-column">
          <glowing-button>1</glowing-button>
        </div>
        <div class="content-column">
          <no-ssr>
            <carousel :per-page="1">
              <slide v-for="(slideText, n) in item.slides" :key="n">
                {{ slideText }}
              </slide>
            </carousel>
          </no-ssr>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import GlowingButton from './GlowingButton'

export default {
  components: {
    GlowingButton
  },
  data() {
    return {
      timelineItems: [
        {
          slides: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero dolore aliquid, debitis omnis neque magnam pariatur, aspernatur explicabo obcaecati reiciendis? Eaque optio dolorum, assumenda culpa quaerat ex quia qui!',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore atque repellendus voluptates voluptatem odio placeat sunt quisquam culpa odit iure. Fugit, dolores recusandae! Soluta suscipit distinctio corporis enim ab consectetur.'
          ]
        },
        {
          slides: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero dolore aliquid, debitis omnis neque magnam pariatur, aspernatur explicabo obcaecati reiciendis? Eaque optio dolorum, assumenda culpa quaerat ex quia qui!',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore atque repellendus voluptates voluptatem odio placeat sunt quisquam culpa odit iure. Fugit, dolores recusandae! Soluta suscipit distinctio corporis enim ab consectetur.'
          ]
        },
        {
          slides: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero dolore aliquid, debitis omnis neque magnam pariatur, aspernatur explicabo obcaecati reiciendis? Eaque optio dolorum, assumenda culpa quaerat ex quia qui!',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore atque repellendus voluptates voluptatem odio placeat sunt quisquam culpa odit iure. Fugit, dolores recusandae! Soluta suscipit distinctio corporis enim ab consectetur.'
          ]
        }
      ]
    }
  }
}
</script>

<style>
.VueCarousel {
  height: calc((100vh / 3) - 60px);
}

.VueCarousel-pagination {
  text-align: left !important;
}
</style>


<style scoped lang="scss">
.timeline {
  height: 100vh;
}

.timeline-item {
  position: relative;
  padding-left: 140px;
  height: calc((100vh / 3) - 30px);

  .nav-column {
    position: absolute;
    left: 0;
    margin: 10px;
  }

  .content-column {
    height: 100%;
    border: solid 1px #eee;
    border-style: dashed;
    border-radius: 8px;
    margin: 16px;
    padding: 16px;
    background-color: #ddd;
  }
}
</style>
