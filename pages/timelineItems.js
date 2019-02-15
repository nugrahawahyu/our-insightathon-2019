export default [
  {
    id: 1,
    active: false,
    alternate: false,
    label: 'Sebelum Ramadhan',
    slides: [
      {
        text:
          'Sebelum Ramadhan, pembayaran tagihan listrik di Kosan Bukalapak Jakarta sebanding dengan penggunaan listrik untuk <strong>15.735 rumah selama sebulan.</strong>',
        icon: '/images/ic_listrikprabayar1.png'
      },
      {
        text:
          'Pembayaran airnya bisa mencapai <strong>2.146 transaksi</strong>, atau bisa mencukupi kebutuhan rumah tangga selama <strong>22 bulan</strong>.',
        icon: '/images/ic_pdam1.png'
      },
      {
        text:
          'Transaksi untuk pulsa di Kosan Bukalapak sebelum Ramadhan 2018 cukup untuk dipakai menelepon <strong>1.136.730 orang</strong> selama <strong>2 menit</strong>.',
        icon: '/images/ic_pulsaprabayar1.png'
      },
      {
        text:
          'Paket internet yang dibeli di Bukalapak bisa dipakai nonton <strong>528.202 video</strong> konten religi dengan kualitas HD. (Ssst….persiapan spiritual menyambut Ramadhan nih!)',
        icon: '/images/ic_paketinternet1.png'
      }
    ],
    transactions: {
      virtualProducts: [
        {
          label: '<img src="/images/ic_listrik_enable-min.png" alt="">',
          labelDisabled:
            '<img src="/images/ic_listrik_disable-min.png" alt="">',
          data: 0.2261395276
        },
        {
          label: '<img src="/images/ic_air_enable-min.png" alt="">',
          labelDisabled: '<img src="/images/ic_air_disable-min.png" alt="">',
          data: 0.5981709968
        },
        {
          label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
          labelDisabled: '<img src="/images/ic_pulsa_disable-min.png" alt="">',
          data: 0.4513497908
        },
        {
          label: '<img src="/images/ic_data_enable-min.png" alt="">',
          labelDisabled: '<img src="/images/ic_data_disable-min.png" alt="">',
          data: 0.7383487345
        }
      ],
      comparisons: []
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
          'Selama bulan puasa, transaksi di Bukalapak bisa menyalakan listrik ke <strong>37.415 rumah</strong> selama sebulan atau hampir <strong>1,5 kali</strong> lebih banyak dari bulan sebelumnya.',
        icon: '/images/ic_listrikprabayar1.png'
      },
      {
        text:
          'Penggunaan air juga mengalami peningkatan. Kalau dihitung-hitung, air yang dipakai bisa untuk wudhu sebanyak <strong>231.741 kali</strong> atau setara dengan shalat terus menerus selama <strong>127 tahun</strong>.',
        icon: '/images/ic_pdam1.png'
      },
      {
        text:
          'Pembelian pulsa selama bulan Ramadhan bisa menambah <strong>520.103 orang</strong> lagi yang ditelepon dibandingkan bulan lalu lho. Makin banyak ya orang yang bisa ditanyain kabarnya...',
        icon: '/images/ic_pulsaprabayar1.png'
      },
      {
        text:
          'Paket internet yang dibeli penghuni Kosan Bukalapak di bulan Ramadhan 2018 bisa dipakai untuk nonton <strong>50.220 video</strong> konten religius dengan kualitas HD. Lebih banyak ya yang bisa ditonton dibanding bulan sebelumnya. Berkah Ramadhaaaan…',
        icon: '/images/ic_paketinternet1.png'
      },
      {
        text:
          'Para penghuni Kosan Bukalapak juga mempersiapkan diri untuk mudik lebaran lho. Terhitung yang akan berangkat mudik <strong>hampir 169 gerbong kereta.</strong>',
        icon: '/images/ic_kereta1.png'
      },
      {
        text:
          'Ternyata ada tiga destinasi yang paling banyak dituju oleh penghuni kosan adalah <strong>Semarang (17 gerbong)</strong>, <strong>Bandung (15 gerbong)</strong>, dan <strong>Cirebon (13 gerbong)</strong>.',
        icon: '/images/ic_kereta1.png'
      },
      {
        text:
          'Jadi penasaran nih, apa kebutuhan rumah tangga di kota destinasi terbanyak juga meningkat ya karena penduduknya pulang kampung? Yuk, kita lihat gimana penggunaan air dan listriknya!',
        icon: '/images/ic_kereta1.png'
      }
    ],
    transactions: {
      virtualProducts: [
        {
          label: '<img src="/images/ic_listrik_enable-min.png" alt="">',
          labelDisabled:
            '<img src="/images/ic_listrik_disable-min.png" alt="">',
          data: 0.5377119803
        },
        {
          label: '<img src="/images/ic_air_enable-min.png" alt="">',
          labelDisabled: '<img src="/images/ic_air_disable-min.png" alt="">',
          data: 1
        },
        {
          label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
          labelDisabled: '<img src="/images/ic_pulsa_disable-min.png" alt="">',
          data: 0.6578616359
        },
        {
          label: '<img src="/images/ic_data_enable-min.png" alt="">',
          labelDisabled: '<img src="/images/ic_data_disable-min.png" alt="">',
          data: 0.7707193297
        }
      ],
      comparisons: [
        {
          location: 'Bandung',
          description:
            'Kebutuhan listrik di kota <strong>Bandung</strong> meningkat penggunaannya saat anak kosan Bukalapak mudik. Dari pencatatan sih, jumlahnya naik sampai <strong>2 kali</strong> dari bulan sebelumnya. Penggunaan air juga meningkat hampir <strong>1,5 kali</strong> dibanding bulan sebelumnya. ',
          virtualProducts: [
            {
              label: '<img src="/images/ic_listrik_enable-min.png" alt="">',
              labelDisabled:
                '<img src="/images/ic_listrik_disable-min.png" alt="">',
              data: 0.08789060475
            },
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
            }
          ]
        },
        {
          location: 'Semarang',
          description:
            'Kalau di <strong>Semarang</strong>, penggunaan listriknya meningkat <strong>2 kali</strong> lipat juga nih. Sedangkan, pembayaran airnya lebih dari <strong>1,5 kali</strong> lipat. Hmm apa yang pulang kampung pada rebutan ngecharge handphone ya?',
          virtualProducts: [
            {
              label: '<img src="/images/ic_listrik_enable-min.png" alt="">',
              labelDisabled:
                '<img src="/images/ic_listrik_disable-min.png" alt="">',
              data: 0.04068363228
            },
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
            }
          ]
        },
        {
          location: 'Cirebon',
          description:
            'Kalau kita liat ke <strong>Cirebon</strong>, kita juga liat ada kenaikan penggunaan di dua jenis kebutuhan rumah tangga. Untuk penggunaan listrik ternyata meningkat sampai <strong>1,5 kali</strong>, sedangkan buat penggunaan airnya meningkat sampai lebih dari <strong>4 kali lipat</strong> di bulan Ramadhan ini!',
          virtualProducts: [
            {
              label: '<img src="/images/ic_listrik_enable-min.png" alt="">',
              labelDisabled:
                '<img src="/images/ic_listrik_disable-min.png" alt="">',
              data: 0.00768299301
            },
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
          'Setelah lebaran, Kosan Bukalapak Jakarta jadi dapat tambahan penghuni baru lho. Kalau dihitung-hitung, penghuni baru yang datang ke kosan Bukalapak Jakarta setara <strong>208 gerbong kereta</strong>.',
        icon: '/images/ic_kereta1.png'
      },
      {
        text:
          'Penghuni-penghuni baru ini kebanyakan asalnya dari <strong>Jogja</strong>, <strong>Semarang</strong>, dan <strong>Bandung</strong>.',
        icon: '/images/ic_kereta1.png'
      },
      {
        text:
          'Lalu, setelah ada tambahan penghuni, bagaimana jadinya penggunaan listrik Kosan Bukalapak di Jakarta?<br>Buat listrik, penggunaannya sih memang meningkat lebih dari <strong>1,5 kali</strong> dari bulan sebelumnya.',
        icon: '/images/ic_listrikprabayar1.png'
      },
      {
        text:
          'Tapi ternyata, setelah ada tambahan penghuni baru, gak semua penggunaan kebutuhan rumah tangga jadi meningkat. Soalnya, penggunaan air jadi <strong>20% lebih rendah</strong> dibanding bulan Ramadhan. Semoga sih bukan karena jadi jarang wudhu ya…',
        icon: '/images/ic_pdam1.png'
      },
      {
        text:
          'Ternyata transaksi pulsa di Kosan Bukalapak setara penggunaan telepon ke <strong>2,5 juta orang</strong> selama <strong>2 menit. Kayaknya pada langsung kangen sama keluarga di kampung halaman ya?',
        icon: '/images/ic_pulsaprabayar1.png'
      },
      {
        text:
          'Gak cuma soal teleponan, penghuni di Kosan Bukalapak kelihatannya makin sering nonton video lho setelah balik mudik. Soalnya, transaksi paket datanya meningkat hampir <strong>1,5 kali</strong>. Hmm, pada nonton apa sih?',
        icon: '/images/ic_paketinternet`1.png'
      }
    ],
    transactions: {
      virtualProducts: [
        {
          label: '<img src="/images/ic_listrik_enable-min.png" alt="">',
          labelDisabled:
            '<img src="/images/ic_listrik_disable-min.png" alt="">',
          data: 1
        },
        {
          label: '<img src="/images/ic_air_enable-min.png" alt="">',
          labelDisabled: '<img src="/images/ic_air_disable-min.png" alt="">',
          data: 0.8165389151
        },
        {
          label: '<img src="/images/ic_pulsa_enable-min.png" alt="">',
          labelDisabled: '<img src="/images/ic_pulsa_disable-min.png" alt="">',
          data: 1
        },
        {
          label: '<img src="/images/ic_data_enable-min.png" alt="">',
          labelDisabled: '<img src="/images/ic_data_disable-min.png" alt="">',
          data: 1
        }
      ],
      comparisons: [
        {
          location: 'Yogyakarta',
          description:
            'Dari kota <strong>Yogyakarta</strong>, Kosan Bukalapak dapat tambahan penghuni sebanyak <strong>20 gerbong</strong>.',
          thumbnailUrl: '/images/ill_jogja.png',
          virtualProducts: [
            {
              label: '<img src="/images/ic_kereta_enable.png" alt="">',
              labelDisabled:
                '<img src="/images/ic_air_disable-min.png" alt="">',
              data: 0.75
            }
          ]
        },
        {
          location: 'Semarang',
          description:
            'Dari kota <strong>Semarang</strong>, Kosan Bukalapak dapat tambahan penghuni sebanyak <strong>20 gerbong</strong>.',
          thumbnailUrl: '/images/ill_semarang.png',
          virtualProducts: [
            {
              label: '<img src="/images/ic_kereta_enable.png" alt="">',
              labelDisabled:
                '<img src="/images/ic_air_disable-min.png" alt="">',
              data: 0.75
            }
          ]
        },
        {
          location: 'Bandung',
          description:
            'Dari kota <strong>Bandung</strong>, Kosan Bukalapak dapat tambahan penghuni sebanyak <strong>19 gerbong</strong>.',
          thumbnailUrl: '/images/ill_bandung.png',
          virtualProducts: [
            {
              label: '<img src="/images/ic_kereta_enable.png" alt="">',
              labelDisabled:
                '<img src="/images/ic_air_disable-min.png" alt="">',
              data: 0.6
            }
          ]
        }
      ]
    }
  }
]
