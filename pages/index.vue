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
          <div class="container full-height align-top-section-container">
            <plain-section>
              <div>
                <img src="/images/Tittle-min.png" alt="">
              </div>
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
        <section v-show="showSlide3" ref="slide3" class="section scene-slide z-index-3" style="background-image: url(/images/bg_kesimpulan.png); background-size: cover; background-repeat: no-repeat;">
          <div class="container full-height align-top-section-container">
            <plain-section>
              <div>
                <img src="/images/Tittle-min.png" alt="">
              </div>
              <br>
              <div class="last-column">
                <p>Bulan Ramadan, pembelian di Bukalapak meningkat nih, apakah ini yang dinamakan berkah ramadan?</p>
                <p>Bulan ramadhan gak cuma membawa berkah, memperbaiki ibadah banyak di bulan ini harusnya bisa juga diteruskan ke bulan-bulan selanjutnya ya kayak di tahun kemarin untuk listrik, pulsa dan paket data. Gak kayak PDAM yang setelah ramadan malah menurun..hehe. Harusnya kan wudhu makin sering (sholatnya juga..),sering dengerin ceramah, makin erat menjalin silaturrahim sama kerabat…azek.</p>
                <p>Nah, Gimana nih setelah liat kisah data bulan ramadan (dan bulan sebelum dan setelahnya) lewat Kosan Bukalapak?</p>
                <p>Menarik ya..? Ngomongin ramadan sebenernya banyak banget yang seru, gak cuma data point yang kita ceritain tadi. Masih banyak yang asyik buat dibahas juga. Jadi penasaran kan gimana dengan perilaku user di bulan ramadan tahun ini? Tunggu tanggal mainnya..</p>
                <p>Bulan Ramadan, pembelian di Bukalapak meningkat nih, apakah ini yang dinamakan berkah ramadan?</p>
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
          alternate: false,
          label: 'Sebelum Ramadhan',
          slides: [
            {
              text:
                'Sebelum Ramadhan, transaksi pembelian listrik di Kosan Bukalapak selama bulan April sebanding dengan penggunaan listrik 15.735 rumah selama sebulan.',
              icon: '/images/ic_listrikprabayar1.png'
            },
            {
              text:
                'Pembayaran airnya bisa mencapai 2146 transaksi, atau bisa mencukupi kebutuhan rumah tangga untuk 1,8 tahun.',
              icon: '/images/ic_pdam1.png'
            },
            {
              text:
                'Internet yang dipakai di kosan Bukalapak bisa digunakan untuk menonton 528.202 video kultum ustadz versi HD (sst persiapan spiritual menyambut ramadhan nih).',
              icon: '/images/ic_paketinternet1.png'
            },
            {
              text:
                'Transaksi untuk pulsa di kosan Bukalapak sebelum Ramadhan tahun lalu cukup untuk dipakai menelepon 1.136.730 orang selama 2 menit.',
              icon: '/images/ic_pulsaprabayar1.png'
            }
          ],
          transactions: {
            virtualProducts: [
              {
                label: '<img src="/images/ic_air_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_air_disable-min.png" alt="">',
                data: 0.5981709968
              },
              {
                label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                data: 0.4513497908
              },
              {
                label: '<img src="/images/ic_data_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_data_disable-min.png" alt="">',
                data: 0.7383487345
              },
              {
                label: '<img src="/images/ic_listrik_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_listrik_disable-min.png" alt="">',
                data: 0.2261395276
              }
            ],
            comparisons: [
              {
                location: 'Semarang',
                virtualProducts: [
                  {
                    label: '<img src="/images/ic_air_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_air_disable-min.png" alt="">',
                    data: 0.002278633842
                  },
                  {
                    label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                    data: 0.04158606051
                  },
                  {
                    label: '<img src="/images/ic_data_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_data_disable-min.png" alt="">',
                    data: 0.03063257335
                  },
                  {
                    label:
                      '<img src="/images/ic_listrik_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_listrik_disable-min.png" alt="">',
                    data: 0.01965925112
                  }
                ]
              },
              {
                virtualProducts: [
                  {
                    label: '<img src="/images/ic_air_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_air_disable-min.png" alt="">',
                    data: 0.0001333168308
                  },
                  {
                    label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                    data: 0.006451415004
                  },
                  {
                    label: '<img src="/images/ic_data_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_data_disable-min.png" alt="">',
                    data: 0.008656014302
                  },
                  {
                    label:
                      '<img src="/images/ic_listrik_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_listrik_disable-min.png" alt="">',
                    data: 0.005071138237
                  }
                ]
              },
              {
                virtualProducts: [
                  {
                    label: '<img src="/images/ic_air_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_air_disable-min.png" alt="">',
                    data: 0.09978092186
                  },
                  {
                    label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                    data: 0.1232549474
                  },
                  {
                    label: '<img src="/images/ic_data_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_data_disable-min.png" alt="">',
                    data: 0.1940949498
                  },
                  {
                    label:
                      '<img src="/images/ic_listrik_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_listrik_disable-min.png" alt="">',
                    data: 0.05204510967
                  }
                ]
              }
            ]
          }
        },
        {
          id: 2,
          active: false,
          description: null,
          label: 'Ramadhan',
          slides: [
            {
              text:
                'Selama bulan puasa, transaksi di Bukalapak bisa menyalakan listrik ke 37.415 rumah selama sebulan atau 1.3x lebih banyak dari bulan sebelumnya.',
              icon: '/images/ic_listrikprabayar1.png'
            },
            {
              text:
                'Penggunaan air juga mengalami peningkatan. Kalau dihitung-hitung, air yang dipakai bisa untuk wudhu 231.741 kali atau setara 126.9 tahun sholat…',
              icon: '/images/ic_pdam1.png'
            },
            {
              text:
                'Pembelian pulsa selama bulan Ramadhan bisa menambah 520.103 orang lagi yang ditelepon dari bulan lalu lho. Makin banyak ya orang yang bisa ditanyain kabarnya...',
              icon: '/images/ic_pulsaprabayar1.png'
            },
            {
              text:
                'Internet yang dibeli di Bukalapak di bulan ramadhan bisa dipakai nonton 50.220 (528202-578422) video kultum ustadz versi HD lebih banyak dari bulan sebelumnya (Berkah ramadhaaaan…)',
              icon: '/images/ic_paketinternet1.png'
            },
            {
              text:
                'Para penghuni kosan Bukalapak juga mempersiapkan diri untuk mudik lebaran lho. Anak-anak yang pulang menuhin hampir 169 gerbong kereta.',
              icon: '/images/ic_kereta1.png'
            },
            {
              text:
                'Ternyata, destinasi favorit penghuninya adalah Bandung (15 gerbong), dan Cirebon (13 gerbong), Semarang (17 gerbong). Jadi penasaran, kebutuhan rumah tangga di kota destinasi favorit meningkat gak ya karena penduduknya pulang kampung?',
              icon: '/images/ic_kereta1.png'
            },
            {
              text:
                'Saat penghuni kosan Bukalapak pada mudik, ternyata di kota-kota destinasinya terdapat peningkatan penggunaan air dan listrik ya.',
              icon: '/images/ic_kereta1.png'
            }
          ],
          transactions: {
            virtualProducts: [
              {
                label: '<img src="/images/ic_air_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_air_disable-min.png" alt="">',
                data: 1
              },
              {
                label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                data: 0.6578616359
              },
              {
                label: '<img src="/images/ic_data_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_data_disable-min.png" alt="">',
                data: 0.7707193297
              },
              {
                label: '<img src="/images/ic_listrik_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_listrik_disable-min.png" alt="">',
                data: 0.5377119803
              }
            ],
            comparisons: [
              {
                location: 'Semarang',
                description: 'Semarang description',
                virtualProducts: [
                  {
                    label: '<img src="/images/ic_air_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_air_disable-min.png" alt="">',
                    data: 0.07499727864
                  },
                  {
                    label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                    data: 0.0423807646
                  },
                  {
                    label: '<img src="/images/ic_data_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_data_disable-min.png" alt="">',
                    data: 0.030412324
                  },
                  {
                    label:
                      '<img src="/images/ic_listrik_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_listrik_disable-min.png" alt="">',
                    data: 0.04068363228
                  }
                ]
              },
              {
                location: 'Cirebon',
                description: 'Cirebon description',
                virtualProducts: [
                  {
                    label: '<img src="/images/ic_air_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_air_disable-min.png" alt="">',
                    data: 0.0002620895714
                  },
                  {
                    label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                    data: 0.01199393756
                  },
                  {
                    label: '<img src="/images/ic_data_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_data_disable-min.png" alt="">',
                    data: 0.009666154867
                  },
                  {
                    label:
                      '<img src="/images/ic_listrik_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_listrik_disable-min.png" alt="">',
                    data: 0.00768299301
                  }
                ]
              },
              {
                location: 'Bandung',
                description: 'Bandung description',
                virtualProducts: [
                  {
                    label: '<img src="/images/ic_air_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_air_disable-min.png" alt="">',
                    data: 0.1301591052
                  },
                  {
                    label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                    data: 0.2184658471
                  },
                  {
                    label: '<img src="/images/ic_data_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_data_disable-min.png" alt="">',
                    data: 0.206912903
                  },
                  {
                    label:
                      '<img src="/images/ic_listrik_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_listrik_disable-min.png" alt="">',
                    data: 0.08789060475
                  }
                ]
              }
            ]
          }
        },
        {
          id: 3,
          active: false,
          description: null,
          label: '2 Bulan setelah Ramadhan',
          slides: [
            {
              text:
                'Saat penghuni kosan Bukalapak pada mudik, ternyata di kota-kota destinasinya terdapat peningkatan penggunaan air dan listrik ya.',
              icon: '/images/ic_kereta1.png'
            },
            {
              text:
                'Ternyata, setelah ada tambahan penghuni baru, gak semua penggunaan kebutuhan rumah tangga meningkat. Buat listrik, penggunaannya sih memang meningkat 1.8x kali dari bulan sebelumnya.',
              icon: '/images/ic_listrikprabayar1.png'
            },
            {
              text:
                'Tapi, buat penggunaan air jadi 1.2x lebih rendah dari bulan Ramadhan. Semoga sih bukan karena pada gak wudhu lagi ya.',
              icon: '/images/ic_pdam1.png'
            },
            {
              text:
                'Transaksi buat pulsa di kosan Bukalapak setara penggunaan telepon ke 2.518.514 orang selama 2 menit. Penghuni kosan kayanya makin sering berkomunikasi dengan keluarga dan teman terdekat ya, gak cuma pas ramadhan...',
              icon: '/images/ic_pulsaprabayar1.png'
            },
            {
              text:
                'Penghuni di kosan Bukalapak kelihatannya makin sering nonton video lho setelah balik mudik. Soalnya, transaksi paket datanya meningkat sebanyak 1.2x.',
              icon: '/images/ic_paketinternet1.png'
            }
          ],
          transactions: {
            virtualProducts: [
              {
                label: '<img src="/images/ic_air_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_air_disable-min.png" alt="">',
                data: 0.8165389151
              },
              {
                label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                data: 1
              },
              {
                label: '<img src="/images/ic_data_enable-min.png" alt="">',
                labelDisabled:
                  '<img src="/images/ic_data_disable-min.png" alt="">',
                data: 1
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
                location: 'Semarang',
                description: 'Semarang description',
                virtualProducts: [
                  {
                    label: '<img src="/images/ic_air_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_air_disable-min.png" alt="">',
                    data: 0.1287195804
                  },
                  {
                    label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                    data: 0.1274113155
                  },
                  {
                    label: '<img src="/images/ic_data_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_data_disable-min.png" alt="">',
                    data: 0.04394576483
                  },
                  {
                    label:
                      '<img src="/images/ic_listrik_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_listrik_disable-min.png" alt="">',
                    data: 0.06385557627
                  }
                ]
              },
              {
                location: 'Cirebon',
                description: 'Cirebon description',
                virtualProducts: [
                  {
                    label: '<img src="/images/ic_air_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_air_disable-min.png" alt="">',
                    data: 0.001136853579
                  },
                  {
                    label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                    data: 0.01984156032
                  },
                  {
                    label: '<img src="/images/ic_data_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_data_disable-min.png" alt="">',
                    data: 0.01259034285
                  },
                  {
                    label:
                      '<img src="/images/ic_listrik_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_listrik_disable-min.png" alt="">',
                    data: 0.01184514052
                  }
                ]
              },
              {
                location: 'Bandung',
                description: 'Bandung description',
                virtualProducts: [
                  {
                    label: '<img src="/images/ic_air_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_air_disable-min.png" alt="">',
                    data: 0.1666772105
                  },
                  {
                    label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_pulsa_disable-min.png" alt="">',
                    data: 0.3400031078
                  },
                  {
                    label: '<img src="/images/ic_data_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_data_disable-min.png" alt="">',
                    data: 0.2550773899
                  },
                  {
                    label:
                      '<img src="/images/ic_listrik_enable-min.png" alt="">',
                    labelDisabled:
                      '<img src="/images/ic_listrik_disable-min.png" alt="">',
                    data: 0.1435582964
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
  height: 364px;
  border: 1px dashed #ffc26a;
  border-radius: 8px;
  margin: auto;
  padding: 16px;
  position: relative;
}

.last-column {
  height: 488px;
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
