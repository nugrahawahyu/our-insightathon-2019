<template>
  <div class="tab-container">
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
      default: 0
    }
  },
  data() {
    return {
      activeTabIndex: 0
    }
  },
  computed: {
    children() {
      return this.$children
    }
  },
  watch: {
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
    if (activeTab) activeTab.show()
  }
}
</script>

<style>
.tab-navigation-button {
  display: inline-block;
  width: 98px;
  height: 32px;
  border-radius: 3px;
  background-color: #ced2d9;
}
</style>
