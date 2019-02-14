<template>
  <div class="canvas">
    <div ref="clap" class="glowing-container">
      <slot />
    </div>
    <div ref="sonarClap" class="glowing-container-sonar" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.clap.onmouseover = () => {
      this.glow()
    }
  },
  methods: {
    glow() {
      const sonarClap = this.$refs.sonarClap
      sonarClap.classList.add('hover-active')
      setTimeout(() => {
        sonarClap.classList.remove('hover-active')
      }, 2000)
    }
  }
}
</script>

<style lang="scss">
$default-glow-color: #03a87c;
.canvas {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  position: relative;

  .glowing-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 60px;
    height: 60px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    z-index: 2;
    background: #fff;
    cursor: pointer;
    .clap-icon {
      font-size: 30px;
      color: $default-glow-color;
      width: 30px;
      height: 30px;
    }
  }
  .glowing-container:hover {
    border: 1px solid $default-glow-color;
  }
  .glowing-container.scale {
    animation: scaleAndBack 700ms forwards;
  }
  .glowing-container-sonar {
    width: 60px;
    height: 60px;
    background: $default-glow-color;
    border-radius: 50%;
    position: absolute;
    opacity: 0;
    z-index: 0;
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
