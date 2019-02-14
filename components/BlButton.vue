<template>
  <button class="bl-button">
    <slot />
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bl-button {
  width: 249px;
  height: 48px;
  border-radius: 24px;
  box-shadow: 0 4px 6px 0 #cacaca;
  background-color: #ea5164;
  border: none;
  color: #fff;
  font-weight: bold;
}
</style>
