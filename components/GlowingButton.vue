<template>
  <div class="canvas">
    <div ref="clap" class="glowing-container" :class="glowingContainerClass">
      <slot />
    </div>
    <div ref="sonarClap" class="glowing-container-sonar" :class="glowingContainerClass" />
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      timeout: null
    }
  },
  computed: {
    glowingContainerClass() {
      return {
        disabled: this.disabled
      }
    }
  },
  mounted() {
    this.$refs.clap.onmouseover = () => {
      this.glow()
    }
  },
  methods: {
    glow() {
      const sonarClap = this.$refs.sonarClap
      sonarClap.classList.add('hover-active')
      if (!this.timeout) {
        this.timeout = setTimeout(() => {
          sonarClap.classList.remove('hover-active')
          this.timeout = null
        }, 2000)
      }
    }
  }
}
</script>

<style lang="scss">
$default-glow-color: #ea5164;
.canvas {
  justify-content: center;
  align-items: center;
  width: 43px;
  height: 43px;
  position: relative;

  .glowing-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 43px;
    height: 43px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    z-index: 2;
    background: #bb4050;
    cursor: pointer;
    .clap-icon {
      font-size: 30px;
      color: $default-glow-color;
      width: 30px;
      height: 30px;
    }
  }
  .glowing-container.disabled {
    background-color: #a1a9b3;
  }
  .glowing-container:hover {
    border: 1px solid $default-glow-color;
  }
  .glowing-container.disabled:hover {
    border: 1px solid #aaa;
  }
  .glowing-container.scale {
    animation: scaleAndBack 700ms forwards;
  }
  .glowing-container-sonar {
    width: 43px;
    height: 43px;
    background: $default-glow-color;
    border-radius: 50%;
    position: absolute;
    opacity: 0;
    z-index: 0;
  }
  .glowing-container-sonar.disabled {
    background-color: #a1a9b3;
  }
  .hover-active {
    animation: sonar-wave 2s forwards;
  }
}

// * * * Animations * * * //
@keyframes sonar-wave {
  0% {
    opacity: 0.7;
  }
  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}
</style>
