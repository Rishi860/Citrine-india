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
      <p class="pt-3">JEWELERY</p>
    </div>
    <v-container class="mt-16">
      <v-row>
        <v-col cols="12" sm="4">
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/jewelery/necklace.jpeg"
            @click="navigateTo({name:'store', params:{item:'necklace'}})"
            aspect-ratio="0.7479"
          ></v-img>
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/jewelery/earings.jpeg"
            @click="navigateTo({name:'store', params:{item:'earing'}})"
            aspect-ratio="0.7479"
            class="mt-4"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="4">
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/jewelery/rings.jpeg"
            @click="navigateTo({name:'store', params:{item:'ring'}})"
            aspect-ratio="0.7479"
          ></v-img>
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/jewelery/handcuff.jpeg"
            @click="navigateTo({name:'store', params:{item:'handcuf'}})"
            aspect-ratio="0.7479"
            class="mt-4"
          >
          </v-img>
        </v-col>
        <v-col cols="12" sm="4">
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/rakhi/CRA673.jpg"
            @click="navigateTo({name:'store', params:{item:'harness'}})"
            aspect-ratio="0.7479"
          ></v-img>
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/jewelery/rakhi.jpeg"
            @click="navigateTo({name:'rakhi'})"
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
#headingText{
  background-color:rgba(37, 24, 29, 1);
  font-family: 'Cormorant Garamond', serif !important;
  font-weight : 500 !important;
  height: 56px;
  font-size: 24px;
  line-height: 132%;
  margin-top: 24px;
}
</style>