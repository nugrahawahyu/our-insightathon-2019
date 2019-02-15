<template>
  <div class="vp-transaction">
    <div class="vp-transaction-image">
      <img v-if="!disabled" src="/images/ill_jakarta_enable-min.png" alt="">
      <img v-else src="/images/ill_jakarta_disable-min.png" alt="">
    </div>
    <div class="vp-transaction-data">
      <ul>
        <li v-for="(vp, i) in virtualProducts" :key="i">
          <vp-transaction-bar :value="vp.data" :label="disabled ? vp.labelDisabled : vp.label" :disabled="disabled" :color="i" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VpTransactionBar from './VpTransactionBar'

export default {
  components: {
    VpTransactionBar
  },
  props: {
    virtualProducts: {
      type: Array,
      required: true
    },
    disabled: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  created() {
    console.log('hahah')
  }
}
</script>

<style lang="scss">
.vp-transaction {
  position: relative;
  color: #42454d;
  text-align: left;
  padding-left: 182.6px;
  height: 114px;

  li {
    margin-top: 2px;
  }
}

.vp-transaction-image {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
