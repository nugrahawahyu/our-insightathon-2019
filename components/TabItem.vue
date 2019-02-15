<template>
  <div v-show="!hidden" style="color: black;">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'tab'
    }
  },
  data() {
    return {
      hidden: true
    }
  },
  methods: {
    show() {
      this.hidden = false
    },
    hide() {
      this.hidden = true
    }
  }
}
</script>

<style>
</style>
