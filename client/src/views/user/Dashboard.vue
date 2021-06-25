<template>
  <v-sheet
    color= "rgba(240, 240, 242, 1)"
  >
    <!-- toolbar to give extra space -->
    <v-toolbar
      dense
      flat
      height="105px"
      color="rgba(37, 24, 29, 1)"
    ></v-toolbar>
    <div class="display-2 text-center white--text" id="headingText">
      <p>MY ACCOUNT</p>
    </div>
    <v-container>
      <a>
        <v-icon>
          mdi-chevron-left
        </v-icon>
        Continue Shopping
      </a>
      <v-row>
        <v-col
          md="4"
        >
          <v-card
            id="card"
            class="elevation-1 mt-10"
            max-width="400"
            color="rgba(240, 240, 242, 1)"
          >
            <v-card-title class="text-h5">My Profile</v-card-title>
            <v-divider id="divider"></v-divider>
            <v-card-text>
              <p class="text-h6 text--primary">
                {{ user.name }}
              </p>
              <p class="text-h6 text--primary">
                {{ user.email }}
              </p>
              <v-expansion-panels id="bg" flat>
                <v-expansion-panel>
                  <v-expansion-panel-header class="text-h6 text--primary">
                    Contact
                  </v-expansion-panel-header>
                  <v-expansion-panel-content v-if="contactInfo">
                    {{ contactInfo.phone }}
                  </v-expansion-panel-content>
                  <v-expansion-panel-content v-else>
                    Data Not Available
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header class="text-h6 text--primary">
                    Address
                  </v-expansion-panel-header>
                  <v-expansion-panel-content v-if="contactInfo">
                    Address1: <br>
                      {{ contactInfo.address1 }} <br>
                    Address2: <br>
                      {{ contactInfo.address2 }}
                  </v-expansion-panel-content>
                  <v-expansion-panel-content v-else>
                    Data Not Available
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>
          </v-card>
          <v-card
            id="card"
            class="elevation-1 mt-10"
            max-width="400"
            color="rgba(240, 240, 242, 1)"
          >
            <v-card-title class="text-h5">My Orders</v-card-title>
            <v-divider id="divider"></v-divider>
            <v-card-actions>
              <v-row>
                <v-col>
                  <v-btn
                    depressed
                    block
                    color="rgba(240, 240, 242, 1)"
                    left
                    @click="navigateTo({name:'previousorders'})"
                  >
                    Previous Orders
                    <v-icon right>
                      mdi-chevron-right
                    </v-icon>
                  </v-btn>
                  <v-btn
                    depressed
                    block
                    left
                    color="rgba(240, 240, 242, 1)"
                  >
                    Track Order
                    <v-icon right>
                      mdi-chevron-right
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
          <v-btn
            class="mt-2 white--text"
            color="#FB9012"
            @click="logout"
          >
            <v-icon id="icon">
              mdi-export
            </v-icon>
            Log Out
          </v-btn>
          <v-btn
            v-if="$store.state.isAdmin"
            outlined
            color="#FB9012"
            class="mt-2 ml-2"
            @click="navigateTo({name: 'adminHome'})"
          >
            Admin
          </v-btn>
        </v-col>
        <v-col md="8">
          <slot></slot>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  computed:{
    user: function () {
      console.log(this.$store.getters.getUser)
      return this.$store.getters.getUser;
    },
    contactInfo: function () {
      return this.$store.getters.contactInfo
    }
  },
  methods:{
    navigateTo(route){
      this.$router.push(route)
    },
    logout(){
      this.$store.dispatch('logout')
      this.$router.push({name:'home'})
    },
  }
}
</script>

<style>
#headingText{
  background-color:rgba(37, 24, 29, 1);
  font-family: 'Cormorant Garamond', serif !important;
  font-weight : 500 !important;
  height: 72px;
}
.v-expansion-panel{
  color: rgba(240, 240, 242, 1);
}
#card{
  border: 1px solid #FB9012 !important;
}
#divider{
  border-color: #FB9012 !important;
}
#bg{
  background-color: rgba(240, 240, 242, 1);
}
#icon{
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
</style>

