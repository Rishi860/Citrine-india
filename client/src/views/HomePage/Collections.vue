<template>
  <div>
    <div class="text-center">
      <h1 class="hidden-sm-and-down heading--home">Collections</h1>
      <h1 class="hidden-md-and-up heading--home--mb">Collections</h1>
    </div>
    <v-container class="coll--sec">
      <v-row
      >
        <v-col sm="2" md="0"></v-col>
        <v-col sm="10" md="12"
        >
          <v-card
            class="hidden-xs-only"
            color="#f0f0f2"
            flat
            height="527px"
            width="561px"
          >
            <!-- <v-img contain wdith="122px" height="122px" aspect-ratio="1" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Frame+77collection1.png"></v-img> -->
            <v-img contain wdith="475px" height="313px" aspect-ratio="1.517" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Rectangle+58collection2.png"></v-img>
            <v-hover v-slot="{ hover }">
            <v-img id="coll3" contain wdith="409px" @click="navigateTo({name:'collections'})" height="344px" aspect-ratio="1.188" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/collpicbottomup.png">
                <v-fade-transition>
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="#F0F0F2"
                    >
                      <v-text class="text-h5" id="givecolor">See Collections</v-text>
                    </v-overlay>
                  </v-fade-transition>
              </v-img>
            </v-hover>
            <v-hover v-slot="{ hover }">
              <v-img id="coll4" aspect-ratio="0.727" @click="navigateTo({name:'collections'})" width="214px" height="294px" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/collecpicmidup.png">
                <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="#F0F0F2"
                  >
                    <v-text class="text-h5" id="givecolor">See Collections</v-text>
                  </v-overlay>
                </v-fade-transition>
              </v-img>
            </v-hover>
            <v-hover v-slot="{ hover }">
            <v-img id="coll5" aspect-ratio="0.9029" @click="navigateTo({name:'collections'})" height="237" width="214" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/collpictopup.png">
              <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="#F0F0F2"
                  >
                    <v-text class="text-h5" id="givecolor">See Collections</v-text>
                  </v-overlay>
                </v-fade-transition>
            </v-img>
            </v-hover>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="2" md="5" lg="6"></v-col>
        <v-col sm="10" md="7" lg="6">
          <v-card
            class="hidden-xs-only"
            color="#f0f0f2"
            flat
            height="527px"
            width="561px"
          >
            <!-- <v-img contain wdith="122px" height="122px" aspect-ratio="1" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Frame+77collection1.png"></v-img> -->
            
            <v-img contain wdith="475px" height="313px" aspect-ratio="1.517" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Rectangle+58collection2.png"></v-img>
            <v-hover v-slot="{ hover }">
              <v-img id="dcoll3" contain wdith="409px" @click="navigateTo({name:'collections'})" height="344px" aspect-ratio="1.188" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/collpicbmbm.png">
                <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="#F0F0F2"
                  >
                    <v-text class="text-h5" id="givecolor">See Collections</v-text>
                  </v-overlay>
                </v-fade-transition>
              </v-img>
            </v-hover>
            <v-hover v-slot="{ hover }">
            <v-img id="dcoll4" aspect-ratio="0.727" @click="navigateTo({name:'collections'})" width="214px" height="294px" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/collpicmidbm.png">
                <v-fade-transition>
                      <v-overlay
                        v-if="hover"
                        absolute
                        color="#F0F0F2"
                      >
                        <v-text class="text-h5" id="givecolor">See Collections</v-text>
                      </v-overlay>
                    </v-fade-transition>
                </v-img>
            </v-hover>
            <v-hover v-slot="{hover}">
              <v-img id="dcoll5" aspect-ratio="0.9029" @click="navigateTo({name:'collections'})" height="237" width="214" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/collpictopbm.png">
                <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="#F0F0F2"
                  >
                    <v-text class="text-h5" id="givecolor">See Collections</v-text>
                  </v-overlay>
                </v-fade-transition>
              </v-img>
            </v-hover>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col xs="1"></v-col>
        <v-col xs="10">
          <v-card
            color="#f0f0f2"
            flat
            class="hidden-sm-and-up"
            width="288px"
            height="230px"
          >
            <v-img contain wdith="217px" height="143px" aspect-ratio="1.517" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Rectangle+58collection2.png"></v-img>
            <v-img id="coll3--mb" contain @click="navigateTo({name:'collections'})" wdith="187px" height="158px" aspect-ratio="1.18" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/collpicbottomup.png"></v-img>
            <v-img id="coll4--mb" width="80px" @click="navigateTo({name:'collections'})" height="123px" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/collecpicmidup.png"></v-img>
            <v-img id="coll5--mb" aspect-ratio="0.9029" @click="navigateTo({name:'collections'})" height="108px" width="97px" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/collpictopup.png"></v-img>
          </v-card>
        </v-col>
        <v-col xs='1'></v-col>
      </v-row>
      <v-row>
        <v-col xs="1"></v-col>
        <v-col xs="10">
          <v-card
            color="#f0f0f2"
            flat
            class="hidden-sm-and-up"
            width="288px"
            height="230px"
          >
            <v-img contain wdith="217px" height="143px" aspect-ratio="1.517" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Rectangle+58collection2.png"></v-img>
            <v-img id="coll3--mb" contain wdith="187px" @click="navigateTo({name:'collections'})" height="158px" aspect-ratio="1.18" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/collpicbmbm.png"></v-img>
            <v-img id="coll4--mb" width="80px" height="123px" @click="navigateTo({name:'collections'})" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/collpicmidbm.png"></v-img>
            <v-img id="coll5--mb" aspect-ratio="0.9029" height="108px" @click="navigateTo({name:'collections'})" width="97px" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/collpictopbm.png"></v-img>
          </v-card>
        </v-col>
        <v-col xs="1"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  methods:{
    navigateTo(route){
      this.$router.push(route)
    }
  }
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
    margin-left: 200px;
    cursor: pointer !important;
  }
  #coll5{
    margin-top: -420px;
    margin-left: 325px;
  }
  #coll3--mb{
    margin-top: -125px;
    margin-left: -60px;
  }
  #coll4--mb{
    margin-top: -136px;
    margin-left: 130px;
    cursor: pointer !important;
  }
  #coll5--mb{
    margin-top: -200px;
    margin-left: 175px;
  }
  #dcoll3--mb{
    margin-top: -291px;
    margin-left: -193px;
    cursor: pointer !important;
  }
  #dcoll4--mb{
    margin-top: -316px;
    margin-left: 192px;
  }
  #dcoll5--mb{
    margin-top: -420px;
    cursor: pointer !important;
    margin-left: 325px;
  }
  #dcoll3{
    margin-top: -291px;
    margin-left: -193px;
    cursor: pointer !important;
  }
  #dcoll4{
    margin-top: -316px;
    margin-left: 192px;
  }
  #dcoll5{
    margin-top: -420px;
    cursor: pointer !important;
    margin-left: 325px;
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
  .coll--sec{
    margin-top: 150px;
  }
</style>