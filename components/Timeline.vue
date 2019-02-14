<template>
  <section class="timeline">
    <ul>
      <li class="timeline-item">
        <div class="nav-column">
          <glowing-button>1</glowing-button>
        </div>
        <div class="content-column">
          content
        </div>
      </li>
      <li class="timeline-item">
        <div class="nav-column">
          <glowing-button>2</glowing-button>
        </div>
        <div class="content-column">
          content
        </div>
      </li>
      <li class="timeline-item">
        <div class="nav-column">
          <glowing-button>3</glowing-button>
        </div>
        <div class="content-column">
          content
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import GlowingButton from './GlowingButton'

export default {
  components: {
    GlowingButton
  }
}
</script>

<style scoped lang="scss">
.timeline {
  height: 100vh;
}

.timeline-item {
  position: relative;
  padding-left: 140px;
  height: calc((100vh / 3) - 50px);

  .nav-column {
    position: absolute;
    left: 0;
    margin: 10px;
  }

  .content-column {
    height: 100%;
    border: solid 1px #eee;
    border-style: dashed;
    border-radius: 8px;
    margin: 16px;
    padding: 16px;
    background-color: #ddd;
  }
}
</style>
