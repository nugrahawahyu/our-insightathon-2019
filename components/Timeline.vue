<template>
  <section class="timeline">
    <ul>
      <li v-for="(item, m) in timelineItems" :key="m" class="timeline-item">
        <div class="nav-column">
          <div>
            <glowing-button :ref="`glowingButton${item.id}`" :disabled="!item.active" @click.native="onTimelineNavClick(item.id)">
              <strong v-if="!item.active" style="color: #fff;">
                {{ item.id }}
              </strong>
              <div v-else>
                ok
              </div>
            </glowing-button>
          </div>
          <div>
            {{ item.label }}
          </div>
        </div>
        <div class="content-column" :class="{ disabled: !item.active }">
          <no-ssr>
            <carousel v-if="item.active" :per-page="1" @pageChange="onPageChange(item, $event)">
              <slide v-for="(slideText, n) in item.slides" :key="n">
                <p style="text-align: left;">
                  {{ slideText }}
                </p>
              </slide>
            </carousel>
          </no-ssr>
          <div v-if="item.active" class="current-page-indicator">
            {{ `${item.currentPage || 1} / ${item.slides.length}` }}
          </div>
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
      if (timelineItem.active) {
        for (let i = 0; i < clickedId; i++) {
          this.timelineItems[i].active = true
        }
      }
    },
    setActiveState(id, state) {
      const timelineItem = this.timelineItems.find(o => o.id === id)
      timelineItem.active = state
    },
    onPageChange(item, currentPage) {
      this.$set(item, 'currentPage', parseInt(currentPage, 10) + 1)
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
    width: 140px;
    position: absolute;
    left: 0;
    margin: 10px;

    .canvas {
      display: inline-block;
      text-align: center;
    }
  }

  .content-column {
    height: 100%;
    border: solid 1px #f8f8f8;
    border-style: dashed;
    border-radius: 8px;
    margin: 16px;
    padding: 16px;
    position: relative;
  }

  .content-column.disabled {
    background-color: #aeb3b9;
  }
}

.current-page-indicator {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>
