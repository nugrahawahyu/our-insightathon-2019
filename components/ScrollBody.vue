<template>
  <div class="scroll-body" :style="`height: ${height};`">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
</style>
