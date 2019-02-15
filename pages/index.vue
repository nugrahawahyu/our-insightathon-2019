<template>
  <main ref="scrollBody" class="main" style="overflow-x: hidden;">
    <scroll-body height="10000px" />
    <div>
      <transition name="fade" mode="out-in">
        <section
          v-show="showSlide1"
          class="section scene-slide z-index-1"
          style="background-image: url(/images/Bg_main%20story-min.png); background-size: cover; background-repeat: no-repeat;"
        >
          <div class="container full-height first-section-container">
            <plain-section>
              <div>
                <img src="/images/Tittle-min.png" alt="">
              </div>
              <br>
              <div class="main-column">
                <p>Perkenalkan Kosan Bukalapak, kosan para penduduk asli dan pendatang di Jakarta. Kita akan mengikuti kisah para pendatang Jakarta menjalani bulan Ramadan di kosan Bukalapak.</p>
                <p>Mulai dari listrik, air untuk kebutuhan rumah tangga sehari-hari, pulsa buat teleponan, dan paket data buat ngenet, serta pergerakan transportasi sebelum, selama dan sesudah ramadan, semuanya akan dibahas tuntas.</p>
                <p>Kita lihat kosan Bukalapak yuk!</p>
                <div>
                  <bl-button>Scroll untuk lihat cerita</bl-button>
                </div>
              </div>
              <div class="motion-container">
                <transition name="slide-left">
                  <img src="/images/first-person.png" alt="first-person" v-show="showPerson" class="first-person">
                </transition>
                <transition name="slide-right">
                  <img src="/images/second-person.png" alt="second-person" v-show="showPerson" class="second-person">
                </transition>
                <transition name="slide-right">
                  <img src="/images/third-person.png" alt="third-person" v-show="showPerson" class="third-person">
                </transition>
              </div>
            </plain-section>
          </div>
        </section>
      </transition>
      <transition name="fade" mode="out-in">
        <section v-show="showSlide2" ref="slide2" class="section scene-slide z-index-2" style="background: #fff; color: white;">
          <div class="container full-height container-no-margin">
            <interactive-section>
              <timeline ref="timeline" :timeline-items="timelineItems" @click="onTimelineClick" />
            </interactive-section>
          </div>
        </section>
      </transition>
      <transition name="fade" mode="out-in">
        <section v-show="showSlide3" ref="slide3" class="section scene-slide z-index-3" style="background: white; color: #81868f;">
          <div class="container full-height">
            <plain-section>
              outro
            </plain-section>
          </div>
        </section>
      </transition>
    </div>
  </main>
</template>

<script>
/* eslint no-console: ["error", { allow: ["log"] }] */

// import debounce from 'debounce'
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
      showSlide1: true,
      showSlide2: false,
      showSlide3: false,
      timelineItems: [
        {
          id: 1,
          active: false,
          label: 'Sebelum Ramadhan',
          slides: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero dolore aliquid, debitis omnis neque magnam pariatur, aspernatur explicabo obcaecati reiciendis? Eaque optio dolorum, assumenda culpa quaerat ex quia qui!',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore atque repellendus voluptates voluptatem odio placeat sunt quisquam culpa odit iure. Fugit, dolores recusandae! Soluta suscipit distinctio corporis enim ab consectetur.'
          ],
          transactions: {
            virtualProducts: [
              {
                label: '<img src="/images/ic_air_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_air_disable-min.png" alt="">',
                data: 0.2
              },
              {
                label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                data: 0.7
              },
              {
                label: '<img src="/images/ic_data_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_data_disable-min.png" alt="">',
                data: 0.4
              },
              {
                label: '<img src="/images/ic_listrik_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_listrik_disable-min.png" alt="">',
                data: 1
              }
            ],
            comparisons: [
              {
                location: 'loc 1',
                virtualProducts: [
                  {
                    label: '<img src="/images/ic_air_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_air_disable-min.png" alt="">',
                    data: 0.2
                  },
                  {
                    label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                    data: 0.7
                  },
                  {
                    label: '<img src="/images/ic_data_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_data_disable-min.png" alt="">',
                    data: 0.4
                  },
                  {
                    label:
                      '<img src="/images/ic_listrik_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_listrik_disable-min.png" alt="">',
                    data: 1
                  }
                ]
              },
              {
                location: 'loc 2',
                virtualProducts: [
                  {
                    label: '<img src="/images/ic_air_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_air_disable-min.png" alt="">',
                    data: 0.2
                  },
                  {
                    label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                    data: 0.7
                  },
                  {
                    label: '<img src="/images/ic_data_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_data_disable-min.png" alt="">',
                    data: 0.4
                  },
                  {
                    label:
                      '<img src="/images/ic_listrik_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_listrik_disable-min.png" alt="">',
                    data: 1
                  }
                ]
              },
              {
                location: 'loc 3',
                virtualProducts: [
                  {
                    label: '<img src="/images/ic_air_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_air_disable-min.png" alt="">',
                    data: 0.2
                  },
                  {
                    label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                    data: 0.7
                  },
                  {
                    label: '<img src="/images/ic_data_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_data_disable-min.png" alt="">',
                    data: 0.4
                  },
                  {
                    label:
                      '<img src="/images/ic_listrik_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_listrik_disable-min.png" alt="">',
                    data: 1
                  }
                ]
              }
            ]
          }
        },
        {
          id: 2,
          active: false,
          label: 'Ramadhan',
          slides: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero dolore aliquid, debitis omnis neque magnam pariatur, aspernatur explicabo obcaecati reiciendis? Eaque optio dolorum, assumenda culpa quaerat ex quia qui!',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore atque repellendus voluptates voluptatem odio placeat sunt quisquam culpa odit iure. Fugit, dolores recusandae! Soluta suscipit distinctio corporis enim ab consectetur.'
          ],
          transactions: {
            virtualProducts: [
              {
                label: '<img src="/images/ic_air_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_air_disable-min.png" alt="">',
                data: 0.2
              },
              {
                label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                data: 0.7
              },
              {
                label: '<img src="/images/ic_data_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_data_disable-min.png" alt="">',
                data: 0.4
              },
              {
                label: '<img src="/images/ic_listrik_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_listrik_disable-min.png" alt="">',
                data: 1
              }
            ],
            comparisons: [
              {
                location: 'loc 1',
                virtualProducts: [
                  {
                    label: '<img src="/images/ic_air_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_air_disable-min.png" alt="">',
                    data: 0.2
                  },
                  {
                    label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                    data: 0.7
                  },
                  {
                    label: '<img src="/images/ic_data_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_data_disable-min.png" alt="">',
                    data: 0.4
                  },
                  {
                    label:
                      '<img src="/images/ic_listrik_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_listrik_disable-min.png" alt="">',
                    data: 1
                  }
                ]
              },
              {
                location: 'loc 2',
                virtualProducts: [
                  {
                    label: '<img src="/images/ic_air_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_air_disable-min.png" alt="">',
                    data: 0.2
                  },
                  {
                    label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                    data: 0.7
                  },
                  {
                    label: '<img src="/images/ic_data_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_data_disable-min.png" alt="">',
                    data: 0.4
                  },
                  {
                    label:
                      '<img src="/images/ic_listrik_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_listrik_disable-min.png" alt="">',
                    data: 1
                  }
                ]
              },
              {
                location: 'loc 3',
                virtualProducts: [
                  {
                    label: '<img src="/images/ic_air_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_air_disable-min.png" alt="">',
                    data: 0.2
                  },
                  {
                    label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                    data: 0.7
                  },
                  {
                    label: '<img src="/images/ic_data_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_data_disable-min.png" alt="">',
                    data: 0.4
                  },
                  {
                    label:
                      '<img src="/images/ic_listrik_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_listrik_disable-min.png" alt="">',
                    data: 1
                  }
                ]
              }
            ]
          }
        },
        {
          id: 3,
          active: false,
          label: '2 Bulan setelah Ramadhan',
          slides: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero dolore aliquid, debitis omnis neque magnam pariatur, aspernatur explicabo obcaecati reiciendis? Eaque optio dolorum, assumenda culpa quaerat ex quia qui!',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore atque repellendus voluptates voluptatem odio placeat sunt quisquam culpa odit iure. Fugit, dolores recusandae! Soluta suscipit distinctio corporis enim ab consectetur.'
          ],
          transactions: {
            virtualProducts: [
              {
                label: '<img src="/images/ic_air_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_air_disable-min.png" alt="">',
                data: 0.2
              },
              {
                label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                data: 0.7
              },
              {
                label: '<img src="/images/ic_data_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_data_disable-min.png" alt="">',
                data: 0.4
              },
              {
                label: '<img src="/images/ic_listrik_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_listrik_disable-min.png" alt="">',
                data: 1
              }
            ],
            comparisons: [
              {
                location: 'loc 1',
                virtualProducts: [
                  {
                    label: '<img src="/images/ic_air_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_air_disable-min.png" alt="">',
                    data: 0.2
                  },
                  {
                    label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                    data: 0.7
                  },
                  {
                    label: '<img src="/images/ic_data_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_data_disable-min.png" alt="">',
                    data: 0.4
                  },
                  {
                    label:
                      '<img src="/images/ic_listrik_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_listrik_disable-min.png" alt="">',
                    data: 1
                  }
                ]
              },
              {
                location: 'loc 2',
                virtualProducts: [
                  {
                    label: '<img src="/images/ic_air_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_air_disable-min.png" alt="">',
                    data: 0.2
                  },
                  {
                    label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                    data: 0.7
                  },
                  {
                    label: '<img src="/images/ic_data_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_data_disable-min.png" alt="">',
                    data: 0.4
                  },
                  {
                    label:
                      '<img src="/images/ic_listrik_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_listrik_disable-min.png" alt="">',
                    data: 1
                  }
                ]
              },
              {
                location: 'loc 3',
                virtualProducts: [
                  {
                    label: '<img src="/images/ic_air_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_air_disable-min.png" alt="">',
                    data: 0.2
                  },
                  {
                    label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                    data: 0.7
                  },
                  {
                    label: '<img src="/images/ic_data_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_data_disable-min.png" alt="">',
                    data: 0.4
                  },
                  {
                    label:
                      '<img src="/images/ic_listrik_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_listrik_disable-min.png" alt="">',
                    data: 1
                  }
                ]
              }
            ]
          }
        }
      ],
      showPerson: true
    }
  },
  mounted() {
    this.updateCurrentSlide()
    document.addEventListener('scroll', e => {
      this.updateScene(e.target.scrollingElement.scrollTop)
    })
  },
  methods: {
    updateScroll($event) {
      this.scrollTop = $event.target.scrollingElement.scrollTop
    },
    updateScene(scrollTop) {
      this.updateCurrentSlide(scrollTop)
      this.animateSlide2(scrollTop)
    },
    animateSlide2(scrollTop) {
      const timeline = this.$refs.timeline
      if (scrollTop < 1200) {
        timeline.setActiveState(1, false)
        timeline.setActiveState(2, false)
        timeline.setActiveState(3, false)
      } else if (scrollTop > 1200 && scrollTop < 3200) {
        timeline.setActiveState(1, true)
        timeline.setActiveState(2, false)
        timeline.setActiveState(3, false)
      } else if (scrollTop > 3200 && scrollTop < 4200) {
        timeline.manualGlow(2)
        timeline.setActiveState(2, true)
        timeline.setActiveState(3, false)
      } else if (scrollTop > 4200 && scrollTop < 8000) {
        timeline.manualGlow(3)
        timeline.setActiveState(2, true)
        timeline.setActiveState(3, true)
      }
    },
    updateCurrentSlide(scrollTop = 0) {
      if (scrollTop < 800) {
        this.showPerson = true
      } else {
        this.showPerson = false
      }
      if (scrollTop < 1200) {
        this.showSlide1 = true
        this.showSlide2 = false
        this.showSlide3 = false
      }
      if (scrollTop > 1200 && scrollTop < 8000) {
        this.showSlide1 = false
        this.showSlide2 = true
        this.showSlide3 = false
      }
      if (scrollTop > 8000) {
        this.showSlide1 = false
        this.showSlide2 = false
        this.showSlide3 = true
      }
    },
    onTimelineClick(itemId) {
      if (itemId === 1) {
        document.documentElement.scrollTop = document.body.scrollTop = 2201
      } else if (itemId === 2) {
        document.documentElement.scrollTop = document.body.scrollTop = 3201
      } else if (itemId === 3) {
        document.documentElement.scrollTop = document.body.scrollTop = 4201
      }
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-left-enter,
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-left-enter-active {
  transition: all 0.3s ease;
}

.slide-left-leave-active {
  transition: all 0.5s ease;
}

.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-right-enter-active {
  transition: all 0.3s ease;
}

.slide-right-leave-active {
  transition: all 0.5s ease;
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

.main {
  position: relative;
}

.scene-slide {
  position: fixed;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
}

.z-index-1 {
  z-index: 1;
}

.z-index-2 {
  z-index: 2;
}

.z-index-3 {
  z-index: 3;
}

.main-column {
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: normal;
  color: #42454d;
  background-color: #fff7ec;
  width: 642px;
  height: 364px;
  border: 1px dashed #ffc26a;
  border-radius: 8px;
  margin: auto;
  padding: 16px;
  position: relative;
}

.main-column p {
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: normal;
  margin-bottom: 20px;
  text-align: justify;
  color: #42454d;
}

.motion-container {
  width: 1440px;
  position: relative;
  height: 444px;
}

.first-person {
  position: absolute;
  bottom: 0;
  left: 190px;
  width: 173px;
  height: 413px;
}

.second-person {
  position: absolute;
  width: 324px;
  bottom: 4px;
  left: 576px;
  height: 357px;
}

.third-person {
  position: absolute;
  bottom: -4px;
  right: 78px;
  height: 384px;
  width: 163px;
}
</style>
