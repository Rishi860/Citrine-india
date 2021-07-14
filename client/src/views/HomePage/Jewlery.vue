<template>
  <div>
    <div class="text-center">
      <h1 class="hidden-sm-and-down heading--home">Jewellery</h1>
      <h1 class="hidden-md-and-up heading--home--mb">Jewellery</h1>
    </div>
    <v-container class="jewel--sec">
      <v-row>
        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }">
            <v-img
              src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/necklace.png"
              contain
              class="change--cursor"
              @click="navigateTo({name:'store', params:{item:'necklace'}})"
            >
                <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="#F0F0F2"
                  >
                    <v-text class="display-1" id="givecolor">Necklace</v-text>
                  </v-overlay>
                </v-fade-transition>
              </v-img>
            </v-hover>
            <v-hover v-slot="{ hover }">
            <v-img
              src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/earings.png"
              aspect-ratio="1.282"
              class="mt-4 change--cursor"
              @click="navigateTo({name:'store', params:{item:'earings'}})"
            >
                <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="#F0F0F2"
                  >
                    <v-text class="display-1" id="givecolor">Ear Rings</v-text>
                  </v-overlay>
                </v-fade-transition>
              </v-img>
            </v-hover>
        </v-col>
        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }">
            <v-img
              src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/rings.png"
              aspect-ratio="1.353"
              contain
              class="change--cursor"
              @click="navigateTo({name:'store', params:{item:'rings'}})"
            > 
              <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="#F0F0F2"
                  >
                    <v-text class="display-1" id="givecolor">Rings</v-text>
                  </v-overlay>
                </v-fade-transition>
            </v-img>
          </v-hover>
          <v-hover v-slot="{hover}">
            <v-img
              src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/handcuffs.png"
              aspect-ratio="1"
              class="mt-4 change--cursor"
              @click="navigateTo({name:'store', params:{item:'handcuf'}})"
              contain
            >
              <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="#F0F0F2"
                  >
                    <v-text class="display-1" id="givecolor">Handcuffs</v-text>
                  </v-overlay>
                </v-fade-transition>
            </v-img>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="4">
          <v-hover v-slot="{hover}">
            <v-img
              src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/harness.png"
              aspect-ratio="1.1"
              class="change--cursor"
              @click="navigateTo({name:'store', params:{item:'harness'}})"
              contain
            >
              <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="#F0F0F2"
                  >
                    <v-text class="display-1" id="givecolor">Harness</v-text>
                  </v-overlay>
                </v-fade-transition>
            </v-img>
          </v-hover>
          <v-hover v-slot="{hover}">
            <v-img
              src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/rakhi.png"
              aspect-ratio="1.235"
              class="mt-4 change--cursor"
              @click="navigateTo({name:'rakhi'})"
              contain
            >
              <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="#F0F0F2"
                  >
                    <v-text class="display-1" id="givecolor">Rakhi</v-text>
                  </v-overlay>
                </v-fade-transition>
            </v-img>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data : () => ({
      icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
    }),
    methods: {
      navigateTo(route) {
        this.$router.push(route)
      }
    }
  }
</script>  

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
    color: rgba(240, 240, 242, 1) !important;
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
  #givecolor{
    color : #25181D !important;
    font-family: 'Cormorant Garamond', serif !important;
    font-weight : 500 !important;
  }

  .change--cursor{
    cursor: pointer !important;
  }
</style>