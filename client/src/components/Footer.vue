<template>
  <v-sheet
    color="rgba(240, 240, 242, 1)"
  >
    <v-footer
      padless
      class="footer"
    >
      <v-container>
        <h1 class="display-3 text-center mb-10 pt-10" id="heading">Citrine</h1>
        <div class="caption grey--text text-center"><p class="pt-10 mb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro distinctio, sequi illum voluptas veniam alias exercitationem numquam quo, quos sed vitae dolorum consectetur reprehenderit architecto. Odit sunt facilis cum atque?</p></div>
        <v-row
          justify="center"
          no-gutters
        >
          <v-btn
            v-for="(key,k) in keys"
            :key="k"
            text
            class="my-2 font-weight-bold"
            @click="navigateTo({name:`${key.link}`})"
          >
            {{ key.name }}
          </v-btn>
        </v-row>
        <v-row justify="center">
          <v-btn
            v-for="(icon,i) in icons"
            :key="i"
            color="black"
            text
            class="my-2"
          >
            <v-icon size="24px">
                {{ icon }}
            </v-icon>
          </v-btn>
          <v-col
            class="#3a3a3a py-4 text-center white--text copyright"
            cols="12"
          >
            {{ new Date().getFullYear() }} — <strong> @Citrine-India made by Rishi and Shivam.</strong>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-sheet>
</template>



<script>
export default {
  data: () => ({
    keys: [
      {name: 'Team', link:'team'},
      {name: 'Contact Us', link:'contactus'},
      {name:'Terms & Conditions', link:'tnc'},
      {name:'Shipping And Returns', link:'shipnreturn'},
    ],
    icons:[
      'mdi-facebook',
      'mdi-instagram',
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
.footer {
  font-family: Montserrat;
  margin-top: 8%;
  padding-top: 3%;
  padding-bottom: 2%;
}
.copyright {
  font-size: .75rem;
}
#heading {
  font-family: 'Cormorant Garamond', serif !important;
}
</style>