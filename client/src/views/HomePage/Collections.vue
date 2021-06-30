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
            class="hidden-sm-and-down"
            color="#f0f0f2"
            flat
            height="527px"
            width="561px"
          >
            <!-- <v-img contain wdith="122px" height="122px" aspect-ratio="1" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Frame+77collection1.png"></v-img> -->
            <v-img contain wdith="475px" height="313px" aspect-ratio="1.517" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Rectangle+58collection2.png"></v-img>
            <v-img id="coll3" contain wdith="409px" height="344px" aspect-ratio="1.188" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Frame+83collection3.png"></v-img>
            <v-img id="coll4" aspect-ratio="0.727" width="214px" height="294px" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Rectangle+63collection4.png"></v-img>
            <v-img id="coll5" aspect-ratio="0.9029" height="237" width="214" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Frame+80collection5.png"></v-img>
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
    margin-left: -193px;
  }
  #coll4{
    margin-top: -316px;
    margin-left: 183px;
  }
  #coll5{
    margin-top: -364px;
    margin-left: 310px;
  }
</style>