<template>
  <div class="tab-container" :class="{'tab-container-empty': activeTabIndex === null, 'no-border': disableNav}">
    <div v-if="activeTabIndex === null && !disableNav" style="text-align: left; color: #42454d;">
      {{ placeholder }}
    </div>
    <div>
      <slot />
    </div>
    <div v-if="!disableNav" class="tab-navigation-button-container">
      <button v-for="(child, n) in children" :key="n" :class="{ active: n === activeTabIndex }" class="tab-navigation-button" @click="toggle(n); $emit('labelClick', n)">
        {{ child.title }}
      </button>
      <div style="z-index: -1; width: 200%; position: absolute; right: 0">
        <img v-if="activeTabIndex === 0" src="/images/Path kereta bandung 1.png" class="path1-1">
        <img v-if="activeTabIndex === 0" src="/images/Path kereta bandung 2.png" class="path1-2">

        <img v-if="activeTabIndex === 1" src="/images/Path kereta cirebon 1.png" class="path2-1">
        <img v-if="activeTabIndex === 1" src="/images/path kereta cirebon 2.png" class="path2-2">

        <img v-if="activeTabIndex === 2" src="/images/Path kereta semarang 1.png" class="path3-1">
        <img v-if="activeTabIndex === 2" src="/images/Path kereta semarang 2.png" class="path3-2">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeTabIndexProp: {
      type: Number,
      default: null
    },
    disableNav: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Placeholder'
    }
  },
  data() {
    return {
      activeTabIndex: null
    }
  },
  computed: {
    children() {
      return this.$children
    }
  },
  watch: {
    activeTabIndexProp() {
      this.activeTabIndex = this.activeTabIndexProp
    },
    activeTabIndex() {
      for (let i = 0; i < this.children.length; i++) {
        if (i === this.activeTabIndex) {
          this.children[i].show()
        } else {
          this.children[i].hide()
        }
      }
    }
  },
  mounted() {
    const activeTab = this.children[this.activeTabIndexProp]
    this.activeTabIndex = this.activeTabIndexProp
    if (activeTab) activeTab.show()
  },
  methods: {
    toggle(index) {
      if (this.activeTabIndex === index) {
        this.activeTabIndex = null
      } else {
        this.activeTabIndex = index
      }
    },
    reset() {
      this.activeTabIndex = null
    }
  }
}
</script>

<style lang="scss">
.tab-container {
  color: #ced2d9;
}

.tab-container-empty {
  color: #ced2d9;
  padding: 12px;
  border: solid 1px #eee;
  border-style: dashed;
  border-radius: 5px;
}

.tab-navigation-button {
  border-radius: 4px !important;
  display: inline-block;
  width: 26%;
  height: 36px;
  border-radius: 3px;
  background-color: #fff;
  border: solid 1px #eee;
  margin-right: 12px;

  &-container {
    padding-top: 30px;
    position: relative;
  }

  &.active {
    color: #fff;
    background-color: #4589dc;
  }
}

.no-border {
  border: none;
}

.path1-1 {
  position: absolute;
  left: 16.5%;
  top: -72px;
  width: 37%;
}

.path1-2 {
  position: absolute;
  left: 61%;
  top: -62px;
}

.path2-1 {
  position: absolute;
  left: 15.5%;
  top: -80px;
  width: 56%;
}

.path2-2 {
  position: absolute;
  left: 71%;
  top: -66px;
}

.path3-1 {
  position: absolute;
  left: 16.5%;
  top: -73px;
  width: 68%;
}

.path3-2 {
  position: absolute;
  left: 71%;
  top: -65px;
}
</style>
