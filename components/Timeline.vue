<template>
  <section class="timeline">
    <ul>
      <li v-for="(item, m) in timelineItems" :key="m" class="timeline-item">
        <div class="columns">
          <div class="column is-4">
            <div class="nav-column">
              <div>
                <glowing-button :ref="`glowingButton${item.id}`" :disabled="!item.active" @click.native="onTimelineNavClick(item.id)">
                  <strong v-if="!item.active" style="color: #fff;">
                    {{ item.id }}
                  </strong>
                  <strong v-else style="color: #fff; font-size: 150%;">
                    ✓
                  </strong>
                </glowing-button>
              </div>
              <div>
                {{ item.label }}
              </div>
            </div>
            <div class="content-column" :class="{ disabled: !item.active }">
              <no-ssr>
                <transition name="fade" mode="out-in">
                  <carousel v-if="item.active" :per-page="1" @pageChange="onPageChange(item, $event)">
                    <slide v-for="(slideText, n) in item.slides" :key="n">
                      <p style="text-align: left;">
                        {{ slideText }}
                      </p>
                    </slide>
                  </carousel>
                </transition>
              </no-ssr>
              <div v-if="item.active" class="current-page-indicator">
                {{ `${item.currentPage || 1} / ${item.slides.length}` }}
              </div>
            </div>
          </div>
          <div class="column is-4">
            <vp-transaction :virtual-products="item.transactions.virtualProducts" :disabled="!item.active" />
          </div>
          <div class="column is-4">
            <tab :disable-nav="!item.active">
              <tab-item v-for="(comparison, index) in item.transactions.comparisons" :key="index" :title="comparison.location">
                <vp-transaction :virtual-products="comparison.virtualProducts" :disabled="!item.active" />
              </tab-item>
            </tab>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import GlowingButton from './GlowingButton'
import VpTransaction from './VpTransaction'
import Tab from './Tab'
import TabItem from './TabItem'

export default {
  components: {
    GlowingButton,
    VpTransaction,
    Tab,
    TabItem
  },
  props: {
    timelineItems: {
      type: Array,
      required: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.manualGlow(1)
    }, 1000)
  },
  methods: {
    onTimelineNavClick(clickedId) {
      this.$emit('click', clickedId)
    },
    setActiveState(id, state) {
      const timelineItem = this.timelineItems.find(o => o.id === id)
      timelineItem.active = state
    },
    onPageChange(item, currentPage) {
      this.$set(item, 'currentPage', parseInt(currentPage, 10) + 1)
    },
    manualGlow(id) {
      const button = this.$refs[`glowingButton${id}`][0]
      if (button) button.glow()
    }
  }
}
</script>

<style>
.VueCarousel {
  height: calc((100vh / 3) - 120px);
}

.VueCarousel-pagination {
  position: absolute;
  bottom: 0;
  text-align: left !important;
  z-index: 2;
}
</style>


<style scoped lang="scss">
.timeline {
  height: 100vh;
}

.timeline-item {
  position: relative;
  padding-left: 140px;

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
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: normal;
    color: #42454d;
    background-color: #fff7ec;
    height: calc((100vh / 3) - 69px);
    border: solid 1px #ffc26a;
    border-style: dashed;
    border-radius: 8px;
    margin: 16px;
    padding: 16px;
    position: relative;
  }

  .content-column.disabled {
    background-color: #f8f8f8;
    border: solid 1px #aeb3b9;
    border-style: dashed;
  }
}

.current-page-indicator {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>
