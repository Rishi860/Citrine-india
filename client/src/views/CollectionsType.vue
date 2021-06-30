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
      <p class="pt-2">{{ collectionName }}</p>
    </div>
    <v-container
      style="height: 1500px;"
      class="rgba(240, 240, 242, 1)"
    >
      <v-row
        no-gutters
        class="mt-10"
      >
        <v-col
          v-for="doc in data.docs"
          :key="doc"
          class="ml-3 mb-3"
        >
          <v-card
            elevation="4"
            class="mx-auto"
            width="216px"
            height="288px"
          >
            <v-img
              :src="doc.image[0]"
              aspect-ratio="0.75"
              width="216px"
              height="288px"
            >
              <v-app-bar
                flat
                color="rgba(0, 0, 0, 0)"
              >
                <v-spacer></v-spacer>

                <v-btn
                  fab
                  dark
                  color="rgba(37, 24, 29, 1)"
                  @click="addToCart(doc)"
                >
                  <v-icon dark>
                    mdi-cart
                  </v-icon>
                </v-btn>
              </v-app-bar>
              
              <v-card-title>
                <v-btn
                  id="buyBtn"
                  outlined
                  color="#25181D"
                  @click="navigateTo({name:'shopnow', params:{pname: doc.name}})"
                >
                  Buy Now
                </v-btn>
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-center mt-5">
        <v-pagination
          v-model="data.page"
          :length="length"
          circle
          @input="getProducts"
        ></v-pagination>
      </div>
    </v-container>
  </v-sheet>
</template>

<script>
import CatalogServices from '../services/catalogServices'
import CartServices from '../services/cartServices'

export default {
  data : ()=>({
    cart: null,
    data: {
      docs: null,
      total: null,
      limit: null,
      page: 1,
      pages: null ,
    },
    length: null,
    addedToCart: false
  }),
  computed: {
    collectionName: function () {
      return this.$route.params.cName
    }
  },
  async mounted (){
    console.log(this.collectionName)
    this.data = (await CatalogServices.index(this.collectionName)).data.data
    this.length = this.data.pages
  },
  methods:{
    async getProducts(page){
      this.data = (await CatalogServices.index('',page)).data.data
      this.length = this.data.pages
    },
    navigateTo(route){
      this.$router.push(route)
    },
    async addToCart (doc) {
      if (!this.$store.state.isUserLoggedin) {
        this.$router.push({name:'login'})
      }

      this.$store.dispatch('addToCart', {
        product: doc,
        quantity: 1
      })

      await CartServices.post({
        customer: this.$store.state.user._id,
        cart:{
          productId: doc._id,
          quantity: 1,
        }
      })
    }
  }
}
</script>

<style scoped>
#headingText{
  background-color:rgba(37, 24, 29, 1);
  font-family: 'Cormorant Garamond', serif !important;
  font-weight : 500 !important;
  height: 72px;
}
#buyBtn{
  margin-top: 160px;
  margin-left: 25px;
}
</style>