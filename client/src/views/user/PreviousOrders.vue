<template>
  <dashboard>
    <p v-if="previousOrders">content Defined  {{ previousOrders }}</p>
    
  </dashboard>
</template>

<script>
import UserServices from '../../services/userServices'

export default {
  data: () => ({
    previousOrders: null,
  }),
  async mounted () {
    console.log('send req')
    this.previousOrders = (await UserServices.previousOrders(this.$store.state.user._id)).data
  }
}
</script>
