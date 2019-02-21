<template>
  <section class="timeline">
    <ul>
      <li v-for="(item, m) in timelineItems" :key="m" class="timeline-item">
        <div class="columns">
          <div class="column is-4">
            <div class="nav-column">
              <div class="nav-column-action horizontal">
                <div class="vertical">
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
                  <div style="color: #474a52;">
                    {{ item.label }}
                  </div>
                </div>
                <div v-if="m < 2" class="horizontal path-container" :class="{ 'path-container-1': m === 0, 'path-container-2': m === 1 }">
                  <div class="vertical">
                    <img v-if="m === 0" src="/images/vertical_path_shorter.png" alt="">
                    <img v-if="m === 1" src="/images/vertical_path.png" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="content-column" :class="{ disabled: !item.active }">
              <no-ssr>
                <transition name="fade" mode="out-in">
                  <carousel
                    v-if="item.active && !item.description"
                    :per-page="1"
                    :navigate-to="activeSlides[m]"
                    pagination-active-color="#ea5164"
                    pagination-color="#f4a8b1"
                    :pagination-size="8"
                    @pageChange="onPageChange(item, $event)"
                  >
                    <slide v-for="(slide, n) in item.slides" :key="n">
                      <div style="text-align: left">
                        <img class="slide-icon" :src="slide.icon" alt="">
                      </div>
                      <p style="text-align: left;" v-html="slide.text" />
                    </slide>
                  </carousel>
                  <div v-if="item.active && item.description" class="description-container">
                    <div class="description-image" style="text-align: left">
                      <img src="/images/ic_kereta1.png" alt="">
                    </div>
                    <p style="text-align: left;" v-html="item.description" />
                    <a class="description-action" href="#" @click.prevent="resetDescription(item, `tab${m}`)">
                      Kembali ke slide
                    </a>
                  </div>
                </transition>
              </no-ssr>
              <div v-if="item.active && !item.description" class="current-page-indicator">
                {{ `${item.currentPage || 1} / ${item.slides.length}` }}
              </div>
            </div>
          </div>
          <div class="column is-4">
            <vp-transaction :virtual-products="item.transactions.virtualProducts" :disabled="!item.active" />
          </div>
          <div class="column is-4">
            <tab
              v-if="item.transactions.comparisons.length"
              :ref="`tab${m}`"
              :disable-nav="!item.active"
              :placeholder="placeholders[m]"
              :placeholder-image="placeholderImages[m]"
              :path-images="pathImages[m]"
              :color="item.color"
              :alternate="m === 2"
              @labelClick="onVpComparisonLabelClick(item, $event)"
            >
              <tab-item v-for="(comparison, index) in item.transactions.comparisons" :key="index" :title="comparison.location">
                <vp-transaction
                  v-show="item.active"
                  :force-color="item.id === 3 ? 4 : null"
                  :thumbnail-url="comparison.thumbnailUrl"
                  :virtual-products="comparison.virtualProducts"
                  :disabled="!item.active"
                  @disabled="resetDescription(item, `tab${m}`)"
                />
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
    },
    scrollTop: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      activeSlides: [0, 0, 0],
      placeholders: [
        '',
        'Pilih kota favorit pemudik:',
        'Pilih asal kota terbanyak pendatang:'
      ],
      placeholderImages: ['', '/images/ic_info 1.png', '/images/ic_info 2.png'],
      pathImages: [
        [],
        [
          '/images/Path kereta bandung 1.png',
          '/images/Path kereta bandung 2.png',
          '/images/Path kereta cirebon 1.png',
          '/images/path kereta cirebon 2.png',
          '/images/Path kereta semarang 1.png',
          '/images/Path kereta semarang 2.png'
        ],
        [
          '/images/path kereta balik jogja 1.png',
          '/images/path kereta balik jogja 2.png',
          '/images/path kereta balik semarang 1.png',
          '/images/path kereta balik semarang 2.png',
          '/images/path kereta balik bandung 1.png',
          '/images/path kereta balik bandung 2.png'
        ]
      ]
    }
  },
  watch: {
    scrollTop(scrollTop) {
      const ic = 1200
      const space = 200

      const slideCounts = [4, 7, 6]

      let i = 0
      for (let m = 0; m < slideCounts.length; m++) {
        const slideCount = slideCounts[m]
        for (let n = 0; n < slideCount; n++) {
          const low = ic + i * space
          const high = ic + (i + 1) * space
          if (scrollTop > low && scrollTop <= high) {
            this.setActiveSlide(m, n)
            this.setActiveState(1, true)
            this.setActiveState(2, m >= 1)
            this.setActiveState(3, m >= 2)
            this.manualGlow(m + 1)
            if (m === slideCounts.length - 1 && n === slideCount - 1) {
              this.$emit('end-of-section')
            }
          }
          i += 1
        }
      }
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
    },
    onVpComparisonLabelClick(item, comparisonItemIndex) {
      const newDescription =
        item.transactions.comparisons[comparisonItemIndex].description

      if (item.description === newDescription) {
        item.description = null
      } else {
        item.description = newDescription
      }
    },
    setActiveSlide(activeSlideIndex, slideNumber) {
      const newArr = this.activeSlides.slice(0)
      newArr[activeSlideIndex] = slideNumber
      this.activeSlides = newArr
    },
    resetDescription(item, tabRef) {
      const tab = this.$refs[tabRef]
      tab[0].reset()
      item.description = null
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

div.horizontal {
  display: flex;
  justify-content: center;
}

div.vertical {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.nav-column-action {
  height: 100%;
}
</style>


<style scoped lang="scss">
@media (max-height: 900px) {
  .content-column {
    p {
      font-size: 11px !important;
    }
  }
}

.path-container {
  position: absolute;
  bottom: -35%;
  @media (max-height: 900px) {
    position: absolute;
    bottom: -25%;
  }
}

.path-container-1 {
  height: calc(100% - 119px);
}

.path-container-2 {
  height: calc(100% - 90px);
}

.timeline {
  padding-top: 30px;
  height: 100vh;
  max-width: 1440px;
}

.timeline-item {
  position: relative;
  padding-left: 140px;

  .nav-column {
    width: 140px;
    position: absolute;
    left: 0;
    margin: 10px;
    height: 100%;

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
    height: calc((100vh / 3) - 90px);
    border: 1px dashed #ffc26a;
    border-radius: 8px;
    margin: 16px;
    padding: 16px;
    position: relative;
    margin-bottom: 0;
  }

  .content-column.disabled {
    background-color: #f8f8f8;
    border: 1px dashed #aeb3b9;
  }
}

.current-page-indicator {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.slide-icon {
  height: 32px;
}

.description-container {
}

.description-action {
  position: absolute;
  bottom: 16px;
  left: 16px;
  color: #ea5164;
}

.description-image {
  img {
    height: 32px;
  }
}
</style>
