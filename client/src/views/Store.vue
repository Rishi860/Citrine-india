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
      <p class="pt-2">Rings</p>
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
          v-for="doc in dataa.docs"
          :key="doc"
          class="ml-3 mb-3"
        >
            <v-img
              :src="doc.image[0]"
              aspect-ratio="0.7619"
              width="256px"
              height="336px"
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
        </v-col>
      </v-row>
      <div class="text-center mt-5">
        <v-pagination
          v-model="dataa.page"
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
    dataa: {
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
    let jewelType = this.$route.params.item
    this.dataa = (await CatalogServices.index(jewelType, this.dataa.page)).data.data
    this.length = this.dataa.pages
    console.log(this.dataa.pages)
    console.log(this.dataa)
  },
  methods:{
    async getProducts(page){
      let jewelType = this.$route.params.item 
      this.dataa = (await CatalogServices.index(jewelType, page)).data.data
      this.length = this.dataa.pages
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

</style>