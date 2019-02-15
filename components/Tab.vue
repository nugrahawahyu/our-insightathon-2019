<template>
  <div class="tab-container">
    <div v-if="activeTabIndex === null">
      Pilih kota favorit mudik
    </div>
    <div>
      <slot />
    </div>
    <div>
      <button v-for="(child, n) in children" :key="n" class="tab-navigation-button" @click="activeTabIndex = n">
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
  }
}
</script>

<style>
.tab-container {
  color: #ced2d9;
}

.tab-navigation-button {
  display: inline-block;
  width: 98px;
  height: 32px;
  border-radius: 3px;
  background-color: #ced2d9;
}
</style>
