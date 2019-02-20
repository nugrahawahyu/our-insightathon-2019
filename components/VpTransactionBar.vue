<template>
  <div class="vp-transaction-bar">
    <div class="vp-transaction-bar-image" v-html="label" />
    <div class="vp-transaction-bar-data">
      <div v-if="!disabled">
        <div class="progress-container">
          <div class="progress-value" :style="`width: ${renderedValue * 100}%; background-image: url(${colors[color]});`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    disabled: {
      type: Boolean,
      default: true
    },
    color: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      renderedValue: 0,
      interval: null,
      colors: [
        '/images/diagram_listrik-min.png',
        '/images/diagram_air-min.png',
        '/images/diagram_pulsa-min.png',
        '/images/diagram_data-min.png',
        '/images/diagram_kereta.png'
      ]
    }
  },
  watch: {
    disabled(old, value) {
      if (!old && value) {
        this.animateValue()
      }
    }
  },
  mounted() {
    this.animateValue()
  },
  methods: {
    animateValue() {
      this.renderedValue = 0
      this.interval = setInterval(() => {
        const step = 0.01
        if (this.renderedValue + step > this.value) {
          this.renderedValue = this.value
          clearInterval(this.interval)
        } else {
          this.renderedValue += step
        }
      }, 10)
    }
  }
}
</script>

<style lang="scss">
.vp-transaction-bar {
  position: relative;
  color: #42454d;
  text-align: left;
  padding-left: 34px;
  height: 24px;
}

.vp-transaction-bar-image {
  position: absolute;
  top: 0;
  left: 0;

  img {
    height: 24px;
  }
}

.progress {
  &-container {
    width: 100%;
  }

  &-value {
    border-radius: 5px;
    background-size: cover;
    background-repeat: no-repeat;
    height: 22px;
  }
}
</style>
