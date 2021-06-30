<template>
  <v-sheet
    color="rgba(240, 240, 242, 1)"
  >
    <v-container>
      <v-footer
        color = "rgba(240, 240, 242, 1)"
        padless
        class="footer"
      >
        <v-card flat color="rgba(240, 240, 242, 1)">
          <h1 class="my-10" id="heading">CitrineIndia</h1>
          <v-text
            class="grey--text py-4 text-center copyright mt-10"
            md="4"
          >
            Copyright @ {{ new Date().getFullYear() }}.<strong> CitrineIndia. All rights reserved.</strong>
          </v-text>
            <!-- <v-divider dark="true"></v-divider> -->
          <!-- <div class="caption grey--text text-center" id="description"><p class="pt-10 mb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro distinctio, sequi illum voluptas veniam alias exercitationem numquam quo, quos sed vitae dolorum consectetur reprehenderit architecto. Odit sunt facilis cum atque?</p></div> -->
          <!-- <v-row
            justify="center"
            no-gutters
            class="pt-10 mb-10"
          > -->
          <v-row class="mt-10 mb-1">
            <v-col cols="2" md="2">
              <v-btn
                v-for="k in 4"
                :key="k"
                text
                class="my-2 font-weight-bold"
                id="givemargin"
                @click="navigateTo({name:`${keys[k-1].link}`})"
              >
                {{ keys[k-1].name }}
              </v-btn>
            </v-col>
            <v-col cols="2" md="2">
              <v-btn
                v-for="k in 3"
                :key="k"
                text
                class="my-2 font-weight-bold"
                id="givemargin"
                @click="navigateTo({name:`${keys[k+3].link}`})"
              >
                {{ keys[k+3].name }}
              </v-btn>
            </v-col>
            <v-col cols="2" md="2"></v-col>
            <v-col cols="5" md="5">
              <v-row>
                <v-col md="1">
                  <v-icon>mdi-phone</v-icon>
                </v-col>
                <v-col md="4">
                  <p>+919829558616</p>
                  <p>+919166469999</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col md="1">
                  <v-icon>mdi-email</v-icon>
                </v-col>
                <v-col md="4">hello@citrineindia.in</v-col>
              </v-row>
              <v-row>
                <v-col md="1">
                  <v-icon>mdi-map-marker</v-icon>
                </v-col>
                <v-col md="4">
                  <p>
                    7,Desh Bushan Nagar, 
                  <br>
                    Delhi Bypass Road , Jaipur-302003
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col 
              cols="1"
              md="1" 
            >
              <v-row
                v-for="i in 2"
                :key="i"
              >
                <v-btn
                  icon
                  class="my-2 mr-10"
                  @click="navigateTo({name:`${icons[i-1].name}`})"
                >
                  <v-icon color="black">{{icons[i-1].image}}</v-icon>
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-footer>
    </v-container>
  </v-sheet>
</template>



<script>
export default {
  data: () => ({
    keys: [
      {name: 'Jewellery', link:'team'},
      {name: 'Collections', link:'contactus'},
      {name:'Deals', link:'tnc'},
      {name:'Trends', link:'tnc'},
      {name:'About', link:'tnc'},
      {name:'Terms & Conditions', link:'tnc'},
      {name:'Shiping & Returns', link:'tnc'},
    ],
    icons:[
      {name : '' , image:'mdi-facebook'},
      {name : '' , image:'mdi-instagram'},
    ]
  }),
  methods:{
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap');

.footer {
  font-family: 'Montserrat',sans-serif;
  margin-top: 8%;
  padding-top: 3%;
  padding-bottom: 2%;
}
.copyright {
  font-size: .75rem;
}

#changecolor{
  background-color :#EFEFF1 !important;
}

#givemargin{
  margin-right : 70px !important;
}

#heading{
  font-family: 'Cormorant Garamond', serif !important;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 133.7%;
}
</style>