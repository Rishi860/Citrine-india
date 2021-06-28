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
          md="6"
        >
          <v-card
            id="card"
            class="mt-16"
            max-width="400"
            color="rgba(240, 240, 242, 1)"
          >
            <v-card-title class="text-h5" color="rgba(37, 24, 29, 0.03)">My Profile</v-card-title>
            <v-divider id="divider"></v-divider>
            <v-card-actions>
              <v-btn
                class="ma-2 #25181D--text elevation-2"
                @click.prevent="loginWithGoogle"
              >
                <v-avatar color="rgba(240, 240, 242, 1)" size="25">
                  <v-icon small>
                    mdi-google
                  </v-icon>
                </v-avatar>
                Login
              </v-btn>
            </v-card-actions>
            <div>
              <p>Don't have a account? </p>
              <a @click="navigateTo({name:'signUp'})">Sign Up</a>
            </div>
          </v-card>
        </v-col>
        <v-col
          md="6"
        >
          <v-container>
            <v-img src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/notLogged.png" max-width="500px" max-height="500px" aspect-ratio="1"></v-img>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import AuthenticationServices from '../services/authenticationServics'

export default {
  name: 'login_signup_social',
  methods: {
    loginWithGoogle () {
      this.$gAuth
        .signIn()
        .then(async (GoogleUser) => {
          // on success do something
          const id_token = GoogleUser.getAuthResponse().id_token;
          const response = (await AuthenticationServices.login(id_token)).data
          this.$store.dispatch('setToken', response.token)
          this.$store.dispatch('setUser', response.user)
          this.$store.dispatch('setCart', response.cart)
          // window.history.go(-1); 
          this.navigateTo({name:'home'})
        })
        .catch(error => {
          console.log('error', error)
        })
    },
    navigateTo(route){
        this.$router.push(route)
    }
  },
  data () {
    return {
      loading3: true,
    }
  },
}

</script>

<style>
#headingText{
  background-color:rgba(37, 24, 29, 1);
  font-family: 'Cormorant Garamond', serif !important;
  font-weight : 500 !important;
  height: 72px;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
#card{
  border: 1px solid #FB9012 !important;
  box-shadow: 4px 8px 16px rgba(37, 24, 29, 0.15);
  border-radius: 8px;
}
#divider{
  border-color: #FB9012 !important;
}
</style>
