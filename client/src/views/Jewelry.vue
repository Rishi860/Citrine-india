<template>
  <v-sheet
    color= "rgba(240, 240, 242, 1)"
  >
    <v-toolbar
      dense
      flat
      height="105px"
      color="rgba(37, 24, 29, 1)"
    ></v-toolbar>
    <div class="display-2 text-center white--text" id="headingText">
      <p class="pt-2">JEWELERY</p>
    </div>
    <v-container class="mt-4">
      <v-row>
        <v-col cols="12" sm="4">
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/necklace.png"
            aspect-ratio="1.19047"
            contain
          ></v-img>
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/earings.png"
            aspect-ratio="1.282"
            class="mt-4"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="4">
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/rings.png"
            aspect-ratio="1.353"
            contain
          ></v-img>
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/handcuffs.png"
            aspect-ratio="1"
            class="mt-4"
            contain
          >
          </v-img>
        </v-col>
        <v-col cols="12" sm="4">
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/bracelet.png"
            aspect-ratio="1.1"
            contain
          ></v-img>
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/rakhi.png"
            aspect-ratio="1.235"
            class="mt-4"
            contain
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  
}
</script>

<style scoped>
#headingText{
  background-color:rgba(37, 24, 29, 1);
  font-family: 'Cormorant Garamond', serif !important;
  font-weight : 500 !important;
  height: 72px;
}
</style>