<template>
  <section class="timeline">
    <ul>
      <li v-for="(item, m) in timelineItems" :key="m" class="timeline-item">
        <div class="nav-column">
          <glowing-button :ref="`glowingButton${item.id}`" :disabled="!item.active" @click.native="onTimelineNavClick(item.id)">
            <strong v-if="!item.active" style="color: #fff;">
              {{ item.id }}
            </strong>
            <div v-else>
              ok
            </div>
          </glowing-button>
        </div>
        <div class="content-column" :class="{ disabled: !item.active }">
          <no-ssr>
            <carousel v-if="item.active" :per-page="1">
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
  props: {
    timelineItems: {
      type: Array,
      required: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.glowingButton1[0].glow()
    }, 1000)
  },
  methods: {
    onTimelineNavClick(clickedId) {
      const timelineItem = this.timelineItems.find(o => o.id === clickedId)
      const prevTimelineItem = this.timelineItems.find(
        o => o.id === clickedId - 1
      )

      if (prevTimelineItem && prevTimelineItem.active === false) {
        return
      }

      if (timelineItem) {
        if (clickedId !== 1) {
          timelineItem.active = !timelineItem.active
        }
      }
      if (!timelineItem.active || clickedId === 1) {
        for (let i = clickedId; i < this.timelineItems.length; i++) {
          this.timelineItems[i].active = false
        }
      }
    },
    setActiveState(id, state) {
      const timelineItem = this.timelineItems.find(o => o.id === id)
      timelineItem.active = state
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
    border: solid 1px #f8f8f8;
    border-style: dashed;
    border-radius: 8px;
    margin: 16px;
    padding: 16px;
  }

  .content-column.disabled {
    background-color: #aeb3b9;
  }
}
</style>
