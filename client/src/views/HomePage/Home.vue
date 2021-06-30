<template>
  <v-sheet
    color= "#F0F0F2"
  >
    <!-- Testimolials -->
    <home-carousel></home-carousel>
    <!-- Quote -->
    <p class="quote">
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    </p>
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
    <!-- Collection-starts -->
    <div id="jewlery" class="mt-6">
      <jewlery></jewlery>
    </div>
    <div id="collections" class="mt-16">
      <collections-vue></collections-vue>
    </div>
    <div id="influencers">
      <influencers></influencers>
    </div>
  </v-sheet>
</template>

<script>
import Influencers from './Influencers.vue'
import Jewlery from './Jewlery.vue'
import HomeCarousel from './Carousel.vue'
import CollectionsVue from './Collections.vue'

  export default {

    data () {
      return {
        reveal: false,
        transparent: 'rgba(255, 255, 255, 0)',
        icons: ['mdi-heart', 'mdi-share-variant', 'mdi-shop'],
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
          },
          {
            src: 'https://citrine-india-site.s3.ap-south-1.amazonaws.com/F8.jpeg',
          },
          {
            src: 'https://citrine-india-site.s3.ap-south-1.amazonaws.com/F7.jpeg',
          },
          {
            src: 'https://citrine-india-site.s3.ap-south-1.amazonaws.com/F5.jpeg',
          },
          {
            src: 'https://citrine-india-site.s3.ap-south-1.amazonaws.com/F4.jpeg',
          },
          {
            src: 'https://citrine-india-site.s3.ap-south-1.amazonaws.com/F3p.jpg',
          },
        ],
      }
    },
    methods :{
      navigateTo(route){
        this.$router.push(route);
      }
    },
    components:{
      Influencers,
      Jewlery,
      HomeCarousel,
      CollectionsVue
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap');
  .quote {
    text-align: center;
    font-weight: bold;
    font-size: 1.1rem;
    padding-top: 6%;
    padding-bottom: 3%;
  }
  .collections {
    margin-top: 100px;
  }
  .collections h2{
    text-align: center;
  }
  .rakhiTypes {
    margin-bottom: 15%;
    margin-top: 15%;
  }

  .befor-enter{
    opacity:0;
    transform: translateY(100px);
    transition: all 3s ease-out;
  }

  .enter{
    opacity:1;
    transform: translateY(0px);
  }
</style>
