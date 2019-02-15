export default [
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
        },
        {
          label: '<img src="/images/ic_listrik_enable-min.png" alt="">',
          labelDisabled:
            '<img src="/images/ic_listrik_disable-min.png" alt="">',
          data: 0.2261395276
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
          'Internet yang dibeli di Bukalapak di bulan ramadhan bisa dipakai nonton 50.220 video kultum ustadz versi HD lebih banyak dari bulan sebelumnya (Berkah ramadhaaaan…)',
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
          description:
            'Kalau di Semarang, penggunaan listriknya meningkat 2x lipat juga nih, hmm yang pada pulang kampung pada rebutan ngecas hp apa gimana. Sementara pembayaran airnya meningkat 1.7x lipat…',
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
              label: '<img src="/images/ic_listrik_enable-min.png" alt="">',
              labelDisabled:
                '<img src="/images/ic_listrik_disable-min.png" alt="">',
              data: 0.04068363228
            }
          ]
        },
        {
          location: 'Cirebon',
          description:
            'Liat ke Cirebon deh, kalo disini ternyata penggunaannya meningkat 1.5x, sedangkan airnya meningkat sampai 4.3x lipat di bulan Ramadhan ini!',
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
              label: '<img src="/images/ic_listrik_enable-min.png" alt="">',
              labelDisabled:
                '<img src="/images/ic_listrik_disable-min.png" alt="">',
              data: 0.00768299301
            }
          ]
        },
        {
          location: 'Bandung',
          description:
            'Ternyata, kebutuhan rumah tangga di Bandung meningkat nih penggunaan listriknya saat anak kosan Bukalapak pulang kampung. jumlahnya mencapai 2x dari bulan sebelumnya. Pemakaian air juga meningkat 1.3x dibanding bulan sebelumnya.',
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
              label: '<img src="/images/ic_listrik_enable-min.png" alt="">',
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
    description:
      'Penghuni-penghuni baru ini kebanyakan asalnya dari Jogja, Semarang, dan Bandung. <br>Penghuni-penghuni baru ini kebanyakan asalnya dari Jogja, Semarang, dan Bandung.',
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
          location: 'Jogja',
          description: 'Semarang description',
          thumbnailUrl: '/images/ill_jogja.png',
          virtualProducts: [
            {
              label: '<img src="/images/ic_kereta_enable.png" alt="">',
              labelDisabled:
                '<img src="/images/ic_air_disable-min.png" alt="">',
              data: 0.1287195804
            }
          ]
        },
        {
          location: 'Semarang',
          description: 'Cirebon description',
          thumbnailUrl: '/images/ill_semarang.png',
          virtualProducts: [
            {
              label: '<img src="/images/ic_kereta_enable.png" alt="">',
              labelDisabled:
                '<img src="/images/ic_air_disable-min.png" alt="">',
              data: 0.001136853579
            }
          ]
        },
        {
          location: 'Bandung',
          description: 'Bandung description',
          thumbnailUrl: '/images/ill_bandung.png',
          virtualProducts: [
            {
              label: '<img src="/images/ic_kereta_enable.png" alt="">',
              labelDisabled:
                '<img src="/images/ic_air_disable-min.png" alt="">',
              data: 0.1666772105
            }
          ]
        }
      ]
    }
  }
]
