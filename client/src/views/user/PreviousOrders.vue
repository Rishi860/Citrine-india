<template>
  <dashboard>
    <v-container>
      <div v-if="previousOrders">
        <p>{{ previousOrders }}</p>
      </div>
      <div v-else>
        <v-img src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/orderHistory.png" aspect-ratio="1.355" max-width="494.8px" max-height="365.15px"></v-img>
        <p id="hist">You have no order history</p>
      </div>
    </v-container>
  </dashboard>
</template>

<script>
import UserServices from '../../services/userServices'

export default {
  data: () => ({
    previousOrders: null,
  }),
  async mounted () {
    this.previousOrders = (await UserServices.previousOrders(this.$store.state.user._id)).data
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
#hist{
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  opacity: 30%;
  color: #FB9012;
}
</style>