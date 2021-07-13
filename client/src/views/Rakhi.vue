<template>
  <v-sheet
    color= "rgba(240, 240, 242, 1)"
  >
    <v-toolbar
      dense
      flat
      height="80px"
      color="#F0F0F2"
    ></v-toolbar>
    <div class="text-center white--text" id="headingText">
      <p class="pt-3">RAKHI</p>
    </div>
    <v-container class="mt-16">
      <v-row>
        <v-col cols="12" sm="4">
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/jewelery/necklace.jpeg"
            @click="navigateTo({name:'rakhi', params:{item:'necklace'}})"
            aspect-ratio="0.7479"
          ></v-img>
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/jewelery/earings.jpeg"
            @click="navigateTo({name:'rakhi', params:{item:'earing'}})"
            aspect-ratio="0.7479"
            class="mt-4"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="4">
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/jewelery/rings.jpeg"
            @click="navigateTo({name:'rakhi', params:{item:'ring'}})"
            aspect-ratio="0.7479"
          ></v-img>
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/jewelery/handcuff.jpeg"
            @click="navigateTo({name:'rakhi', params:{item:'handcuf'}})"
            aspect-ratio="0.7479"
            class="mt-4"
          >
          </v-img>
        </v-col>
        <v-col cols="12" sm="4">
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/jewelery/bracelet.jpeg"
            @click="navigateTo({name:'rakhi', params:{item:'bracelet'}})"
            aspect-ratio="0.7479"
          ></v-img>
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/jewelery/rakhi.jpeg"
            @click="navigateTo({name:'rakhistore', params:{item:'rakhi'}})"
            aspect-ratio="0.7479"
            class="mt-4"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>

export default {
  methods: {
    navigateTo(route){
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

#headingText{
  background-color:rgba(37, 24, 29, 1);
  font-family: 'Montserrat', sans-serif;
  font-weight : 500 !important;
  height: 56px;
  font-size: 24px;
  line-height: 132%;
}
</style>