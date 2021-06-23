<template>
  <div>
    <div class="text-center">
      <h1>Collections</h1>
      <v-divider inset></v-divider>
    </div>
    <v-container>
      <v-row
      >
        <v-col
          align-self="start"
        >
          <v-card
            color="#f0f0f2"
            flat
            max-height="527px"
            max-width="561px"
          >
            <v-img contain max-wdith="122px" max-height="122px" aspect-ratio="1" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Frame+77collection1.png"></v-img>
            <v-img contain max-wdith="475px" max-height="313px" aspect-ratio="1.517" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Rectangle+58collection2.png"></v-img>
            <v-img id="coll3" contain max-wdith="409px" max-height="344px" aspect-ratio="1.188" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Frame+83collection3.png"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {

}
</script>


<style scoped>
  /* .v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
  } */
  #card {
    /* transition: opacity .4s ease-in-out; */
    border-top-left-radius: 340px;
    border-bottom-right-radius: 340px;
  }

  /* .card:not(.on-hover) {
    opacity: 0.6;
  } */

  .show-btns {
    color: rgba(255, 255, 255, 1) !important;
  }
  #radii{
    border-top-left-radius: 340px;
    border-bottom-right-radius: 340px;
  }
  #radii_below{
    border-top-left-radius: 340px;
    border-bottom-right-radius: 340px;
  }
  #coll3{
    margin-top: -291px;
  }
</style>