<template>
  <div>
    <div class="text-center">
      <h1 class="hidden-sm-and-down heading--home">Jewellery</h1>
      <h1 class="hidden-md-and-up heading--home--mb">Jewellery</h1>
    </div>
    <v-container class="jewel--sec">
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
            aspect-ratio="0.9787"
            class="mt-4"
            contain
          >
          </v-img>
        </v-col>
        <v-col cols="12" sm="4">
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/bracelet.png"
            aspect-ratio="1"
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
  </div>
</template>

<style scoped>
  #collections{
    font-family: 'Cormorant Garamond', serif;
  }
  .v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
  }
  .card {
    transition: opacity .4s ease-in-out;
  }

  .card:not(.on-hover) {
    opacity: 0.6;
  }

  .show-btns {
    color: rgba(255, 255, 255, 1) !important;
  }
  .heading--home{
    font-family: 'Cormorant Garamond', serif;
    font-style: normal;
    font-weight: 500;
    font-size: 56px;
    line-height: 132%;
  }
  .heading--home--mb{
    font-family: 'Cormorant Garamond', serif;
    font-style: normal;
    font-weight: 500;
    font-size: 42px;
    line-height: 132%;
  }
  .jewel--sec{
    margin-top: 88px;
  }
</style>