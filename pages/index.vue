<template>
  <main ref="scrollBody" class="main" style="overflow-x: hidden;">
    <scroll-body height="10000px" />
    <div>
      <transition name="fade" mode="out-in">
        <section
          v-show="showSlide1"
          class="section scene-slide z-index-1"
          style="background-image: url(/images/Bg_main%20story-min.png); background-size: cover; background-repeat: no-repeat; max-height: 900px;"
        >
          <div class="container full-height align-top-section-container">
            <plain-section>
              <div>
                <img src="/images/Tittle-min.png" alt="">
              </div>
              <br>
              <div class="main-column">
                <p>Perkenalkan Kosan Bukalapak, kosan para penduduk asli dan pendatang di Jakarta. Kita akan mengikuti kisah para pendatang Jakarta menjalani bulan Ramadan di kosan Bukalapak.</p>
                <p>Mulai dari listrik, air untuk kebutuhan rumah tangga sehari-hari, pulsa buat teleponan, dan paket data buat ngenet, serta pergerakan transportasi sebelum, selama dan sesudah ramadan, semuanya akan dibahas tuntas.</p>
                <p>Kita lihat kosan Bukalapak yuk!!</p>
                <div style="position: absolute; bottom:-24px; left: 195px">
                  <bl-button @click.native="scrollToNextPage">
                    Scroll untuk lihat cerita
                  </bl-button>
                </div>
              </div>
              <div class="motion-container">
                <transition name="slide-left">
                  <img v-show="showPerson" src="/images/first-person.png" alt="first-person" class="first-person">
                </transition>
                <transition name="slide-right">
                  <img v-show="showPerson" src="/images/second-person.png" alt="second-person" class="second-person">
                </transition>
                <transition name="slide-right">
                  <img v-show="showPerson" src="/images/third-person.png" alt="third-person" class="third-person">
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
              <div>
                <img src="/images/Tittle-min.png" alt="">
              </div>
              <timeline ref="timeline" :timeline-items="timelineItems" @click="onTimelineClick" />
            </interactive-section>
          </div>
        </section>
      </transition>
      <transition name="fade" mode="out-in">
        <section v-show="showSlide3" ref="slide3" class="section scene-slide z-index-3" style="background-image: url(/images/bg_kesimpulan.png); background-size: cover; background-repeat: no-repeat; max-height: 900px;">
          <div class="container full-height align-top-section-container">
            <plain-section>
              <div>
                <img src="/images/Tittle-min.png" alt="">
              </div>
              <br>
              <div class="last-column">
                <div v-show="!nextStory">
                  <h3>Ramadhan 2019 sebentar lagi....</h3>
                  <p>Bulan Ramadhan, pembelian di Bukalapak meningkat nih, apakah ini yang dinamakan berkah Ramadhan?</p>
                  <p>Bulan Ramadhan gak cuma membawa berkah, memperbaiki ibadah banyak di bulan ini harusnya bisa juga diteruskan ke bulan-bulan selanjutnya ya kayak di tahun 2018 kemarin untuk listrik, pulsa, dan paket data. Gak kayak PDAM yang setelah Ramadhan malah menurun..hehe. Harusnya kan wudhu makin sering (sholatnya juga..),sering dengerin ceramah, makin erat menjalin silaturrahim sama kerabat…azek.</p>
                  <p>Ngomongin Ramadhan sebenernya banyak banget yang seru, gak cuma data point yang kita ceritain tadi. Masih banyak yang asyik buat dibahas juga. Jadi penasaran kan gimana dengan perilaku user di bulan Ramadhan tahun ini? Tunggu tanggal mainnya ya..</p>
                </div>
                <div v-show="nextStory">
                  <h3>Menarik kan yaa….</h3>
                  <p>Tetapi ada juga variabel lain yang mungkin mempengaruhi kenaikan/penurunan pembelian di Bukalapak di tahun 2018 kemarin, yaitu adanya promo. Data yang dilihat adalah berdasarkan jumlah transaksi dan GMV.</p>
                  <p class="rectangle">
                    <strong>Latar Belakang Perhitungan Data:</strong><br>
                    Penggunaan listrik rumah 1300 VA perbulan: Rp.300.000<br>
                    Kebutuhan air rumah tangga perhari: 144 liter<br>
                    Wudhu satu kali memakai air sebanyak: 688 ml<br>
                    Asumsi harga air PDAM per 1000 liter: Rp. 4000<br>
                    Biaya telepon per menit: Rp. 1000<br>
                    Video HD per menit memakai 350 MB data<br>
                    1 gerbong kereta eksekutif biasa: 52 kursi
                  </p>
                </div>
                <div style="position: absolute; bottom:-24px; left: 195px">
                  <bl-button @click.native="nextStory = !nextStory">
                    {{ !nextStory ? "Klik untuk lihat cerita selanjutnya" : "Kembali ke sebelumnya" }}
                  </bl-button>
                </div>
              </div>

              <div class="last-motion-container">
                <transition name="slide-left">
                  <img src="/images/forth-person.png" alt="forth-person" class="forth-person">
                </transition>
                <transition name="slide-right">
                  <img src="/images/third-person.png" alt="third-person" class="third-person">
                </transition>
              </div>
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
import timelineItems from './timelineItems'

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
      nextStory: false,
      timelineItems,
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
      } else if (scrollTop > 1200 && scrollTop < 2200) {
        timeline.setActiveState(1, true)
        timeline.setActiveState(2, false)
        timeline.setActiveState(3, false)
      } else if (scrollTop > 2200 && scrollTop < 3200) {
        timeline.manualGlow(2)
        timeline.setActiveState(2, true)
        timeline.setActiveState(3, false)
      } else if (scrollTop > 3200 && scrollTop < 4200) {
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
    scrollToNextPage() {
      document.documentElement.scrollTop = document.body.scrollTop = 1230
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

.align-top-section-container {
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

.main-column,
.last-column {
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: normal;
  color: #42454d;
  background-color: #fff7ec;
  width: 642px;
  height: 278px;
  border: 1px dashed #ffc26a;
  border-radius: 8px;
  margin: auto;
  padding: 16px;
  position: relative;
}

.last-column {
  height: 415px;
}

.last-column h3 {
  margin-bottom: 18px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.22;
  text-align: justify;
  color: #42454d;
}

.main-column p,
.last-column p {
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: normal;
  margin-bottom: 20px;
  text-align: justify;
  color: #42454d;
}

.last-column .rectangle {
  border-radius: 6px;
  line-height: 1.57;
  background-color: #ffedec;
  padding: 18px;
}

.motion-container {
  width: 1440px;
  position: relative;
  height: 460px;
}

.last-motion-container {
  width: 1440px;
  position: relative;
  height: 340px;
}

.first-person {
  position: absolute;
  bottom: 30px;
  left: 199px;
  width: 158px;
  height: 363px;
}

.second-person {
  position: absolute;
  width: 233px;
  height: 258px;
  bottom: 36px;
  left: 636px;
}

.forth-person {
  position: absolute;
  width: 233px;
  height: 258px;
  bottom: 36px;
  left: 134px;
}

.third-person {
  position: absolute;
  bottom: 31px;
  right: 85px;
  height: 307px;
  width: 130px;
}
</style>
