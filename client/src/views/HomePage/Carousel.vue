<template>
  <v-carousel
    height="764"
    :vertical="true"
    :vertical-delimiters="vertical-delimiters"
    :reverse="true"
    :cycle="true"
    :interval="15000"
    class="hidden-xs-only"
  >
    <v-carousel-item
      v-for="i in 6"
      :key="i"
    >
      <v-container fill-height>
        <v-row align="center" justify="center">
          <v-col md="8">
            <v-img aspect-ratio="1" class="rounded-circle mt-n16" :src="items[i-1]" max-width="280px" max-height="420px"></v-img>
            <v-img aspect-ratio="0.667" class="rounded-lg mt-5" :src="items[i]" max-width="280px" max-height="420px"></v-img>
            <v-img aspect-ratio="1" class="rounded-circle mt-5" :src="items[i+1]" max-width="280px" max-height="420px"></v-img>
          </v-col>
          <v-col md="4">
            <div id="carouselText" class="display-3">Building a better you</div>
          </v-col>
        </v-row>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>

export default {
  data: () => ({
    items: [
      'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    ],
    slides: ["lorem ipsum", "Design", "Technology" , "Technology" , "Technology" , "Technology" , "Technology" , "Technology"],
  })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap');

#top{
  margin-top: -100px;
}
#carouselText{
  font-family: 'Cormorant Garamond';
}
</style>