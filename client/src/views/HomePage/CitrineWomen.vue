<template>
  <div>
    <div class="text-center">
      <h1 class="hidden-sm-and-down heading--home">Citrine Women</h1>
      <h1 class="hidden-md-and-up heading--home--mb">Citrine Women</h1>
    </div>
    <v-container class="mt-16">
      <v-row>
        <template >
          <v-col sm="1"></v-col>
          <v-col
            cols="12"
            sm="5"
          >
            <v-img
              class="imageLeft"
              src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/radhey.png"
              aspect-ratio="0.525"
              id="radii"
              contain
              @click="navigateTo({name: 'about'})"
            >
            </v-img>
          </v-col>
          <v-col
            cols="12"
            sm="5"
          >
            <v-img
              class="imageRight"
              src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/chinky.png"
              aspect-ratio="0.525"
              id="radii"
              @click="navigateTo({name: 'about'})"
              contain
            >
            </v-img>
          </v-col>
          <v-col sm="1"></v-col>
        </template>
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
.imageLeft {
  /* transition: opacity .4s ease-in-out; */
  border-bottom-left-radius: 1340px;
  border-top-right-radius: 1340px;
}
.imageRight {
  /* transition: opacity .4s ease-in-out; */
  border-top-left-radius: 1340px;
  border-bottom-right-radius: 1340px;
}

@media only screen and (max-width: 600px) {
  .imageLeft {
      margin : auto !important;
      width : 300px !important;
      height : 571px !important;
  }
  .imageRight {
      margin : auto !important;
      width  : 300px !important;
      height : 571px !important;
  }
}
</style>