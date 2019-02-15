<template>
  <div class="tab-container" :class="{'tab-container-empty': activeTabIndex === null, 'no-border': disableNav}">
    <div v-if="activeTabIndex === null && !disableNav">
      Pilih kota favorit mudik
    </div>
    <div>
      <slot />
    </div>
    <div v-if="!disableNav" class="tab-navigation-button-container">
      <button v-for="(child, n) in children" :key="n" :class="{ active: n === activeTabIndex }" class="tab-navigation-button" @click="toggle(n); $emit('labelClick', n)">
        {{ child.title }}
      </button>
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
  width: 90px;
  height: 32px;
  border-radius: 3px;
  background-color: #fff;
  border: solid 1px #eee;
  margin-right: 12px;

  &-container {
    padding-top: 30px;
  }

  &.active {
    color: #fff;
    background-color: #4589dc;
  }
}

.no-border {
  border: none;
}
</style>
